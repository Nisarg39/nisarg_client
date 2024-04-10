"use client"
import { Dashboard } from "@/components/ui/Dashboard"

const dummyClients = [
    {
        _id: "1",
        firm: "NashTech Pvt Ltd",
        address: "Nastech Pvt Ltd, near vishant hotel, Andheri-West , Mumbai, India",
        productName: "www.nashtech.com",
        sessionsArray: [
            {
                _id: "1",
                startTime: "6:20 pm",
                endTime: "8:30 pm",
                sessionDate: "2022-01-08",
                summary: "Made intial contact with client",
                paymentStatus: true,
            },
            {
              _id: "2",
                startTime: "4:20 pm",
                endTime: "9:30 pm",
                sessionDate: "2022-01-15",
                summary: "First landing page design",
                paymentStatus: false,
            },
            {
              _id: "3",
                startTime: "10:20 pm",
                endTime: "11:30 pm",
                sessionDate: "2022-01-18",
                summary: "First landing page design",
                paymentStatus: false,
            }
        ]
    }
]
export default function Page() {


  return (
    <>
    <h1 className="text-6xl font-bold flex justify-center pt-4 pb-2">Client and Admin Dashboard</h1>
    <p className="text-sm flex justify-center mb-8 text-sky-400 font-extralight">
      Admin and Client see the same dashboard but there is only a simple difference that Admin has control to edit the details
    </p>

    <Dashboard 
          firm={dummyClients[0].firm}
          address={dummyClients[0].address}
          productName={dummyClients[0].productName}
          sessionsArray={dummyClients[0].sessionsArray}
          isAdmin={false}
    />
    </>
  )
}
