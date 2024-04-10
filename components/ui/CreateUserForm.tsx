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

import { createUser } from "@/app/admin/admin_actions"

export function CreateUserForm(props: any) {
    const [email, setEmail] = useState("");
    const [firm, setFirm] = useState("");
    const [address, setAddress] = useState("")
    const [owner_name, setOwner] = useState("")
    const [productName, setProductName] = useState("")
    const [isAdmin, setIsAdmin] = useState(props.isAdmin)

  const handleSubmit = async () => {
    const response = await createUser(firm, email, address, owner_name, productName);
  };

  return (
    <Card className="w-full max-w-sm bg-dark-100 ">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Client</CardTitle>
        <CardDescription>
          Enter client's email and firm name to create new client.
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

        <div className="grid gap-2">
          <Label htmlFor="firm">Firm Name</Label>
          <Input
            id="firm"
            placeholder="firm's name"
            required
            onChange={(e) => setFirm(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="owner">Owner Name</Label>
          <Input
            id="owner"
            placeholder="Owner's Name"
            required
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="product">Product Name</Label>
          <Input
            id="product"
            placeholder="Product Name"
            required
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>


      </CardContent>
      <CardFooter>
        {isAdmin ? (
          <Button onClick={handleSubmit}>Create User</Button>
        ) : (
          <Button className="" onClick={() => alert("A new Client will be created (only for admin)")}>Create Client</Button>
        )}
      </CardFooter>
    </Card>
  );
}
