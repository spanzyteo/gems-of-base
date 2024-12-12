import React from 'react'
import { useAppSelector } from '../store/hooks'
import Link from 'next/link'

const UsefulLinks = () => {
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
        <h1 className={`${darkState ? 'text-[#DEE2E6]' : ''}`}>Useful Links</h1>
      </div>
      <div
        className={`flex flex-col items-center rounded-lg  ${
          darkState ? 'bg-[#212529]' : 'bg-white'
        }`}
      >
        <h1
          className={`mt-2 ${darkState ? 'text-[#DEE2E6]' : 'text-[#212529]'}`}
        >
          Data Aggregators
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <Link
            href={'https://coinmarketcap.com/'}
            className="text-[12px] bg-[#198754] text-white rounded-md p-1"
          >
            Coinmarketcap
          </Link>
          <Link
            href={'https://coingecko.com/'}
            className="text-[12px] bg-[#198754] text-white rounded-md p-1"
          >
            Coingecko
          </Link>
        </div>
        <h1
          className={`mt-2 ${darkState ? 'text-[#DEE2E6]' : 'text-[#212529]'}`}
        >
          Coinbase Official
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <Link
            href={'https://coinbase.com/'}
            className="text-[12px] bg-[#0D6EFD] text-white rounded-md p-1"
          >
            Coinbase
          </Link>
          <Link
            href={'https://wallet.coinbase.com/'}
            className="text-[12px] bg-[#0D6EFD] text-white rounded-md p-1"
          >
            Coinbase Wallet
          </Link>
        </div>
        <Link
          href={'https://base.org/'}
          className="text-[12px] bg-[#0D6EFD] text-white rounded-md p-1 px-2 mt-2 font-semibold"
        >
          BASE
        </Link>
        <h1
          className={`mt-2 ${darkState ? 'text-[#DEE2E6]' : 'text-[#212529]'}`}
        >
          NFT Marketplaces
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <Link
            href={'https://opensea.io/rankings/trending?chain=base'}
            className="text-[12px] bg-[#0DCAF0] text-white rounded-md p-1"
          >
            OPensea
          </Link>
          <Link
            href={'https://zora.co/'}
            className="text-[12px] bg-[#0DCAF0] text-white rounded-md p-1"
          >
            Zora
          </Link>
          <Link
            href={'https://rarible.com/explore/base/collections'}
            className="text-[12px] bg-[#0DCAF0] text-white rounded-md p-1"
          >
            Rarible
          </Link>
        </div>
        <Link
          href={'https://base.org/'}
          className="text-[12px] bg-[#0DCAF0] text-white rounded-md p-1 px-2 mt-2 "
        >
          mint.fun
        </Link>
        <h1
          className={`mt-2 ${darkState ? 'text-[#DEE2E6]' : 'text-[#212529]'}`}
        >
          Decentralized Exchanges
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <Link
            href={'https://aerodrome.finance/swap'}
            className="text-[12px] bg-[#FFC107] text-white rounded-md p-1"
          >
            Aerodrome
          </Link>
          <Link
            href={'https://uniswap.org/'}
            className="text-[12px] bg-[#FFC107] text-white rounded-md p-1"
          >
            Uniswap
          </Link>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Link
            href={'https://pancakeswap.finance/'}
            className="text-[12px] bg-[#FFC107] text-white rounded-md p-1"
          >
            Pancakeswap
          </Link>
          <Link
            href={'https://app.1inch.io/'}
            className="text-[12px] bg-[#FFC107] text-white rounded-md p-1"
          >
            1inch
          </Link>
          <Link
            href={'https://sushi.com/'}
            className="text-[12px] bg-[#FFC107] text-white rounded-md p-1"
          >
            Sushiswap
          </Link>
        </div>
        <h1
          className={`mt-2 ${darkState ? 'text-[#DEE2E6]' : 'text-[#212529]'}`}
        >
          Other Links
        </h1>
        <Link
          href={'https://etherscan.io/gastracker'}
          className="text-[12px] bg-[#6C757D] text-white rounded-md p-1 mb-2"
        >
          Gas Checker
        </Link>
      </div>
    </div>
  )
}

export default UsefulLinks
