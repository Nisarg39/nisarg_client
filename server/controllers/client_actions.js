'use server'

import {connectToDB} from '../config/mongoose.js'
import Client from '../models/clients.js'
import Session from '../models/session.js'

var count = 0;
export async function signIn(username) {
    connectToDB();
    const client = await Client.findOne({email: username});
    if (client) {
        
        return({
            token: client.token,
            status: true
        })
    } else {
        return({
            token: "",
            status: false
        })
    }
}


// client details for login and dashboard
export async function getClientDetails(token) {
  connectToDB();
  let sessionsArray = [];
  try {
    // populate not working . so manually fetching sessions
    const client = await Client.findOne({ token })

    if (!client) {
      throw new Error("Client not found");
    }

    sessionsArray = await Promise.all(
      client.sessions.toReversed().map(async (session) => {
        const sessionObj = await Session.findOne({ _id: session });
        sessionObj.sessionDate = sessionObj.sessionDate.toString();
        return sessionObj;
      })
    );

    return {
      firm: client.firm,
      email: client.email,
      productName: client.productName,
      address: client.address,
      ownerName: client.owner_name,
      sessions: sessionsArray,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
