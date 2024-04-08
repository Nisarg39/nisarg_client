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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signIn } from "../../server/controllers/client_actions"
export function LoginForm() {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(true)

  const handleSubmit = async () => {
    const response = await signIn(email);
    if(response.token){
        localStorage.setItem("token", response.token);
        window.location.href = "/";
    }else{
        setStatus(response.status)
    }
  };

  return (
    <Card className="w-full max-w-sm bg-dark-100 ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Sign in</Button>
        {status ? null
            :
            <p className="text-base text-red-600 ms-4">Invalid Email Address</p>
        }
      </CardFooter>
    </Card>
  );
}
