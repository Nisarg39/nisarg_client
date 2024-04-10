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

const Home = () => {
  const [selected, newSelected] = React.useState(0);

  return (

     <div className='flex flex-col justify-center items-center min-h-screen w-100'>
      {selected === 1 && 
         <>
         <CreateUserForm isAdmin = {true}/> 
         <h1 
         onClick={() => newSelected(0)}
         className='p-2 mt-2 w-64 text-center text-blue-500 hover:text-blue-700'
         style={{ border: "2px white solid", borderRadius: "10px"}}>
          Back
         </h1>
 
       </>
      }
      {selected === 2 && 

      <>
        <CreateSession isAdmin = {true} /> 
        <h1 
         onClick={() => newSelected(0)}
         className='p-2 mt-2 w-64 text-center text-blue-500 hover:text-blue-700'
         style={{ border: "2px white solid", borderRadius: "10px"}}>
          Back
         </h1>

      </>
      
      }
      {selected === 0 &&
        <Card className='grid grid-row-1 gap-12 w-100 max-w-3xl p-8 m-auto my-16'>
          <CardHeader>
            {selected === 1 ? null : 
              <CardTitle onClick={() => newSelected(1)} className='underline underline-offset-4'>
                Create User
              </CardTitle>
            }
          </CardHeader>
          <Separator className=''/>
          <CardHeader>
            
            {selected ===2 ? null : 
              <CardTitle onClick={() => newSelected(2)} className='underline underline-offset-4'>
                Create Session
              </CardTitle>
            }
          </CardHeader>
          <CardHeader className=''>
            <Link href="/admin/dashboard">
            <CardTitle className='underline underline-offset-4'>Dashboard</CardTitle>
            </Link>
          </CardHeader>
        </Card>
      }
    </div>
  )
}

export default Home