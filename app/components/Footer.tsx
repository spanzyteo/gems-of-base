import { div } from 'framer-motion/client'
import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="block">
      <div className="h-[80px] bg-[#0152FF] lg:mt-[1100px] xl:mt-[990px] flex items-center justify-between lg:px-16 px-4">
        <div>
          <h1 className="text-white lg:text-lg text-sm">© 2024 creation by</h1>
        </div>
        <div className="flex gap-4">
          <FaXTwitter className="text-white lg:h-[40px] h-[30px] lg:w-[40px] w-[30px]" />
          <FaTelegramPlane className="text-white lg:h-[40px] h-[30px] lg:w-[40px] w-[30px]" />
        </div>
      </div>
    </div>
  )
}

export default Footer
