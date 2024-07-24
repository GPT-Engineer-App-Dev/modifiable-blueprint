import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-5 w-5" />
              <span>123 App Street, Tech City, 12345</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 h-5 w-5" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>contact@myapp.com</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Copyright Information */}
          <div className="w-full md:w-1/3 text-right">
            <p>&copy; 2023 My App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;