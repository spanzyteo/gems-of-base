'use client'

import { data, DataItem } from '../data/data'
import { useEffect, useState } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { FaLink } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'
import MobileSearchTokens from './MobileSearchTokens'
import UpcomingLaunches from './UpcomingLaunches'
import LatestAdditions from './LatestAdditions'
import { useAppSelector } from '../store/hooks'

const Gems = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const darkState = useAppSelector((state) => state.darkMode.darkMode)

  const showItemAt = (index: number) => {
    setCurrentIndex(index)
  }

  const limitedData = data.slice(0, 5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedData.length)
    }, 10000) // 10 seconds interval

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [limitedData.length])

  return (
    <div
      className={`mx-auto xl:w-[556px] lg:w-[467px] w-[95%]  mt-4 rounded-md py-1 lg:border shadow-xl ${
        darkState ? ' lg:border-[#FFFFFF26]' : 'border-[#0000002D]'
      } ${
        darkState
          ? ' lg:bg-[#212529] bg-[linear-gradient(to_bottom,_#FFFFFF26,_#FFFFFF00)]'
          : 'bg-white'
      }`}
    >
      {/* Header */}
      <div
        className={`bg-[#21252908] py-2 lg:flex hidden items-center justify-between border-b border-b-[#0000002D] ${
          darkState
            ? 'border-b-[#FFFFFF26] bg-[#21252908]'
            : 'border-b-[#0000002D]'
        }`}
      >
        <h1 className={`text-[20px] ml-6 ${darkState ? 'text-[#DEE2E6]' : ''}`}>
          Jiamuqu
        </h1>
        <BsFillQuestionCircleFill className="h-[20px] w-[20px] mr-6 text-gray-500" />
      </div>
      <div
        className={`overflow-hidden relative h-[300px] lg:flex hidden items-center ${
          darkState ? 'bg-[#212529]' : ''
        }`}
      >
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {limitedData.map((item: DataItem) => (
            <div
              key={item.id}
              className="w-[100%]  flex-shrink-0 flex flex-col relative"
            >
              <div className="flex items-center gap-2 px-2">
                <img
                  src={item.avatar}
                  alt="img"
                  className="h-[75px] w-[75px] object-contain rounded-full"
                />
                <div className="ml-6 xl:ml-6 lg:ml-3">
                  <h1
                    className={`text-lg sm:text-2xl font-bold ${
                      darkState ? 'text-[#DEE2E6]' : ''
                    }`}
                  >
                    {item.title}{' '}
                    <span
                      className={`font-normal  ${
                        darkState ? 'text-[#DEE2E6]' : 'text-gray-600'
                      }`}
                    >
                      {item.initial}
                    </span>
                  </h1>
                  <p
                    className={`text-xs sm:text-md w-[90%] mt-3 ${
                      darkState ? 'text-[#DEE2E6]' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex mt-40 absolute right-44 gap-10 text-[20px]">
                <Link href={item.website}>
                  <FaLink className={`${darkState ? 'text-[#DEE2E6]' : ''}`} />
                </Link>
                <Link href={item.twitter}>
                  <FaXTwitter
                    className={`${darkState ? 'text-[#DEE2E6]' : ''}`}
                  />
                </Link>
                <Link href={item.telegram}>
                  <FaTelegramPlane
                    className={`${darkState ? 'text-[#DEE2E6]' : ''}`}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        className={`lg:flex hidden justify-center h-[40px] space-x-4 ${
          darkState ? 'bg-[#212529]' : ''
        }`}
      >
        {limitedData.map((_, index) => (
          <h1
            key={index}
            className={`w-2 h-2 mt-4 cursor-pointer rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => showItemAt(index)}
          />
        ))}
      </div>

      <div className="lg:hidden w-[98%] border border-[#0000002D] mx-auto rounded-lg h-[95%]">
        {/* Mobile Header */}
        <div
          className={`py-2 flex items-center justify-between border-b border-b-[#0000002D] rounded-t-lg ${
            darkState ? 'bg-[#212529] border-b-[#FFFFFF26]' : 'bg-[#21252908]'
          }`}
        >
          <h1
            className={`text-[20px] ml-6  ${darkState ? 'text-[#DEE2E6]' : ''}`}
          >
            Jiamuqu
          </h1>
          <BsFillQuestionCircleFill className="h-[20px] w-[20px] mr-6 text-gray-500" />
        </div>

        {/* Item Container */}
        <div
          className={`overflow-hidden relative h-[300px] flex items-center ${
            darkState ? 'bg-[#212529]' : ''
          }`}
        >
          <div
            className="flex items-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {limitedData.map((item: DataItem) => (
              <div
                key={item.id}
                className="w-[100%]  flex-shrink-0 flex flex-col relative"
              >
                <div className="flex items-center gap-1 px-2">
                  <img
                    src={item.avatar}
                    alt="img"
                    className="h-[75px] w-[75px] object-contain rounded-full"
                  />
                  <div
                    className={`ml-3 flex flex-col gap-2 ${
                      darkState ? 'text-[#DEE2E6]' : ''
                    }`}
                  >
                    <h1 className="text-lg font-bold">
                      {item.title}{' '}
                      <span
                        className={`font-normal ${
                          darkState ? 'text-[#DEE2E6]' : 'text-gray-600'
                        }`}
                      >
                        {item.initial}
                      </span>
                    </h1>
                    <p
                      className={`text-xs w-[60%] ${
                        darkState ? 'text-[#DEE2E6]' : 'text-gray-600'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex mt-[10.3rem] absolute right-44 gap-10 text-[20px]">
                  <FaLink className={`${darkState ? 'text-[#DEE2E6]' : ''}`} />
                  <FaXTwitter
                    className={`${darkState ? 'text-[#DEE2E6]' : ''}`}
                  />
                  <FaTelegramPlane
                    className={`${darkState ? 'text-[#DEE2E6]' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons */}
        <div
          className={`flex justify-center h-[50px] space-x-4 rounded-b-lg ${
            darkState ? 'bg-[#212529]' : ''
          }`}
        >
          {limitedData.map((_, index) => (
            <h1
              key={index}
              className={`w-2 h-2 mt-6 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => showItemAt(index)}
            />
          ))}
        </div>
      </div>
      <MobileSearchTokens />
      <div className="lg:hidden block">
        <UpcomingLaunches />
        <LatestAdditions />
      </div>
    </div>
  )
}

export default Gems
