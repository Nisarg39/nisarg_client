"use client"
import { Dashboard } from "@/components/ui/Dashboard";
import { LoginForm } from "@/components/ui/LoginForm";
import { useEffect, useState } from "react";
import { getClientDetails } from "@/server/controllers/client_actions";
import Link from "next/link";

export default function Home() {

  const [firm, setFirm] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [address, setAddress] = useState("");
  const [productName, setProductName] = useState("");
  const [sessionsArray, setSessionsArray] = useState([{}]);

  useEffect(() => {
    const getUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        setSignedIn(true);
        const userDetails = await getClientDetails(token);
        setFirm(userDetails.firm);
        setAddress(userDetails.address);
        setProductName(userDetails.productName);
        setSessionsArray(userDetails.sessions);
        // console.log(userDetails.sessions);
      }
    };

    getUserDetails();
  }, []);


 

  return (
    <>
    {signedIn ? 

      <div className="flex flex-col items-center justify-center min-h-screen p-12">
        <Dashboard 
          firm={firm}
          address={address}
          productName={productName}
          sessionsArray={sessionsArray}
          isAdmin={false}
        />
      </div>
    
      : 
      <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        Welcome To Nisarg's Portal
      </h1>

      <h4 className="scroll-m-20 text-lg font-light tracking-tight mb-8">
        You can track all the sessions which I have done for you in detail 
      </h4>

      <LoginForm />
      <Link href="/recruiter" className="m-4 underline underline-offset-2 hover:underline-offset-4">Click Here If You Are A Recruiter ?</Link>
    </div>
      </>
    }
    
    </>
  );
}
