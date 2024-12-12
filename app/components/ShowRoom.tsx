import React from 'react'
import { useAppSelector } from '../store/hooks'
import Link from 'next/link'
import { FaLink, FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import { showRoom, ShowRoomData } from '../data/showroom'

const ShowRoom = () => {
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <div
      className={`mx-auto xl:w-[556px] lg:w-[467px] w-[95%] border mt-4 rounded-md py-1 shadow-xl ${
        darkState ? 'border-[#FFFFFF26]' : 'border-[#0000002D]'
      }`}
    >
      <div
        className={`bg-[#21252908] py-2 flex items-center justify-center border-b ${
          darkState ? 'border-b-[#FFFFFF26]' : 'border-b-[#0000002D]'
        }`}
      >
        <h1
          className={`text-[20px] font-semibold ${
            darkState ? 'text-[#DEE2E6]' : ''
          }`}
        >
          From the <span className="text-[#0D6EFD]">Showroom</span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <button className="py-2 px-5 bg-[#0D6EFD] rounded-md mt-4 text-white font-semibold">
          Connect Wallet
        </button>
        <h1
          className={`font-semibold mt-2 text-[18px] text-center ${
            darkState ? 'text-[#DEE2E6]' : 'text-gray-600'
          }`}
        >
          Connect your wallet to upvote your favorite gems
        </h1>
      </div>
      <div
        className={`flex flex-col rounded-lg mt-4  ${
          darkState ? 'bg-[#212529]' : 'bg-white'
        }`}
      >
        {showRoom.map((item: ShowRoomData) => (
          <div
            className={`flex flex-row items-center  lg:justify-betwee border-b  py-3 ${
              darkState
                ? 'bg-[#212529] border-b-[#EEEEEE]'
                : 'bg-white border-b-[#0000002D]'
            }`}
          >
            <div>
              <img
                src={item.avatar}
                alt="img"
                className="lg:h-[100px] h-[70px] lg:w-[100px] w-[70px] rounded-full ml-4"
              />
            </div>
            <div className="flex flex-col ml-10">
              <h1
                className={`text-sm sm:text-2xl ${
                  darkState ? 'text-[#DEE2E6]' : ''
                }`}
              >
                {item.title}{' '}
                <span
                  className={` ${
                    darkState ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {item.initial}
                </span>
              </h1>
              <div className="flex flex-row lg:gap-6 gap-10 mt-6">
                <Link href={item.website}>
                  <FaLink
                    className={`md:h-[25px] md:w-[25px] ${
                      darkState ? 'text-[#DEE2E6]' : ''
                    }`}
                  />
                </Link>
                <Link href={item.twitter}>
                  <FaXTwitter
                    className={`md:h-[25px] md:w-[25px] ${
                      darkState ? 'text-[#DEE2E6]' : ''
                    }`}
                  />
                </Link>
                <Link href={item.telegram}>
                  <FaTelegramPlane
                    className={`md:h-[25px] md:w-[25px] ${
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
  )
}

export default ShowRoom
