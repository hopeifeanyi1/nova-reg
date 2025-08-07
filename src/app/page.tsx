"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Logo, Welcome } from "../../public";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <Image src={Logo} alt="" className="w-[120px] h-[120px]"/>
        </motion.div>

        {/* Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <Image src={Welcome} alt=""/>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Register Before You Arrive
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Complete your registration online, upload your documents, and skip the queue.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 shadow-lg"
          >
            <Link href={'/login'}> Get Started </Link>
          </motion.button>
          
          <div className="text-center">
            <span className="text-gray-600">Already Registered? </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
            >
              <Link href={'/login'}>
                Log In
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}