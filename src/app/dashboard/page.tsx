'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, CheckCircle, Shield, ChevronDown } from 'lucide-react';

const NovaRegPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Fill Form",
      description: "Complete your personal details",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Upload Documents",
      description: "Submit required certificates",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Get Check-in Pass",
      description: "Receive your digital pass",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  const faqs = [
    "How do I upload my documents?",
    "What documents do I need?",
    "When should I complete my registration?"
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        className="max-w-md mx-auto bg-white shadow-lg overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="relative h-48 bg-gradient-to-br from-orange-300 to-orange-400 text-white p-6 flex flex-col justify-center"
          variants={itemVariants}
        >
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-6 gap-2 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="bg-white rounded-full opacity-30"></div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 text-center">
            <h1 className="text-2xl font-bold mb-3">Welcome to NovaReg</h1>
            <p className="text-white/90 leading-relaxed">
              Complete your NYSC pre registration online, upload your documents, and skip the queue.
            </p>
          </div>
        </motion.div>

        {/* Start Registration Button */}
        <motion.div 
          className="p-6"
          variants={itemVariants}
        >
          <motion.button 
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Registration
          </motion.button>
        </motion.div>

        {/* Steps Section */}
        <motion.div 
          className="px-6 pb-6 space-y-4"
          variants={itemVariants}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`${step.bgColor} p-3 rounded-full ${step.iconColor}`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Verified Portal Section */}
        <motion.div 
          className="mx-6 mb-6 p-4 bg-green-50 rounded-lg border border-green-200"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-800">Verified Portal</span>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="px-6 pb-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={false}
              >
                <motion.button
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                  whileHover={{ backgroundColor: '#f9fafb' }}
                >
                  <span className="font-medium text-gray-700">{faq}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 text-sm text-gray-600">
                    This is a placeholder answer for the FAQ question. You can replace this with the actual content.
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support Section */}
        <motion.div 
          className="px-6 pb-6 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600 mb-2">Need Assistance?</p>
          <motion.button 
            className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="px-6 pb-6 text-center"
          variants={itemVariants}
        >
          <p className="text-xs text-gray-500">© 2025 Nova PreReg. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NovaRegPage;