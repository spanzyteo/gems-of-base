'use client'
import { FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'
import { FaX } from 'react-icons/fa6'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeListingModal } from '../store/modalSlice'

const Social = () => {
  const dispatch = useAppDispatch()
  const openListinModal = useAppSelector((state) => state.modal.listingModal)
  const handleCloseModal = () => {
    dispatch(closeListingModal())
  }

  return (
    <>
      <div className="lg:flex flex-col items-center justify-center hidden absolute top-6 xl:right-[7rem] right-8 w-[246px] xl:w-[281px] border border-[#0000002D] rounded-md shadow-2xl py-1">
        <div className="w-[95%] border border-[#0000002D] flex flex-col rounded-md">
          <div className="bg-[#21252908] text-2xl border-b border-b-[#0000002D] flex items-center justify-center py-2">
            <h1>关注我们</h1>
          </div>
          <div className="flex items-center justify-center gap-6 py-4">
            <FaXTwitter className="w-[30px] h-[30px] text-[#1F556A]" />
            <FaTelegram className="w-[30px] h-[30px] text-[#1F556A]" />
          </div>
          {openListinModal && (
            <div className="w-[95%] bg-[#CFE2FF] mt-6 flex items-start border border-[#9EC5FE] mx-auto justify-between rounded-lg py-2 px-4">
              <div className="w-[70%] flex flex-col text-[#052C65] font-normal text-lg">
                <h1>嘿</h1>
                <h1>想要在这个网站上展示您的项目吗？</h1>
                <h1 className="underline cursor-pointer">获得精选</h1>
              </div>
              <FaX onClick={() => handleCloseModal()} className="h-[20px] w-[20px] font-thin text-[#052C65] mt-2 cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Social
