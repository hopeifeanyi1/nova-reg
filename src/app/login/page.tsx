'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { LoginImage } from '../../../public'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  
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
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <motion.div 
        className="flex items-center p-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          onClick={handleBack}
          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="ml-4 text-lg font-medium text-gray-900">Log In to Your Account</h1>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="flex-1 px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <Image src={LoginImage} alt=''/>
        </motion.div>

        {/* Form */}
        <motion.div className="space-y-6" variants={itemVariants}>
          {/* Email Field */}
          <div>
            <label className="block text-orange-500 text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 bg-gray-100 border-0 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-orange-500 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-4 bg-gray-100 border-0 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link href={'/forgot-password'}>
            <button className="text-sm text-orange-500 hover:text-orange-600 transition-colors">
              Forgot Password?
            </button>
            </Link>
          </div>
        </motion.div>

        {/* Continue With Section */}
        <motion.div className="my-8" variants={itemVariants}>
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-4 text-sm text-gray-400">Continue With</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            <motion.button 
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9883 16.2167V11.8767H24.9083C25.0716 12.6117 25.1999 13.3 25.1999 14.2683C25.1999 20.93 20.7316 25.6667 13.9999 25.6667C7.55992 25.6667 2.33325 20.44 2.33325 14C2.33325 7.56 7.55992 2.33334 13.9999 2.33334C17.1499 2.33334 19.7866 3.48834 21.8049 5.37834L18.4916 8.59834C17.6516 7.805 16.1816 6.87167 13.9999 6.87167C10.1383 6.87167 6.98825 10.08 6.98825 14.0117C6.98825 17.9433 10.1383 21.1517 13.9999 21.1517C18.4683 21.1517 20.1133 18.06 20.4166 16.2283H13.9883V16.2167Z" fill="#FF383C"/>
                </svg>
              </div>
            </motion.button>
            <motion.button 
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 rounded flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M18.3459 25.6667V16.6308H21.3792L21.833 13.1098H18.3447V10.8617C18.3447 9.842 18.6282 9.14667 20.0912 9.14667H21.9555V5.99667C21.0527 5.89967 20.1452 5.85293 19.2372 5.85667C16.5492 5.85667 14.7094 7.49817 14.7094 10.5117V13.1098H11.6667V16.6308H14.7082V25.6667H3.62137C2.90971 25.6667 2.33337 25.0903 2.33337 24.3787V3.62134C2.33337 2.90967 2.90971 2.33334 3.62137 2.33334H24.3787C25.0904 2.33334 25.6667 2.90967 25.6667 3.62134V24.3787C25.6667 25.0903 25.0904 25.6667 24.3787 25.6667H18.3459Z" fill="#0088FF"/>
                </svg>
              </div>
            </motion.button>
            <motion.button 
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M14 2.33334C10.8314 2.33334 10.4347 2.34734 9.18987 2.40334C7.94854 2.4605 7.10037 2.65767 6.35837 2.94584C5.57959 3.23845 4.87406 3.69753 4.29104 4.291C3.69756 4.87402 3.23849 5.57955 2.94587 6.35834C2.65771 7.10034 2.46054 7.9485 2.40337 9.18984C2.34621 10.4347 2.33337 10.8313 2.33337 14C2.33337 17.1687 2.34621 17.5653 2.40337 18.8102C2.46054 20.0515 2.65771 20.8997 2.94587 21.6417C3.23849 22.4205 3.69756 23.126 4.29104 23.709C4.87406 24.3025 5.57959 24.7616 6.35837 25.0542C7.10037 25.3423 7.94854 25.5395 9.18987 25.5967C10.4347 25.6527 10.8314 25.6667 14 25.6667C17.1687 25.6667 17.5654 25.6527 18.8102 25.5967C20.0515 25.5395 20.8997 25.3423 21.6417 25.0542C22.4205 24.7616 23.126 24.3025 23.709 23.709C24.3025 23.126 24.7616 22.4205 25.0542 21.6417C25.3424 20.8997 25.5395 20.0515 25.5967 18.8102C25.6527 17.5653 25.6667 17.1687 25.6667 14C25.6667 10.8313 25.6527 10.4347 25.5967 9.18984C25.5395 7.9485 25.3424 7.10034 25.0542 6.35834C24.7616 5.57955 24.3025 4.87402 23.709 4.291C23.126 3.69753 22.4205 3.23845 21.6417 2.94584C20.8997 2.65767 20.0515 2.4605 18.8102 2.40334C17.5654 2.34734 17.1687 2.33334 14 2.33334ZM14 4.43567C17.115 4.43567 17.4837 4.44734 18.7134 4.50334C19.852 4.55584 20.4692 4.74484 20.881 4.90467C21.4247 5.117 21.8144 5.37017 22.2227 5.77734C22.631 6.18567 22.883 6.57534 23.0954 7.119C23.254 7.53084 23.4454 8.148 23.4967 9.2855C23.5527 10.5163 23.5644 10.8838 23.5644 14C23.5644 17.115 23.5527 17.4837 23.4967 18.7133C23.4442 19.852 23.254 20.4692 23.0954 20.881C22.9083 21.3878 22.6101 21.8462 22.2227 22.2227C21.8144 22.631 21.4247 22.883 20.881 23.0953C20.4692 23.254 19.852 23.4453 18.7145 23.4967C17.4849 23.5527 17.1162 23.5643 14 23.5643C10.885 23.5643 10.5152 23.5527 9.28671 23.4967C8.14804 23.4442 7.53087 23.254 7.11904 23.0953C6.61226 22.9083 6.15381 22.6101 5.77737 22.2227C5.38994 21.8462 5.09175 21.3878 4.90471 20.881C4.74487 20.4692 4.55471 19.852 4.50337 18.7145C4.44737 17.4837 4.43571 17.1162 4.43571 14C4.43571 10.885 4.44737 10.5163 4.50337 9.28667C4.55587 8.148 4.74487 7.53084 4.90471 7.119C5.11704 6.57534 5.37021 6.18567 5.77737 5.77734C6.18571 5.369 6.57537 5.117 7.11904 4.90467C7.53087 4.74484 8.14804 4.55467 9.28554 4.50334C10.5164 4.44734 10.8839 4.43567 14 4.43567ZM14 17.8885C12.9687 17.8885 11.9797 17.4788 11.2505 16.7496C10.5212 16.0204 10.1115 15.0313 10.1115 14C10.1115 12.9687 10.5212 11.9797 11.2505 11.2504C11.9797 10.5212 12.9687 10.1115 14 10.1115C15.0313 10.1115 16.0204 10.5212 16.7496 11.2504C17.4789 11.9797 17.8885 12.9687 17.8885 14C17.8885 15.0313 17.4789 16.0204 16.7496 16.7496C16.0204 17.4788 15.0313 17.8885 14 17.8885ZM14 8.00917C13.2133 8.00917 12.4343 8.16413 11.7074 8.46519C10.9806 8.76626 10.3202 9.20754 9.76388 9.76384C9.20758 10.3201 8.7663 10.9806 8.46523 11.7074C8.16417 12.4343 8.00921 13.2133 8.00921 14C8.00921 14.7867 8.16417 15.5658 8.46523 16.2926C8.7663 17.0194 9.20758 17.6799 9.76388 18.2362C10.3202 18.7925 10.9806 19.2337 11.7074 19.5348C12.4343 19.8359 13.2133 19.9908 14 19.9908C15.5889 19.9908 17.1127 19.3597 18.2362 18.2362C19.3597 17.1127 19.9909 15.5889 19.9909 14C19.9909 12.4111 19.3597 10.8873 18.2362 9.76384C17.1127 8.64035 15.5889 8.00917 14 8.00917ZM21.6277 7.77234C21.6277 7.95619 21.5915 8.13824 21.5211 8.30809C21.4508 8.47795 21.3477 8.63228 21.2177 8.76229C21.0877 8.89229 20.9333 8.99541 20.7635 9.06577C20.5936 9.13612 20.4116 9.17234 20.2277 9.17234C20.0439 9.17234 19.8618 9.13612 19.692 9.06577C19.5221 8.99541 19.3678 8.89229 19.2378 8.76229C19.1078 8.63228 19.0046 8.47795 18.9343 8.30809C18.8639 8.13824 18.8277 7.95619 18.8277 7.77234C18.8277 7.40103 18.9752 7.04494 19.2378 6.78239C19.5003 6.51984 19.8564 6.37234 20.2277 6.37234C20.599 6.37234 20.9551 6.51984 21.2177 6.78239C21.4802 7.04494 21.6277 7.40103 21.6277 7.77234Z" fill="#FF383C" fill-opacity="0.5"/>
                </svg>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Login Button */}
        <Link href={'/dashboard'}>
            <motion.button 
            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            >
            Log In
            </motion.button>
        </Link>

        {/* Sign Up Link */}
        <motion.div 
          className="text-center mt-8"
          variants={itemVariants}
        >
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <Link href={'/register'} className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Sign Up
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoginPage