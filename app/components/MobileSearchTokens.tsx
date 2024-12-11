import React from 'react'
import { data, DataItem } from '../data/data'
import Link from 'next/link'
import { FaLink, FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import { useAppSelector } from '../store/hooks'

const MobileSearchTokens = () => {
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <>
      <div
        className={`w-[98%] border border-[#0000002D] lg:hidden flex flex-col rounded-md mx-auto mt-3 shadow-xl ${
          darkState ? 'bg-[#212529]' : ''
        }`}
      >
        <div
          className={`text-2xl border-b border-b-[#0000002D] flex items-center justify-center py-2 rounded-t-md ${
            darkState ? 'bg-[#21252908] border-b-[#FFFFFF26]' : 'bg-[#21252908]'
          }`}
        >
          <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>搜索代币</h1>
        </div>
        <input
          type="text"
          className={`w-[75%] h-[37px] my-4 border mx-auto  rounded-md px-2  placeholder:text-xl ${
            darkState
              ? 'border-[#FFFFFF26] bg-[#212529] text-[#DEE2E6]'
              : 'border-[#0000002D]'
          }`}
          placeholder="搜索"
        />
      </div>
      <div
        className={`w-[98%] flex lg:hidden flex-col rounded-lg mt-4 mx-auto shadow-xl ${
          darkState ? 'bg-[#212529] border-none' : 'border border-[#0000002D]'
        }`}
      >
        <div
          className={`text-xl border-b border-b-[#0000002D] flex items-center rounded-t-lg justify-center py-2 ${
            darkState ? 'bg-[#212529] border-b-[#FFFFFF26]' : 'bg-[#21252908]'
          }`}
        >
          <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>精选代币</h1>
        </div>
        <div className="flex flex-col ">
          {data.map((item: DataItem) => (
            <div
              className={`flex flex-row items-center border-b  py-3 gap-8 ${
                darkState
                  ? 'bg-[#212529] border-b-[#EEEEEE]'
                  : 'bg-white border-b-[#0000002D]'
              }`}
            >
              <div>
                <img
                  src={item.avatar}
                  alt="img"
                  className="h-[70px] w-[70px] rounded-full ml-4"
                />
              </div>
              <div className="flex flex-col gap-3 w-[150px]">
                <h1 className={`text-lg ${darkState ? 'text-[#DEE2E6]' : ''}`}>
                  {item.title}{' '}
                  <span
                    className={`font-normal  ${
                      darkState ? 'text-[#DEE2E6]' : 'text-gray-600'
                    }`}
                  >
                    {item.initial}
                  </span>
                </h1>
                <div className="flex flex-row text-gray-600 gap-10">
                  <Link href={item.website}>
                    <FaLink
                      className={`h-[20px] w-[20px] ${
                        darkState ? 'text-[#DEE2E6]' : ''
                      }`}
                    />
                  </Link>
                  <Link href={item.twitter}>
                    <FaXTwitter
                      className={`h-[20px] w-[20px] ${
                        darkState ? 'text-[#DEE2E6]' : ''
                      }`}
                    />
                  </Link>
                  <Link href={item.telegram}>
                    <FaTelegramPlane
                      className={`h-[20px] w-[20px] ${
                        darkState ? 'text-[#DEE2E6]' : ''
                      }`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileSearchTokens
