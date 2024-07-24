import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input placeholder="Your Name" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Textarea placeholder="Your Message" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>You can also reach us using the following information:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-blue-600" />
              <span>123 App Street, Tech City, 12345</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-blue-600" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-blue-600" />
              <span>contact@myapp.com</span>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;