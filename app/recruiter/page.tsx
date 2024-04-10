"use client"
import React from 'react'
import { CreateUserForm } from '@/components/ui/CreateUserForm'
import { CreateSession } from '@/components/ui/CreateSession'
import { Card,  
  CardHeader, 
  CardTitle, 
} from '@/components/ui/card'
import Link from 'next/link'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'

export default function Page(){
    const [selected, newSelected] = useState(0);

    return (
      <>
        <h1 className="text-4xl flex flex-row items-center justify-center mt-2">Admin Main Control View</h1>
        <p></p>
        <div className="flex flex-col items-center justify-center justify-start min-h-screen">
          {selected === 1 && (
            <>
              <CreateUserForm isAdmin={false} />
              <h1
                onClick={() => newSelected(0)}
                className="p-2 mt-2 w-96 text-center text-blue-500 hover:text-blue-700"
                style={{ border: "2px white solid", borderRadius: "10px" }}
              >
                Back
              </h1>
            </>
          )}
          {selected === 2 && (
            <>
              <CreateSession isAdmin={false} />
              <h1
                onClick={() => newSelected(0)}
                className="p-2 mt-2 w-96 text-center text-blue-500 hover:text-blue-700"
                style={{ border: "2px white solid", borderRadius: "10px" }}
              >
                Back
              </h1>
            </>
          )}
          {selected === 0 && (
            <Card className="grid grid-row-1 gap-12 w-64 max-w-3xl p-4">
              <CardHeader>
                {selected === 1 ? null : (
                  <CardTitle onClick={() => newSelected(1)} className='underline underline-offset-4'>
                    Create User
                  </CardTitle>
                )}
              </CardHeader>
              <CardHeader>
                {selected === 2 ? null : (
                  <CardTitle onClick={() => newSelected(2)} className='underline underline-offset-4'>
                    Create Session
                  </CardTitle>
                )}
              </CardHeader>
              <CardHeader className="">
                <Link href="/recruiter/dashboard">
                  <CardTitle className='underline underline-offset-4'>Dashboard</CardTitle>
                </Link>
              </CardHeader>
            </Card>
          )}
        </div>
      </>
    );
}