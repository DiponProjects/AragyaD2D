// src/pages/Signup.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  UserIcon, 
  UserGroupIcon, 
  BuildingStorefrontIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  MapPinIcon,
  IdentificationIcon,
  CalendarIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  BanknotesIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const Signup = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('patient');
  const [formData, setFormData] = useState({
    // Patient fields
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientPassword: '',
    patientConfirmPassword: '',
    patientAge: '',
    patientGender: '',
    
    // Doctor fields
    doctorName: '',
    doctorEmail: '',
    doctorPhone: '',
    doctorPassword: '',
    doctorConfirmPassword: '',
    doctorSpecialization: '',
    doctorExperience: '',
    doctorLicenseNumber: '',
    doctorHospital: '',
    doctorCity: '',
    
    // Vendor fields
    vendorName: '',
    vendorEmail: '',
    vendorPhone: '',
    vendorPassword: '',
    vendorConfirmPassword: '',
    vendorStoreName: '',
    vendorGST: '',
    vendorAddress: '',
    vendorCity: '',
    vendorLicenseNumber: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const validatePatient = () => {
    const newErrors = {};
    if (!formData.patientName.trim()) newErrors.patientName = 'Name is required';
    if (!formData.patientEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.patientEmail = 'Valid email is required';
    if (!formData.patientPhone.match(/^[0-9]{10}$/)) newErrors.patientPhone = 'Valid 10-digit phone number is required';
    if (formData.patientPassword.length < 6) newErrors.patientPassword = 'Password must be at least 6 characters';
    if (formData.patientPassword !== formData.patientConfirmPassword) newErrors.patientConfirmPassword = 'Passwords do not match';
    if (!formData.patientAge || formData.patientAge < 1 || formData.patientAge > 120) newErrors.patientAge = 'Valid age is required';
    if (!formData.patientGender) newErrors.patientGender = 'Please select gender';
    if (!agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const validateDoctor = () => {
    const newErrors = {};
    if (!formData.doctorName.trim()) newErrors.doctorName = 'Full name is required';
    if (!formData.doctorEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.doctorEmail = 'Valid email is required';
    if (!formData.doctorPhone.match(/^[0-9]{10}$/)) newErrors.doctorPhone = 'Valid 10-digit phone number is required';
    if (formData.doctorPassword.length < 6) newErrors.doctorPassword = 'Password must be at least 6 characters';
    if (formData.doctorPassword !== formData.doctorConfirmPassword) newErrors.doctorConfirmPassword = 'Passwords do not match';
    if (!formData.doctorSpecialization) newErrors.doctorSpecialization = 'Specialization is required';
    if (!formData.doctorExperience || formData.doctorExperience < 0) newErrors.doctorExperience = 'Valid experience is required';
    if (!formData.doctorLicenseNumber) newErrors.doctorLicenseNumber = 'License number is required';
    if (!formData.doctorHospital) newErrors.doctorHospital = 'Hospital/Affiliation is required';
    if (!formData.doctorCity) newErrors.doctorCity = 'City is required';
    if (!agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const validateVendor = () => {
    const newErrors = {};
    if (!formData.vendorName.trim()) newErrors.vendorName = 'Full name is required';
    if (!formData.vendorEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.vendorEmail = 'Valid email is required';
    if (!formData.vendorPhone.match(/^[0-9]{10}$/)) newErrors.vendorPhone = 'Valid 10-digit phone number is required';
    if (formData.vendorPassword.length < 6) newErrors.vendorPassword = 'Password must be at least 6 characters';
    if (formData.vendorPassword !== formData.vendorConfirmPassword) newErrors.vendorConfirmPassword = 'Passwords do not match';
    if (!formData.vendorStoreName) newErrors.vendorStoreName = 'Store/Pharmacy name is required';
    if (!formData.vendorGST || formData.vendorGST.length < 15) newErrors.vendorGST = 'Valid GST number is required';
    if (!formData.vendorAddress) newErrors.vendorAddress = 'Address is required';
    if (!formData.vendorCity) newErrors.vendorCity = 'City is required';
    if (!formData.vendorLicenseNumber) newErrors.vendorLicenseNumber = 'Pharmacy license number is required';
    if (!agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    
    if (activeTab === 'patient') {
      validationErrors = validatePatient();
    } else if (activeTab === 'doctor') {
      validationErrors = validateDoctor();
    } else {
      validationErrors = validateVendor();
    }
    
    if (Object.keys(validationErrors).length === 0) {
      // Handle signup logic here
      console.log('Signup successful:', { role: activeTab, data: formData });
      alert(`Account created successfully as ${activeTab}!`);
      navigate('/login');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const tabs = [
    { id: 'patient', label: 'Patient', icon: UserIcon, illustration: 'patient-illustration' },
    { id: 'doctor', label: 'Doctor', icon: UserGroupIcon, illustration: 'doctor-illustration' },
    { id: 'vendor', label: 'Vendor', icon: BuildingStorefrontIcon, illustration: 'vendor-illustration' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join <span className="text-blue-600">AragyaD2D</span>
          </h1>
          <p className="text-lg text-gray-600">
            Choose your role and create your account
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setErrors({});
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Illustration Side */}
            <motion.div
              key={`illustration-${activeTab}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8"
            >
              <div className="text-center text-white">
                {activeTab === 'patient' && (
                  <div>
                    <UserIcon className="h-32 w-32 mx-auto mb-6 text-white opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">Welcome, Patient!</h3>
                    <p className="text-blue-100">
                      Get access to top doctors, order medicines, and manage your health records all in one place.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm">Expert Doctors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">50K+</div>
                        <div className="text-sm">Happy Patients</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'doctor' && (
                  <div>
                    <UserGroupIcon className="h-32 w-32 mx-auto mb-6 text-white opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">Join as Doctor</h3>
                    <p className="text-blue-100">
                      Expand your practice, help patients remotely, and be part of India's leading telehealth platform.
                    </p>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <CheckBadgeIcon className="h-5 w-5" />
                        <span>Verified Professionals Only</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckBadgeIcon className="h-5 w-5" />
                        <span>Flexible Working Hours</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'vendor' && (
                  <div>
                    <BuildingStorefrontIcon className="h-32 w-32 mx-auto mb-6 text-white opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">Partner as Vendor</h3>
                    <p className="text-blue-100">
                      Join our network of trusted pharmacies and reach thousands of patients across India.
                    </p>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <CheckBadgeIcon className="h-5 w-5" />
                        <span>Pan-India Delivery Network</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <CheckBadgeIcon className="h-5 w-5" />
                        <span>Verified Pharmacy Partners</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Form Side */}
            <div className="p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Patient Form */}
                    {activeTab === 'patient' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="patientName"
                              value={formData.patientName}
                              onChange={handleChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Enter your full name"
                            />
                          </div>
                          {errors.patientName && <p className="text-red-500 text-xs mt-1">{errors.patientName}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <div className="relative">
                              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="email"
                                name="patientEmail"
                                value={formData.patientEmail}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="your@email.com"
                              />
                            </div>
                            {errors.patientEmail && <p className="text-red-500 text-xs mt-1">{errors.patientEmail}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone *
                            </label>
                            <div className="relative">
                              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="tel"
                                name="patientPhone"
                                value={formData.patientPhone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="9876543210"
                              />
                            </div>
                            {errors.patientPhone && <p className="text-red-500 text-xs mt-1">{errors.patientPhone}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Age *
                            </label>
                            <div className="relative">
                              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="number"
                                name="patientAge"
                                value={formData.patientAge}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="25"
                              />
                            </div>
                            {errors.patientAge && <p className="text-red-500 text-xs mt-1">{errors.patientAge}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Gender *
                            </label>
                            <div className="relative">
                              <IdentificationIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <select
                                name="patientGender"
                                value={formData.patientGender}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            {errors.patientGender && <p className="text-red-500 text-xs mt-1">{errors.patientGender}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Password *
                            </label>
                            <div className="relative">
                              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type={showPassword ? "text" : "password"}
                                name="patientPassword"
                                value={formData.patientPassword}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Min 6 characters"
                              />
                            </div>
                            {errors.patientPassword && <p className="text-red-500 text-xs mt-1">{errors.patientPassword}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Confirm Password *
                            </label>
                            <div className="relative">
                              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type={showPassword ? "text" : "password"}
                                name="patientConfirmPassword"
                                value={formData.patientConfirmPassword}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Confirm password"
                              />
                            </div>
                            {errors.patientConfirmPassword && <p className="text-red-500 text-xs mt-1">{errors.patientConfirmPassword}</p>}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Doctor Form */}
                    {activeTab === 'doctor' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="doctorName"
                              value={formData.doctorName}
                              onChange={handleChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Dr. John Doe"
                            />
                          </div>
                          {errors.doctorName && <p className="text-red-500 text-xs mt-1">{errors.doctorName}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <div className="relative">
                              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="email"
                                name="doctorEmail"
                                value={formData.doctorEmail}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="doctor@hospital.com"
                              />
                            </div>
                            {errors.doctorEmail && <p className="text-red-500 text-xs mt-1">{errors.doctorEmail}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone *
                            </label>
                            <div className="relative">
                              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="tel"
                                name="doctorPhone"
                                value={formData.doctorPhone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="9876543210"
                              />
                            </div>
                            {errors.doctorPhone && <p className="text-red-500 text-xs mt-1">{errors.doctorPhone}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Specialization *
                            </label>
                            <div className="relative">
                              <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="text"
                                name="doctorSpecialization"
                                value={formData.doctorSpecialization}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Cardiologist, Neurologist, etc."
                              />
                            </div>
                            {errors.doctorSpecialization && <p className="text-red-500 text-xs mt-1">{errors.doctorSpecialization}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Experience (Years) *
                            </label>
                            <div className="relative">
                              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="number"
                                name="doctorExperience"
                                value={formData.doctorExperience}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="5"
                              />
                            </div>
                            {errors.doctorExperience && <p className="text-red-500 text-xs mt-1">{errors.doctorExperience}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              License Number *
                            </label>
                            <div className="relative">
                              <DocumentTextIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="text"
                                name="doctorLicenseNumber"
                                value={formData.doctorLicenseNumber}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Medical Council License No."
                              />
                            </div>
                            {errors.doctorLicenseNumber && <p className="text-red-500 text-xs mt-1">{errors.doctorLicenseNumber}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Hospital/Affiliation *
                            </label>
                            <div className="relative">
                              <BuildingStorefrontIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="text"
                                name="doctorHospital"
                                value={formData.doctorHospital}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Hospital Name"
                              />
                            </div>
                            {errors.doctorHospital && <p className="text-red-500 text-xs mt-1">{errors.doctorHospital}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <div className="relative">
                              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="text"
                                name="doctorCity"
                                value={formData.doctorCity}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Mumbai, Delhi, etc."
                              />
                            </div>
                            {errors.doctorCity && <p className="text-red-500 text-xs mt-1">{errors.doctorCity}</p>}
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password *
                              </label>
                              <div className="relative">
                                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                  type={showPassword ? "text" : "password"}
                                  name="doctorPassword"
                                  value={formData.doctorPassword}
                                  onChange={handleChange}
                                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Min 6 characters"
                                />
                              </div>
                              {errors.doctorPassword && <p className="text-red-500 text-xs mt-1">{errors.doctorPassword}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password *
                              </label>
                              <div className="relative">
                                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                  type={showPassword ? "text" : "password"}
                                  name="doctorConfirmPassword"
                                  value={formData.doctorConfirmPassword}
                                  onChange={handleChange}
                                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Confirm password"
                                />
                              </div>
                              {errors.doctorConfirmPassword && <p className="text-red-500 text-xs mt-1">{errors.doctorConfirmPassword}</p>}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Vendor Form */}
                    {activeTab === 'vendor' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Owner/Contact Person Name *
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="vendorName"
                              value={formData.vendorName}
                              onChange={handleChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Full name"
                            />
                          </div>
                          {errors.vendorName && <p className="text-red-500 text-xs mt-1">{errors.vendorName}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <div className="relative">
                              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="email"
                                name="vendorEmail"
                                value={formData.vendorEmail}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="store@pharmacy.com"
                              />
                            </div>
                            {errors.vendorEmail && <p className="text-red-500 text-xs mt-1">{errors.vendorEmail}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone *
                            </label>
                            <div className="relative">
                              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="tel"
                                name="vendorPhone"
                                value={formData.vendorPhone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="9876543210"
                              />
                            </div>
                            {errors.vendorPhone && <p className="text-red-500 text-xs mt-1">{errors.vendorPhone}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Store/Pharmacy Name *
                            </label>
                            <div className="relative">
                              <BuildingStorefrontIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="text"
                                name="vendorStoreName"
                                value={formData.vendorStoreName}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Apollo Pharmacy, etc."
                              />
                            </div>
                            {errors.vendorStoreName && <p className="text-red-500 text-xs mt-1">{errors.vendorStoreName}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              GST Number *
                            </label>
                            <div className="relative">
                              <BanknotesIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="text"
                                name="vendorGST"
                                value={formData.vendorGST}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="22AAAAA0000A1Z"
                              />
                            </div>
                            {errors.vendorGST && <p className="text-red-500 text-xs mt-1">{errors.vendorGST}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Pharmacy License Number *
                          </label>
                          <div className="relative">
                            <DocumentTextIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="vendorLicenseNumber"
                              value={formData.vendorLicenseNumber}
                              onChange={handleChange}
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Drug License Number"
                            />
                          </div>
                          {errors.vendorLicenseNumber && <p className="text-red-500 text-xs mt-1">{errors.vendorLicenseNumber}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Store Address *
                          </label>
                          <div className="relative">
                            <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <textarea
                              name="vendorAddress"
                              value={formData.vendorAddress}
                              onChange={handleChange}
                              rows="2"
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Full address with landmark"
                            />
                          </div>
                          {errors.vendorAddress && <p className="text-red-500 text-xs mt-1">{errors.vendorAddress}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <div className="relative">
                              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="text"
                                name="vendorCity"
                                value={formData.vendorCity}
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Mumbai, Delhi, etc."
                              />
                            </div>
                            {errors.vendorCity && <p className="text-red-500 text-xs mt-1">{errors.vendorCity}</p>}
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password *
                              </label>
                              <div className="relative">
                                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                  type={showPassword ? "text" : "password"}
                                  name="vendorPassword"
                                  value={formData.vendorPassword}
                                  onChange={handleChange}
                                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Min 6 characters"
                                />
                              </div>
                              {errors.vendorPassword && <p className="text-red-500 text-xs mt-1">{errors.vendorPassword}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password *
                              </label>
                              <div className="relative">
                                <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input                                  type={showPassword ? "text" : "password"}
                                  name="vendorConfirmPassword"
                                  value={formData.vendorConfirmPassword}
                                  onChange={handleChange}
                                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Confirm password"
                                />
                              </div>
                              {errors.vendorConfirmPassword && <p className="text-red-500 text-xs mt-1">{errors.vendorConfirmPassword}</p>}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Common Elements */}
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="/terms" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    {errors.agreeTerms && <p className="text-red-500 text-xs">{errors.agreeTerms}</p>}

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="showPassword" className="text-sm text-gray-700">
                        Show Password
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
                    >
                      Create Account
                    </button>

                    <p className="text-center text-gray-600">
                      Already have an account?{" "}
                      <a href="/login" className="text-blue-600 hover:underline font-semibold">
                        Login here
                      </a>
                    </p>
                  </form>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;