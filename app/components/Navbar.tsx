'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleSection, toggleSwitch } from '../store/sidebarSlice'
import { FaXTwitter } from 'react-icons/fa6'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa6'
import { FaCaretDown } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { openDarkMode, openLightMode } from '../store/darkModeSlice'

const Navbar = () => {
  const sidebarOpen = useAppSelector((state) => state.sidebar.open)
  const switchOpen = useAppSelector((state) => state.sidebar.switch)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(toggleSection())
  }

  const handleSwitchClick = () => {
    dispatch(toggleSwitch())
  }

  const handleLightMode = () => {
    dispatch(openLightMode())
  }

  const handleDarkMode = () => {
    dispatch(openDarkMode())
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
    <div className="bg-[#0152FF] flex flex-col relative">
      <div className="flex items-center h-[113px] justify-between lg:mx-16 mx-10">
        <div className="text-white">
          <h1 className="text-2xl">基础宝石</h1>
        </div>
        <div className="lg:flex hidden items-center justify-between text-white gap-6 text-2xl">
          <h1>展示厅</h1>
          <h1>关于</h1>
          <h1>获取列表</h1>
        </div>
        <div className="lg:flex hidden items-center gap-4">
          <FaXTwitter className="h-[50px] w-[50px] text-white" />
          <div
            onClick={() => handleSwitchClick()}
            className="flex items-center text-white border border-white rounded-md px-2 hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out"
          >
            <FaSun />
            <h1 className="text-2xl">/</h1>
            <FaMoon />
            <FaCaretDown className="text-xs ml-2" />
          </div>
        </div>
        <div className="block lg:hidden">
          {sidebarOpen ? (
            <div onClick={() => handleClick()} className="">
              <FaXmark className="h-[30px] w-[30px] text-white " />
            </div>
          ) : (
            <div onClick={() => handleClick()} className="">
              <GiHamburgerMenu className="h-[30px] w-[30px] text-white" />
            </div>
          )}
        </div>
      </div>
      {switchOpen && (
        <div className="text-right h-[70px] w-[120px] bg-white absolute right-4 top-20 rounded-lg lg:flex hidden flex-col z-10">
          <div onClick={() => handleLightMode()} className="flex items-center gap-3 mt-2 ml-2 cursor-pointer">
            <FaSun className='font-semibold text-black'/>
            <h1 className="text-xl font-semibold">光</h1>
          </div>
          <div onClick={() => handleDarkMode()} className="flex items-center gap-3 mt-1 ml-2 cursor-pointer">
            <FaMoon className='font-semibold text-black'/>
            <h1 className="text-xl font-semibold">黑暗的</h1>
          </div>
        </div>
      )}
      <motion.div
        initial="hidden"
        animate={sidebarOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`lg:hidden flex-col items-center mx-auto gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
          sidebarOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-white">展示厅</h1>
          <h1 className="text-white mt-2">关于</h1>
          <h1 className="text-white mt-2">获取列表</h1>
          <FaXTwitter className="h-[50px] w-[50px] text-white mt-6" />
        </div>
        <div
          onClick={() => handleSwitchClick()}
          className="flex items-center text-white border border-white rounded-md px-2 hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out mt-6 mb-4 w-[100px] justify-between"
        >
          <div className="flex items-center">
            <FaSun />
            <h1 className="text-2xl">/</h1>
            <FaMoon />
          </div>
          <FaCaretDown className="text-xs ml-2" />
        </div>
        {switchOpen && (
          <div className="h-[90px] w-[100px] bg-white rounded-lg lg:hidden flex flex-col mb-4 gap-2 justify-center z-10">
            <div onClick={() => handleLightMode()} className="flex items-center gap-3 mt-2 ml-2 cursor-pointer">
              <FaSun />
              <h1 className="text-lg text-black font-semibold ">光</h1>
            </div>
            <div onClick={() =>handleDarkMode()} className="flex items-center gap-3 mt-1 ml-2 cursor-pointer">
              <FaMoon />
              <h1 className="text-lg text-black font-semibold">黑暗的</h1>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Navbar
