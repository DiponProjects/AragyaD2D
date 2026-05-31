// src/components/MedicineCategories.jsx
import React from 'react';
import { 
  BeakerIcon, 
  HeartIcon, 
  DocumentTextIcon,
  BoltIcon,
  ShieldCheckIcon,
  GiftIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MedicineCategories = () => {
  const categories = [
    {
      name: "Prescription Drugs",
      icon: DocumentTextIcon,
      color: "bg-blue-100 text-blue-600",
      count: 1240
    },
    {
      name: "Vitamins & Supplements",
      icon: BeakerIcon,
      color: "bg-green-100 text-green-600",
      count: 856
    },
    {
      name: "Heart Care",
      icon: HeartIcon,
      color: "bg-red-100 text-red-600",
      count: 432
    },
    {
      name: "Diabetes Care",
      icon: ShieldCheckIcon,
      color: "bg-purple-100 text-purple-600",
      count: 321
    },
    {
      name: "Pain Relief",
      icon: BoltIcon,
      color: "bg-orange-100 text-orange-600",
      count: 567
    },
    {
      name: "First Aid",
      icon: GiftIcon,
      color: "bg-yellow-100 text-yellow-600",
      count: 289
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse <span className="text-blue-600">Medicines</span> by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the right medicines and healthcare products you need
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/medicines/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all cursor-pointer group">
                  <div className={`${category.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count}+ Products</p>
                  </div>
                  <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center bg-blue-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Need Help Finding Medicines?
          </h3>
          <p className="text-gray-600 mb-4">
            Upload your prescription and let our experts help you
          </p>
          <Link to="/upload-prescription">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Upload Prescription
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MedicineCategories;