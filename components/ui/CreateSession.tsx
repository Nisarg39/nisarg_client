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
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

import { newSession } from "@/app/admin/admin_actions";
import { getClients } from "@/app/admin/admin_actions";
import { DatePicker } from "./DatePicker";

export function CreateSession(props: any) {

  const [firmList, setFirmList] = useState([{ firm: "", _id: "" }]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [position, setPosition] = useState("Client Name");
  const [sessionDate, setSessionDate] = useState("");
  const [isAdmin, setIsAdmin] = useState(props.isAdmin);

  async function getDetails() {
    const details = await getClients();
    setFirmList(details);
  }

  useEffect(() => {
    getDetails();
  }, []);

  const handleSubmit = async () => {
    const response = await newSession(
      position,
      startTime,
      endTime,
      sessionDate
    );
    if (response.status == true) {
      alert("Session Created Successfully");
    } else {
      alert("Error Creating Session");
    }
  };

  // converting date into string
  function formatDate(date: string) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
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
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                {firmList.map((client) => (
                  <DropdownMenuRadioItem value={client.firm} key={client._id}>
                    {client.firm}
                  </DropdownMenuRadioItem>
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
        {isAdmin? (
          <Button onClick={handleSubmit}>Create Session</Button>
        ) : (
          <Button onClick={() => alert("A session will be created for that particular firm (only for admin)" )}>Create Session</Button>
        )}
      </CardFooter>
    </Card>
  );
}
