import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home, Settings, User } from 'lucide-react';

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My App</h1>
        <nav>
          <Button variant="ghost" className="mr-2"><Home className="mr-2" size={18} />Home</Button>
          <Button variant="ghost" className="mr-2"><User className="mr-2" size={18} />Profile</Button>
          <Button variant="ghost"><Settings className="mr-2" size={18} />Settings</Button>
        </nav>
      </header>

      <main>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>This is a bare-bones application you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Start by modifying this component or adding new ones.</p>
            <Input placeholder="Enter something..." className="mb-4" />
            <Button>Submit</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Footer information goes here</p>
          </CardFooter>
        </Card>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}