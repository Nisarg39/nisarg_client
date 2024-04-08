"use server"
import jwt from "jsonwebtoken";
import Client from "@/server/models/clients";
import { connectToDB } from "@/server/config/mongoose.js";
import Session from "@/server/models/session";

export async function createUser(firm, email, address, owner_name, productName) {
    connectToDB()
    
    var jwttoken = jwt.sign({ email }, "nisargshah", { expiresIn: "2y" })

    const client = await Client.create({
        firm : firm,
        email: email,
        token: jwttoken,
        address: address,
        owner_name: owner_name,
        productName: productName
    })

    return({
        message: "user created"
    })
    
}

export async function newSession(firm, startTime, endTime, sessionDate) {
    connectToDB()
    const client = await Client.findOne({firm: firm})

    const session = await Session.create({
        clientId: client._id,
        firm: firm,
        startTime: startTime,
        endTime: endTime,
        sessionDate: sessionDate,
    })

    client.sessions.push(session._id)
    await client.save()

    if (session) {
        return ({
            status: true,
            message: "session created"
        })
    }else {
        return ({
            status: false,
            message: "session not created"
        })
    }

}

export async function getClients() {
    connectToDB()
    const clients = await Client.find({})
    const allClients = []
    for (let i = 0; i < clients.length; i++) {
        const client = clients[i]
        const { firm, email, address, owner_name, productName, _id } = client
        const clientObj = {
            firm,
            email,
            address,
            owner_name,
            productName,
            _id
        }
        allClients.push(clientObj)
    }
    return allClients
}
