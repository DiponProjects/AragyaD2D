// src/pages/AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  UsersIcon, 
  GlobeAltIcon,
  HeartIcon,
  BriefcaseIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const AboutUs = () => {
  const team = [
    {
      name: "Dipon Bhattacharya",
      role: "Founder & CEO",
      icon: BriefcaseIcon,
      description: "Leading the vision and strategy of AragyaD2D",
      color: "bg-blue-500"
    },
    {
      name: "Aditya Mukherjee",
      role: "Co-Founder & CTO",
      icon: ComputerDesktopIcon,
      description: "Heading technology and product development",
      color: "bg-indigo-500"
    }
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Trust & Safety",
      description: "Verified doctors and quality medicines"
    },
    {
      icon: UsersIcon,
      title: "Patient First",
      description: "Your health and convenience是我们的priority"
    },
    {
      icon: GlobeAltIcon,
      title: "Accessibility",
      description: "Healthcare for everyone, everywhere"
    },
    {
      icon: HeartIcon,
      title: "Compassion",
      description: "Care with empathy and understanding"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">AragyaD2D</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between patients and healthcare providers through technology
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            To make quality healthcare accessible to every Indian by connecting patients 
            with trusted doctors and delivering medicines right to their doorstep.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${member.color} p-6 text-center`}>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-100 font-medium">
                    {member.role}
                  </p>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Simple Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500">
            © 2026 AragyaD2D - Healthcare at your doorstep
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;