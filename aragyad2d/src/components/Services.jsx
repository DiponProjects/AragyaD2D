// src/components/Services.jsx
import React from 'react';
import { 
  VideoCameraIcon, 
  ShoppingCartIcon, 
  DocumentTextIcon, 
  CalendarIcon,
  HeartIcon,
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: VideoCameraIcon,
      title: "Online Consultation",
      description: "Connect with top specialists via video call from the comfort of your home.",
      color: "bg-blue-500",
      link: "/consultation"
    },
    {
      icon: ShoppingCartIcon,
      title: "Medicine Delivery",
      description: "Order prescribed medicines and get them delivered to your doorstep quickly.",
      color: "bg-green-500",
      link: "/medicines"
    },
    {
      icon: DocumentTextIcon,
      title: "Digital Prescription",
      description: "Receive and store digital prescriptions securely in your account.",
      color: "bg-purple-500",
      link: "/prescriptions"
    },
    {
      icon: CalendarIcon,
      title: "Health Checkups",
      description: "Schedule regular health checkups and diagnostic tests at home.",
      color: "bg-orange-500",
      link: "/checkups"
    },
    {
      icon: HeartIcon,
      title: "Emergency Care",
      description: "24/7 emergency consultation and ambulance booking services.",
      color: "bg-red-500",
      link: "/emergency"
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "Health Records",
      description: "Maintain your complete health history in one secure place.",
      color: "bg-teal-500",
      link: "/records"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <Link to={service.link}>
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;