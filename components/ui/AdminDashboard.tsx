import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useState } from "react"
import { getClientDetails } from "@/server/controllers/client_actions"
import { Dashboard } from "./Dashboard"

export default function AdminDashboard(props: any) {

    const [selectedClient, setSelectedClient] = useState("")
    const [firm, setFirm] = useState("")
    const [address, setAddress] = useState("")
    const [productName, setProductName] = useState("")
    const [sessionsArray, setSessionsArray] = useState([{}])


    async function handleClick (token: string) {
        setSelectedClient(token)
    //   console.log(token)
        const clientDetails = await getClientDetails(token)
        console.log(clientDetails)
        setFirm(clientDetails.firm)
        setAddress(clientDetails.address)
        setProductName(clientDetails.productName)
        setSessionsArray(clientDetails.sessions)
    }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* dropdown to select client */}
        {selectedClient ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Select Client</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Clients</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {props.clients.map((f: any) => (
                  <DropdownMenuItem
                    key={f._id}
                    onClick={() => handleClick(f.token)}
                  >
                    {f.firm}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        ) : null}
      </div>

      {/* dashboard based on dropdown selection */}
      {selectedClient ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <Dashboard
            firm={firm}
            address={address}
            productName={productName}
            sessionsArray={sessionsArray}
            isAdmin={true}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <p className="text-2xl mb-4">
            Select a client to view their dashboard
          </p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Select Client</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Clients</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {props.clients.map((f: any) => (
                  <DropdownMenuItem
                    key={f._id}
                    onClick={() => handleClick(f.token)}
                  >
                    {f.firm}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </>
  );
}
