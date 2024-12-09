import React from 'react'
import { useAppSelector } from '../store/hooks'
import Link from 'next/link'
import { FaLink, FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import { upcoming, UpcomingItem } from '../data/upcoming'
import { nfts, NftsItem } from '../data/nfts'

const UpcomingLaunches = () => {
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <div className="w-[95%] mt-4 flex flex-col rounded-md border border-[#0000002D] mx-auto ">
      <div
        className={`bg-[#21252908] text-2xl border-b flex items-center justify-center py-2 ${
          darkState ? 'border-b-[#FFFFFF26]' : 'border-b-[#0000002D]'
        }`}
      >
        <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>
          Upcoming Launches
        </h1>
      </div>
      <div
        className={`flex flex-col rounded-lg  ${
          darkState ? 'bg-[#212529]' : 'bg-white'
        }`}
      >
        {upcoming.map((item: UpcomingItem) => (
          <div
            className={`flex flex-row items-center  lg:justify-between border-b border-b-[#0000002D] py-3 ${
              darkState ? 'bg-[#212529]' : 'bg-white'
            }`}
          >
            <div>
              <img
                src={item.avatar}
                alt="img"
                className="lg:h-[50px] h-[70px] lg:w-[50px] wsx-[70px] rounded-full ml-4"
              />
            </div>
            <div className="flex flex-col lg:w-[150px] lg:mr-4 lg:ml-0 ml-10">
              <h1 className={`text-sm ${darkState ? 'text-[#DEE2E6]' : ''}`}>
                {item.title}{' '}
                <span
                  className={` ${
                    darkState ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {item.initial}
                </span>
              </h1>
              <h1
                className={`text-sm leading-[19px] ${
                  darkState ? 'text-[#DEE2E6]' : 'text-gray-800'
                }`}
              >
                Status: {item.status}
              </h1>
              <h1
                className={`text-sm leading-[19px] ${
                  darkState ? 'text-[#DEE2E6]' : 'text-gray-800'
                }`}
              >
                Launch Date: {item.launchDate}
              </h1>
              <div className="flex flex-row text-gray-600 lg:gap-6 gap-10 mt-2">
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
          </div>
        ))}
        <div
          className={`bg-[#21252908] text-xl border-b flex items-center justify-center py-2 ${
            darkState ? 'border-b-[#FFFFFF26]' : 'border-b-[#0000002D]'
          }`}
        >
          <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>
            NFT Launches
          </h1>
        </div>
        {nfts.map((item: NftsItem) => (
          <div
            className={`flex flex-row items-center  lg:justify-between border-b border-b-[#0000002D] py-3 ${
              darkState ? 'bg-[#212529]' : 'bg-white'
            }`}
          >
            <div>
              <img
                src={item.avatar}
                alt="img"
                className="lg:h-[50px] h-[70px] lg:w-[50px] wsx-[70px] rounded-full ml-4"
              />
            </div>
            <div className="flex flex-col lg:w-[150px] lg:mr-4 lg:ml-0 ml-10">
              <h1 className={`text-sm ${darkState ? 'text-[#DEE2E6]' : ''}`}>
                {item.title}
              </h1>
              <h1
                className={`text-sm leading-[19px] ${
                  darkState ? 'text-[#DEE2E6]' : 'text-gray-800'
                }`}
              >
                Status: {item.status}
              </h1>
              <h1
                className={`text-sm leading-[19px] ${
                  darkState ? 'text-[#DEE2E6]' : 'text-gray-800'
                }`}
              >
                Mint date: {item.mintDate}
              </h1>
              <div className="flex flex-row text-gray-600 lg:gap-6 gap-10 mt-2">
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingLaunches
