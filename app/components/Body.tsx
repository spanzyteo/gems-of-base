'use client'
import Gems from './Gems'
import SearchTokens from './SearchTokens'
import Social from './Social'
import { useAppSelector } from '../store/hooks'

const Body = () => {
  const darkState = useAppSelector((state) => (state.darkMode.darkMode))
  return <div className={`relative py-2 ${darkState ? 'bg-[#212529]' : 'bg-white'}`}>
    <Gems/>
    <SearchTokens />
    <Social />
  </div>
}

export default Body
