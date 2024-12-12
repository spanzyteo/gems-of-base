'use client'
import Gems from './Gems'
import SearchTokens from './SearchTokens'
import Social from './Social'
import { useAppSelector } from '../store/hooks'
import ShowRoom from './ShowRoom'
import MobileSocial from './MobileSocial'

const Body = () => {
  const darkState = useAppSelector((state) => (state.darkMode.darkMode))
  return <div className={`relative py-2 ${darkState ? 'bg-[#212529]' : 'bg-white'}`}>
    <Gems/>
    <SearchTokens />
    <Social />
    <ShowRoom />
    <MobileSocial />
  </div>
}

export default Body
