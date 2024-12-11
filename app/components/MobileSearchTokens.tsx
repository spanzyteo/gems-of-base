import React from 'react'
import { data, DataItem } from '../data/data'
import Link from 'next/link'
import { FaLink, FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'

const MobileSearchTokens = () => {
  return (
    
    <>
      <div className="w-[98%] border border-[#0000002D] lg:hidden flex flex-col rounded-md mx-auto mt-3 shadow-xl">
        <div className="bg-[#21252908] text-2xl border-b border-b-[#0000002D] flex items-center justify-center py-2">
          <h1>搜索代币</h1>
        </div>
        <input
          type="text"
          className="w-[75%] h-[37px] my-4 border mx-auto border-[#0000002D] rounded-md px-2  placeholder:text-xl"
          placeholder="搜索"
        />
      </div>
      <div className="w-[95%] border border-[#0000002D] flex lg:hidden flex-col rounded-md mt-4 mx-auto shadow-xl">
        <div className="bg-[#21252908] text-xl border-b border-b-[#0000002D] flex items-center justify-center py-2">
          <h1>精选代币</h1>
        </div>
        <div className="flex flex-col ">
          {data.map((item: DataItem) => (
            <div className="flex flex-row items-center border-b border-b-[#0000002D] py-3 gap-8">
              <div>
                <img
                  src={item.avatar}
                  alt="img"
                  className="h-[70px] w-[70px] rounded-full ml-4"
                />
              </div>
              <div className="flex flex-col gap-3 w-[150px]">
                <h1 className="text-md">
                  {item.title}{' '}
                  <span className="text-gray-600">{item.initial}</span>
                </h1>
                <div className="flex flex-row text-gray-600 gap-10">
                  <Link href={item.website}>
                    <FaLink className="h-[20px] w-[20px]" />
                  </Link>
                  <Link href={item.twitter}>
                    <FaXTwitter className="h-[20px] w-[20px]" />
                  </Link>
                  <Link href={item.telegram}>
                    <FaTelegramPlane className="h-[20px] w-[20px]" />
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
