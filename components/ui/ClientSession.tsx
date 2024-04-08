import {
    TableCell,
    TableRow,
  } from "@/components/ui/table"
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
 } from "@radix-ui/react-dropdown-menu";

import { MoreHorizontal } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export function ClientSession (props: any){

  return (
    <>
      <TableRow>
        {/* <TableCell className="font-medium">{props.sessionId}</TableCell> */}
        <TableCell className="hidden sm:table-cell">
          {props.index + 1}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {props.summary}
        </TableCell>
        {props.paymentStatus ? 
            <TableCell className="hidden md:table-cell text-green-600">Paid</TableCell>
            : 
            <TableCell className="hidden md:table-cell text-red-600">Pending</TableCell>
        }
        
        {/* <TableCell className="hidden md:table-cell">{props.pricing}</TableCell> */}
        <TableCell className="hidden md:table-cell">{props.sessionDate}</TableCell>
        <TableCell className="hidden md:table-cell">
          {props.startTime}
        </TableCell>
        <TableCell className="hidden md:table-cell">{props.endTime}</TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Card className="bg-black text-slate-900 p-4 shadow-sm rounded w-full">
                {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                <DropdownMenuItem className="p-2">Edit</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Delete</DropdownMenuItem>
              </Card>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ClientSession