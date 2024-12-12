import { div } from 'framer-motion/client'
import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="block">
      <div className="h-[80px] bg-blue-700 lg:mt-[1100px] xl:mt-[990px] flex items-center justify-between px-16">
        <div>
          <h1 className="text-white text-lg">© 2024 creation by</h1>
        </div>
        <div className="flex gap-4">
          <FaXTwitter className="text-white h-[40px] w-[50px]" />
          <FaTelegramPlane className="text-white h-[40px] w-[50px]" />
        </div>
      </div>
    </div>
  )
}

export default Footer
