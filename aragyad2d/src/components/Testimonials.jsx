// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "AragyaD2D has been a lifesaver! I consulted a cardiologist for my father who was having chest pain. The doctor was very professional and prescribed the right medicines. The delivery was also prompt. Highly recommended!",
      rating: 5,
      condition: "Cardiac Care"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "Excellent platform for online consultation. I needed regular follow-ups for my diabetes management. The doctors are very understanding and the medicine delivery is always on time. Saved me so many hospital visits.",
      rating: 5,
      condition: "Diabetes Management"
    },
    {
      id: 3,
      name: "Neha Gupta",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "The best part is the convenience. I can consult doctors from home without taking time off work. The app is user-friendly and the customer support is very responsive. Will definitely use again.",
      rating: 4,
      condition: "General Consultation"
    },
    {
      id: 4,
      name: "Amit Patel",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "Great experience with the dermatologist. Got my skin issue diagnosed properly and the prescribed medicines were delivered within 24 hours. Very satisfied with the service.",
      rating: 5,
      condition: "Dermatology"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-yellow-400">Patients Say</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Real stories from real patients who trusted us with their health
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].condition}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-yellow-400' : 'bg-blue-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;