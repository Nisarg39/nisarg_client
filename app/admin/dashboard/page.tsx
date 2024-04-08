"use client"
import { useEffect, useState } from "react"
import { getClients } from "../admin_actions"
import AdminDashboard from "@/components/ui/AdminDashboard";

export default function page() {

  const [firm, setFirm] = useState([{}]);


  async function getDetails(){
    const details = await getClients() 
    setFirm(details)
  }

  useEffect(() => {
   getDetails()
  }, [])
  return (
    <AdminDashboard 
      clients = {firm}
    />
  )
}
