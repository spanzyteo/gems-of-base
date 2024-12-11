import { data, DataItem } from '../data/data'
import { FaLink } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'
import { useAppSelector } from '../store/hooks'
import LatestAdditions from './LatestAdditions'
const SearchTokens = () => {
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <div
      className={`lg:flex flex-col items-center justify-center hidden absolute top-6 xl:left-[7rem] left-8 w-[246px] xl:w-[281px] border border-[#0000002D] rounded-md shadow-2xl  py-1 ${
        darkState
          ? 'bg-[linear-gradient(to_bottom,_#FFFFFF26,_#FFFFFF00)]'
          : 'bg-white'
      } `}
    >
      <div
        className={`w-[95%] border flex flex-col rounded-md ${
          darkState ? 'bg-[#212529]' : 'bg-white'
        } ${darkState ? 'border-none' : 'border-[#0000002D]'}`}
      >
        <div
          className={`bg-[#21252908] text-2xl border-b flex items-center justify-center py-2 ${
            darkState ? 'border-b-[#FFFFFF26]' : 'border-b-[#0000002D]'
          }`}
        >
          <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>搜索代币</h1>
        </div>
        <input
          type="text"
          className={`w-[75%] h-[37px] my-4 border mx-auto rounded-md px-2  placeholder:text-xl ${
            darkState ? 'border-[#FFFFFF26]' : 'border-[#0000002D]'
          } ${darkState ? 'bg-[#212529]' : 'bg-white'}
          ${darkState ? ' placeholder:text-[#DEE2E6]' : ''}`}
          placeholder="搜索"
        />
      </div>
      <div
        className={`w-[95%] border  flex flex-col rounded-md mt-4 ${
          darkState ? 'border-none' : 'border-[#0000002D]'
        }`}
      >
        <div
          className={`text-xl border-b border-b-[#0000002D] flex items-center justify-center py-2 rounded-t-lg ${
            darkState ? 'border-b-[#FFFFFF26]' : 'border-b-[#0000002D]'
          }  ${darkState ? 'bg-[#212529]' : 'bg-[#21252908]'}`}
        >
          <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>精选代币</h1>
        </div>
        <div
          className={`flex flex-col rounded-lg  ${
            darkState ? 'bg-[#212529]' : 'bg-white'
          }`}
        >
          {data.map((item: DataItem) => (
            <div
              className={`flex flex-row items-center  justify-between border-b py-3 ${
                darkState
                  ? 'bg-[#212529] border-b-[#EEEEEE]'
                  : 'bg-white border-b-[#0000002D]'
              }`}
            >
              <div>
                <img
                  src={item.avatar}
                  alt="img"
                  className="h-[30px] w-[30px] rounded-full ml-4"
                />
              </div>
              <div className="flex flex-col gap-3 w-[150px] mr-3">
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
                <div className="flex flex-row text-gray-600 gap-6">
                  <Link href={item.website}>
                    <FaLink
                      className={`${darkState ? 'text-[#DEE2E6]' : ''}`}
                    />
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
      <LatestAdditions />
    </div>
  )
}

export default SearchTokens
