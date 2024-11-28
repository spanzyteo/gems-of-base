'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleSection } from '../store/sidebarSlice'
import { FaXTwitter } from 'react-icons/fa6'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { motion } from 'framer-motion'


const Navbar = () => {
  const sidebarOpen = useAppSelector((state) => state.sidebar.open)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(toggleSection())
  }

   const sidebarVariants = {
     hidden: {
       opacity: 0,
       x: '-100%',
     },
     visible: {
       opacity: 1,
       x: 0,
     },
   }

  return (
    <div className="bg-[#0152FF] flex flex-col">
      <div className="flex items-center h-[113px] justify-between mx-10">
        <div className="text-white">
          <h1 className="text-2xl">基础宝石</h1>
        </div>
        <div className="lg:flex hidden items-center justify-between text-white gap-6 text-2xl">
          <h1>展示厅</h1>
          <h1>关于</h1>
          <h1>上市</h1>
        </div>
        <div className="lg:flex hidden items-center gap-4">
          <FaXTwitter className="h-[50px] w-[50px] text-white" />
          <div className="flex items-center text-white border border-white rounded-md px-2 hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out">
            <FaSun />
            <h1 className="text-2xl">/</h1>
            <FaMoon />
            <FaCaretDown className="text-xs ml-2" />
          </div>
        </div>
        {sidebarOpen ? (
          <div onClick={() => handleClick()} className="">
            <FaXmark className="h-[30px] w-[30px] text-white" />
          </div>
        ) : (
          <div onClick={() => handleClick()} className="">
            <GiHamburgerMenu className="h-[30px] w-[30px] text-white" />
          </div>
        )}
      </div>
      <motion.div
        initial="hidden"
        animate={sidebarOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`lg:hidden flex-col items-center mx-auto gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
          sidebarOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <h1 className="text-white">展示厅</h1>
        <h1 className="text-white mt-2">关于</h1>
        <h1 className="text-white mt-2">上市</h1>
        <FaXTwitter className="h-[50px] w-[50px] text-white mt-6" />
        <div className="flex items-center text-white border border-white rounded-md px-2 hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out mt-6 mb-4">
          <FaSun />
          <h1 className="text-2xl">/</h1>
          <FaMoon />
          <FaCaretDown className="text-xs ml-2" />
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
