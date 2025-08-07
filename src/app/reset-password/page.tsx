'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import { RPImage } from '../../../public'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


      const router = useRouter()
    const handleBack = () => {
      router.back()
    }

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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const illustrationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <motion.header 
        className="flex items-center p-4 bg-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={handleBack}>
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900 ml-4">Reset Password</h1>
      </motion.header>

      {/* Main Content */}
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Illustration */}
        <motion.div 
          className="mb-8"
          variants={illustrationVariants}
        >
          <Image src={RPImage} alt='' className='w-[300px] h-[300px]'/>
        </motion.div>

        {/* Form Content */}
        <motion.div 
          className="w-full max-w-md space-y-6"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <p className="text-gray-700 text-lg">Enter a new password for your account.</p>
          </motion.div>

          <motion.form 
            className="space-y-6"
            variants={itemVariants}
          >
            {/* New Password Field */}
            <div className="space-y-2">
              <label className="block text-gray-900 font-medium text-lg">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <div className="w-5 h-5 text-gray-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 10v-4a6 6 0 1 1 12 0v4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2 0h8V6a4 4 0 1 0-8 0v4z"/>
                    </svg>
                  </div>
                </div>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full pl-10 pr-12 py-4 bg-gray-100 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="block text-gray-900 font-medium text-lg">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <div className="w-5 h-5 text-gray-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 10v-4a6 6 0 1 1 12 0v4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2 0h8V6a4 4 0 1 0-8 0v4z"/>
                    </svg>
                  </div>
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full pl-10 pr-12 py-4 bg-gray-100 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Link href={'/dashboard'}>
            <motion.button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 rounded-xl transition-colors duration-200 shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              Reset Password
            </motion.button>
            </Link>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ResetPassword