// src/components/Hero.jsx
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import doctorConsultation from './Images/Doctor_hero.svg';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content with animation */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Healthcare at Your
              <span className="text-blue-600"> Doorstep</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Consult top doctors online and get medicines delivered to your home. 
              Quality healthcare made convenient and affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consultation">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center shadow-lg hover:shadow-xl">
                  Request Consultation
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
              </Link>
              <Link to="/medicines">
                <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Order Medicines
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <motion.div 
                className="text-center md:text-left"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-2xl font-bold text-gray-800">500+</p>
                <p className="text-sm text-gray-600">Expert Doctors</p>
              </motion.div>
              <motion.div 
                className="text-center md:text-left"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-2xl font-bold text-gray-800">50K+</p>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </motion.div>
              <motion.div 
                className="text-center md:text-left"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-2xl font-bold text-gray-800">24/7</p>
                <p className="text-sm text-gray-600">Support</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right illustration with animation */}
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative group">
              <img 
                src={doctorConsultation}
                alt="Online doctor consultation"
                className="w-full max-w-md mx-auto transition-transform duration-300 group-hover:scale-105"
              />
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-indigo-200 rounded-full opacity-20 blur-xl"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
            </div>
            {/* Attribution */}
            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section with Staggered Animation */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-blue-100">
          {[
            { icon: ShieldCheckIcon, title: "Trusted & Verified", desc: "Certified doctors & quality medicines" },
            { icon: ClockIcon, title: "Quick Response", desc: "Within 30 minutes" },
            { icon: TruckIcon, title: "Free Delivery", desc: "On orders above ₹499" }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/50 transition cursor-pointer"
            >
              <div className="p-2 bg-blue-100 rounded-full">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{feature.title}</p>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;