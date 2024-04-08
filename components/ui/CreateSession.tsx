"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup
} from "@/components/ui/dropdown-menu"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

import { newSession } from "@/app/admin/admin_actions"
import { getClients } from "@/app/admin/admin_actions";
import { DatePicker } from "./DatePicker";

export function CreateSession() {

    const [firm, setFirm] = useState([{}]);
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const[position, setPosition] = useState("Client Name")  
    const [sessionDate, setSessionDate] = useState("");

    async function getDetails(){
      const details = await getClients() 
      setFirm(details)
    }

  useEffect(() => {
    getDetails();
    
  }, []);

  const handleSubmit = async () => {
    const response = await newSession(position, startTime, endTime, sessionDate);
      if (response.status == true) {
        alert("Session Created Successfully");
      } else {
        alert("Error Creating Session");
      }
  };

  // converting date into string
  function formatDate(date: string) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [day, month, year].join('/');
  }

  // datepicker callback
  function datePicker(date: string) {
    const formatted = formatDate(date);
    setSessionDate(formatted); 
  }


  return (
    <Card className="w-full max-w-sm bg-dark-100 ">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Session</CardTitle>
        <CardDescription>
          Enter client's email and firm name to create new client.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">

        <div className="grid gap-2">
      <DropdownMenu>
      <DropdownMenuTrigger asChild> 
        <Button variant="outline">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

          {firm.map((client) => (
            <DropdownMenuRadioItem value={client.firm}>{client.firm}</DropdownMenuRadioItem>
            ))}   

        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>

        <div className="grid gap-2">
          <DatePicker parentCallback={datePicker} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="start_time">Start Time</Label>
          <Input
            id="start_time"
            placeholder="Start Time"
            required
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="endTime">End Time</Label>
          <Input
            id="endTime"
            placeholder="End Time"
            required
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Create Session</Button>
      </CardFooter>
    </Card>
  );
}
