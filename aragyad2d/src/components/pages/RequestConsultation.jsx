// src/components/pages/RequestConsultation.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BeakerIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const RequestConsultation = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    
    // Step 2: Health Details
    knownCondition: '',
    symptoms: '',
    duration: '',
    medicalHistory: '',
    
    // Step 3: Doctor/Symptom Selection
    doctorType: '',
    symptomCategory: '',
    specificSymptoms: []
  });

  const doctorTypes = [
    "Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", 
    "Psychiatrist", "Orthopedic", "Gynecologist", "General Physician"
  ];

  const symptomCategories = [
    { name: "Respiratory", symptoms: ["Cough", "Cold", "Fever", "Breathing Difficulty", "Sore Throat"] },
    { name: "Digestive", symptoms: ["Stomach Pain", "Nausea", "Diarrhea", "Constipation", "Acidity"] },
    { name: "Neurological", symptoms: ["Headache", "Migraine", "Dizziness", "Numbness"] },
    { name: "Skin", symptoms: ["Rash", "Itching", "Acne", "Eczema", "Hives"] },
    { name: "Musculoskeletal", symptoms: ["Joint Pain", "Back Pain", "Muscle Pain", "Injury"] }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSymptomToggle = (symptom) => {
    if (formData.specificSymptoms.includes(symptom)) {
      setFormData({
        ...formData,
        specificSymptoms: formData.specificSymptoms.filter(s => s !== symptom)
      });
    } else {
      setFormData({
        ...formData,
        specificSymptoms: [...formData.specificSymptoms, symptom]
      });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the consultation request
    console.log('Consultation Request:', formData);
    // Navigate to success or dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex-1 relative">
                <div className={`text-center ${stepNum <= step ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 
                    ${stepNum <= step ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                    {stepNum}
                  </div>
                  <p className="mt-2 text-sm font-medium">
                    {stepNum === 1 && "Personal Info"}
                    {stepNum === 2 && "Health Details"}
                    {stepNum === 3 && "Doctor/Symptoms"}
                  </p>
                </div>
                {stepNum < 3 && (
                  <div className={`absolute top-5 left-1/2 w-full h-0.5 
                    ${stepNum < step ? 'bg-blue-600' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
            <h1 className="text-2xl font-bold text-white">Request a Consultation</h1>
            <p className="text-blue-100 mt-2">Fill in the details below and our team will connect with you shortly</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your age"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Health Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have any known medical conditions?
                  </label>
                  <textarea
                    name="knownCondition"
                    value={formData.knownCondition}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Diabetes, High Blood Pressure, Asthma, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What symptoms are you experiencing? *
                  </label>
                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your symptoms in detail"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration of symptoms *
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select duration</option>
                      <option value="1-2 days">1-2 days</option>
                      <option value="3-7 days">3-7 days</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="3-4 weeks">3-4 weeks</option>
                      <option value="more than 1 month">More than 1 month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Any past medical history?
                    </label>
                    <input
                      type="text"
                      name="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Previous surgeries, allergies, etc."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Doctor/Symptom Selection */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    How would you like to proceed? *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedMethod('doctor')}
                      className={`p-4 border-2 rounded-lg text-left transition ${
                        selectedMethod === 'doctor' 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <BeakerIcon className="h-6 w-6 text-blue-600 mb-2" />
                      <p className="font-semibold">I know the doctor type I need</p>
                      <p className="text-sm text-gray-600">Select from our list of specialties</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedMethod('symptoms')}
                      className={`p-4 border-2 rounded-lg text-left transition ${
                        selectedMethod === 'symptoms' 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <DocumentTextIcon className="h-6 w-6 text-green-600 mb-2" />
                      <p className="font-semibold">I'll describe my symptoms</p>
                      <p className="text-sm text-gray-600">We'll recommend the right doctor for you</p>
                    </button>
                  </div>
                </div>

                {selectedMethod === 'doctor' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Doctor Type *
                    </label>
                    <select
                      name="doctorType"
                      value={formData.doctorType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Choose a specialty</option>
                      {doctorTypes.map(doctor => (
                        <option key={doctor} value={doctor}>{doctor}</option>
                      ))}
                    </select>
                  </div>
                )}

                {selectedMethod === 'symptoms' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select a category that best describes your symptoms *
                      </label>
                      <select
                        name="symptomCategory"
                        value={formData.symptomCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Choose category</option>
                        {symptomCategories.map(cat => (
                          <option key={cat.name} value={cat.name}>{cat.name}</option>
                        ))}
                      </select>
                    </div>

                    {formData.symptomCategory && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select your specific symptoms *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {symptomCategories
                            .find(cat => cat.name === formData.symptomCategory)
                            ?.symptoms.map(symptom => (
                              <label key={symptom} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={formData.specificSymptoms.includes(symptom)}
                                  onChange={() => handleSymptomToggle(symptom)}
                                  className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">{symptom}</span>
                              </label>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Previous
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Submit Request
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestConsultation;