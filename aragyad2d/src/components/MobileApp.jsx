// src/components/MobileApp.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, QrCodeIcon } from '@heroicons/react/24/outline';
import appMockup from './Images/mobile_app_icon.png'; // You'll need to add this image

const MobileApp = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get the <span className="text-blue-600">AragyaD2D App</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Access healthcare at your fingertips. Consult doctors, order medicines, and manage your health records from anywhere, anytime.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">24/7 access to doctors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time order tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Secure health records</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.45-1.09-.45-2.09-.44-3.12.02-1.47.66-2.45.31-3.38-.67-.98-1.03-1.87-3.12-1.55-5.2.3-1.92 1.47-3.08 2.87-3.62 1.22-.48 2.47-.38 3.61.07.87.35 1.57.34 2.48-.1.9-.44 1.71-.52 2.64.14.83.6 1.2 1.48 1.16 2.42-.04.93-.48 1.8-1.09 2.44-.56.58-1.17 1.1-1.74 1.68zm-3.38-16.52c.64-.98 1.48-1.7 2.62-1.76.13 1.26-.4 2.45-1.13 3.24-.69.74-1.56 1.18-2.44 1.11-.1-1.11.39-2.25.95-2.59z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 10.28L7.3 6.6l.03-.03L12 3.6l4.67 2.97 3.74 3.71-4.7 4.7-4.66 2.97-4.7-2.97-3.75-3.71z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3 justify-center sm:justify-start">
              <QrCodeIcon className="h-8 w-8 text-gray-500" />
              <span className="text-sm text-gray-500">Scan to download app</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-4 shadow-2xl">
                <DevicePhoneMobileIcon className="h-8 w-8 text-white mb-4 mx-auto" />
                <div className="bg-white rounded-lg p-2 mb-2">
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded"></div>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <div className="h-16 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;