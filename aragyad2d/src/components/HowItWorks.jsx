// src/components/HowItWorks.jsx
import React from 'react';
import { UserPlusIcon, CalendarIcon, VideoCameraIcon, TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlusIcon,
      title: "Sign Up",
      description: "Create your account with basic details",
      step: "01",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CalendarIcon,
      title: "Book Appointment",
      description: "Choose a specialist and convenient time slot",
      step: "02",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: VideoCameraIcon,
      title: "Consult Online",
      description: "Video call with your doctor and get prescription",
      step: "03",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TruckIcon,
      title: "Get Medicines",
      description: "Medicines delivered to your doorstep",
      step: "04",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How <span className="text-blue-600">It Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to get quality healthcare at your fingertips
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;