// src/components/Footer.jsx
import { BeakerIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BeakerIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AragyaD2D</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in healthcare. Making quality medical services accessible to everyone.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Online Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Medicine Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Lab Tests</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Health Records</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">support@medicare.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">123 Healthcare St, Medical District, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AragyaD2D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;