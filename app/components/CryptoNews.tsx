import { useAppSelector } from '../store/hooks'
import { cryptoNews, CryptoNewsData } from '../data/cryptoNews'

const CryptoNews = () => {
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <div
      className={`w-[95%]  mt-4 flex flex-col rounded-md border mx-auto mb-4 ${
        darkState ? 'border-[#FFFFFF26]' : 'border-[#0000002D]'
      }`}
    >
      <div
        className={`bg-[#21252908] text-2xl border-b flex items-center justify-center py-2 ${
          darkState ? 'border-b-[#FFFFFF26]' : 'border-b-[#0000002D]'
        }`}
      >
        <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>
          新闻中的加密货币
        </h1>
      </div>
      <div
        className={`flex flex-col rounded-lg  ${
          darkState ? 'bg-[#212529]' : 'bg-white'
        }`}
      >
        {cryptoNews.map((item: CryptoNewsData) => (
          <div
            className={`flex flex-col items-start   border-b py-3 ${
              darkState
                ? 'bg-[#212529] border-b-[#EEEEEE]'
                : 'bg-white border-b-[#0000002D]'
            }`}
          >
            <h1 className="text-[12px] font-semibold bg-[#6C757D] text-white p-1 rounded-lg ml-2">
              {item.name}
            </h1>
            <h1 className="text-[#6EA8FE] ml-2 text-[15px] mt-2">
              {item.title}
            </h1>
            <h1
              className={`text-[12px] w-auto sm:w-auto lg:w-[210px] xl:w-[230px] ml-2 mt-2 ${
                darkState ? 'text-[#DEE2E6]' : 'text-[#212529]'
              }`}
            >
              {item.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CryptoNews
