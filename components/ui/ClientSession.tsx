import { TableCell, TableRow } from "@/components/ui/table";
import { Input } from "./input";

import SessionActions from "./SessionActions";

import { useState } from "react";
import { updateSession } from "@/app/admin/admin_actions";

export function ClientSession(props: any) {
  const [editClicked, setEditClicked] = useState(false);

  const [sessionId, setSessionId] = useState(props.sessionId);
  const [summary, setSummary] = useState(props.summary);
  const [paymentStatus, setPaymentStatus] = useState(props.paymentStatus);
  const [sessionDate, setSessionDate] = useState(props.sessionDate);
  const [startTime, setStartTime] = useState(props.startTime);
  const [endTime, setEndTime] = useState(props.endTime);

  function handleEdit() {
    setEditClicked(true);
  }

  async function handleSave() {
    setEditClicked(false);
    const updatedSessionDetails = {
      sessionId: sessionId,
      summary: summary,
      paymentStatus: paymentStatus,
      sessionDate: sessionDate,
      startTime: startTime,
      endTime: endTime,
    };
    const sessionResult = await updateSession(updatedSessionDetails);
    if(sessionResult.status == true){
        alert("Session Updated Successfully");
    }else{
        alert("Error Updating Session");
    }
  }

  return (
    <>
      <TableRow>
        {/* <TableCell className="font-medium">{props.sessionId}</TableCell> */}
        <TableCell className="hidden sm:table-cell">
          {props.index + 1}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {editClicked ? (
            <Input
              className="w-full"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          ) : (
            <span className="text-sm">{summary}</span>
          )}
        </TableCell>
        {paymentStatus ? (
          <TableCell className="hidden md:table-cell text-green-600" onClick={() => setPaymentStatus(false)}>
            Paid
          </TableCell>
        ) : (
          <TableCell className="hidden md:table-cell text-red-600" onClick={() => setPaymentStatus(true)}>
            Pending
          </TableCell>
        )}

        {/* <TableCell className="hidden md:table-cell">{props.pricing}</TableCell> */}
        <TableCell className="hidden md:table-cell">
          {editClicked ? (
            <Input
              className="w-full"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
            />
          ) : (
            <span className="text-sm">{sessionDate}</span>
          )}
        </TableCell>

        <TableCell className="hidden md:table-cell">
          {editClicked ? (
            <Input
              className="w-full"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          ) : (
            <span className="text-sm">{startTime}</span>
          )}
        </TableCell>

        <TableCell className="hidden md:table-cell pe-2">
            {editClicked ? (
            <Input
              className="w-full"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          ) : (
            <span className="text-sm">{endTime}</span>
          )}
        </TableCell>

        {/* dropdown only if isAdmin is true passed from props */}
        {props.isAdmin ? (
          <TableCell>
            <SessionActions
              sessionId={sessionId}
              handleEdit={handleEdit}
              handleSave={handleSave}
            />
          </TableCell>
        ) : null}
      </TableRow>
    </>
  );
}

export default ClientSession;
