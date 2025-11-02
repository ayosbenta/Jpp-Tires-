import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About & Logo */}
          <div className="lg:col-span-1">
            <a href="#home" className="text-3xl font-bold text-white">
              JPP <span className="text-red-500">Tires Trading</span>
            </a>
            <p className="mt-4 text-gray-400">
              Your trusted partner for high-quality tires and expert automotive services.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-red-500"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-red-500"><InstagramIcon /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">&#9656;</span>
                <span>123 Tire Lane, Auto City, 45678</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">&#9656;</span>
                <a href="mailto:contact@jpptires.com" className="hover:text-red-500">contact@jpptires.com</a>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">&#9656;</span>
                <a href="tel:+1234567890" className="hover:text-red-500">(123) 456-7890</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#tires" className="hover:text-red-500 transition-colors">Tires</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
               <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
             <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Business Hours</h3>
             <ul className="mt-4 space-y-2 text-gray-400">
                <li><span className="font-semibold text-gray-300">Monday - Friday:</span> 8:00 AM - 6:00 PM</li>
                <li><span className="font-semibold text-gray-300">Saturday:</span> 9:00 AM - 4:00 PM</li>
                <li><span className="font-semibold text-gray-300">Sunday:</span> Closed</li>
             </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} JPP Tires Trading. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;