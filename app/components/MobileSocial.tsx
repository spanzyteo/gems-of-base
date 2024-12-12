import { FaTelegram, FaX, FaXTwitter } from 'react-icons/fa6'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { closeListingModal } from '../store/modalSlice'
import CryptoNews from './CryptoNews'

const MobileSocial = () => {
  const dispatch = useAppDispatch()
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  const openListingModal = useAppSelector((state) => state.modal.listingModal)
  const handleCloseModal = () => {
    dispatch(closeListingModal())
  }

  return (
    <div
      className={`flex flex-col items-center justify-center lg:hidden mx-auto w-[95%] border border-[#0000002D] mt-4 rounded-md py-1 shadow-xl ${
        darkState
          ? 'bg-[linear-gradient(to_bottom,_#FFFFFF26,_#FFFFFF00)]'
          : 'bg-white'
      }`}
    >
      <div
        className={`w-[95%] border border-[#0000002D] flex flex-col rounded-md mt-4 ${
          darkState ? 'bg-[#212529] border-none' : 'bg-white border-[#0000002D]'
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
      <CryptoNews />
    </div>
  )
}

export default MobileSocial
