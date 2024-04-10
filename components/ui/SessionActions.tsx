"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Card } from "./card";
import {useState} from 'react'
export default function SessionActions(props: any) {

    const [isEdit, setEdit] = useState(true)

    async function handleEdit() {
        props.handleEdit()
        setEdit(false)
    }

    async function handleSave(){
        props.handleSave()
        setEdit(true)
    }
    return(
        <>
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

            {isEdit ? 
                <DropdownMenuItem 
                    className="p-2" 
                    id={props.sessionId}
                    onClick={() => handleEdit()}
                >
                    Edit
                </DropdownMenuItem>
            :
            <DropdownMenuItem 
                className="p-2" 
                id={props.sessionId}
                onClick={() => handleSave()}
            >
                Save
            </DropdownMenuItem>
            }
                <DropdownMenuItem 
                    className="p-2" 
                    id={props.sessionId}
                >
                    Delete
                </DropdownMenuItem>
              </Card>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
    )
}