import { data, DataItem } from '../data/data'
import { FaLink } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'
const SearchTokens = () => {
  return (
    <div className="lg:flex flex-col items-center justify-center hidden absolute top-0 w-[281px] border border-[#0000002D] rounded-md shadow-2xl ml-[7rem] py-1">
      <div className="w-[95%] border border-[#0000002D] flex flex-col rounded-md">
        <div className="bg-[#21252908] text-2xl border-b border-b-[#0000002D] flex items-center justify-center py-2">
          <h1>搜索代币</h1>
        </div>
        <input
          type="text"
          className="w-[75%] h-[37px] my-4 border mx-auto border-[#0000002D] rounded-md px-2  placeholder:text-xl"
          placeholder="搜索"
        />
      </div>
      <div className="w-[95%] border border-[#0000002D] flex flex-col rounded-md mt-4">
        <div className="bg-[#21252908] text-xl border-b border-b-[#0000002D] flex items-center justify-center py-2">
          <h1>精选代币</h1>
        </div>
        <div className="flex flex-col ">
          {data.map((item: DataItem) => (
            <div className="flex flex-row items-center  justify-between border-b border-b-[#0000002D] py-3">
              <div>
                <img
                  src={item.avatar}
                  alt="img"
                  className="h-[30px] w-[30px] rounded-full ml-4"
                />
              </div>
              <div className="flex flex-col gap-3 w-[150px] mr-3">
                <h1 className="text-sm">
                  {item.title}{' '}
                  <span className="text-gray-600">{item.initial}</span>
                </h1>
                <div className="flex flex-row text-gray-600 gap-2">
                  <Link href={item.website}>
                    <FaLink />
                  </Link>
                  <Link href={item.twitter}>
                  <FaXTwitter />
                  </Link>
                  <Link href={item.telegram}>
                  <FaTelegramPlane />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchTokens
