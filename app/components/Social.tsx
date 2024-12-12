'use client'
import { FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { FaX } from 'react-icons/fa6'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeListingModal } from '../store/modalSlice'
import UpcomingLaunches from './UpcomingLaunches'
import CryptoNews from './CryptoNews'
import UsefulLinks from './UsefulLinks'
import Footer from './Footer'

const Social = () => {
  const dispatch = useAppDispatch()
  const openListingModal = useAppSelector((state) => state.modal.listingModal)
  const handleCloseModal = () => {
    dispatch(closeListingModal())
  }
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <>
      <div
        className={`lg:flex flex-col items-center justify-center hidden absolute top-6 xl:right-[7rem] right-8 w-[246px] xl:w-[281px] border border-[#0000002D] rounded-md shadow-2xl py-1 ${
          darkState
            ? 'bg-[linear-gradient(to_bottom,_#FFFFFF26,_#FFFFFF00)]'
            : 'bg-white'
        }`}
      >
        <div
          className={`w-[95%] border border-[#0000002D] flex flex-col rounded-md ${
            darkState
              ? 'bg-[#212529] border-none'
              : 'bg-white border-[#0000002D]'
          }`}
        >
          <div
            className={`bg-[#21252908] text-2xl border-b border-b-[#0000002D] flex items-center justify-center py-2  ${
              darkState ? 'border-b-[#FFFFFF26]' : 'border-b-[#0000002D]'
            }`}
          >
            <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>关注我们</h1>
          </div>
          <div className="flex items-center justify-center gap-6 py-4">
            <FaXTwitter className="w-[30px] h-[30px] text-[#1F556A]" />
            <FaTelegram className="w-[30px] h-[30px] text-[#1F556A]" />
          </div>
        </div>
        {openListingModal && (
          <div
            className={`w-[95%]  mt-6 flex items-start border border-[#9EC5FE] mx-auto justify-between rounded-lg py-2 px-4 ${
              darkState ? 'bg-[#031633]' : 'bg-[#CFE2FF]'
            }`}
          >
            <div
              className={`w-[70%] flex flex-col  font-normal text-lg ${
                darkState ? 'text-[#6EA8FE]' : 'text-[#052C65]'
              }`}
            >
              <h1>嘿</h1>
              <h1>想要在这个网站上展示您的项目吗？</h1>
              <h1 className="underline cursor-pointer">获得精选</h1>
            </div>
            <FaX
              onClick={() => handleCloseModal()}
              className={`h-[20px] w-[20px] font-thin text-[#052C65] mt-2 cursor-pointer ${
                darkState ? 'text-gray-600' : 'text-[#052C65]'
              }`}
            />
          </div>
        )}
        <UpcomingLaunches />
        <div className="hidden lg:flex w-[98%]">
          <CryptoNews />
        </div>
        <div className="hidden lg:flex w-[98%]">
          <UsefulLinks />
        </div>
      </div>
    </>
  )
}

export default Social
