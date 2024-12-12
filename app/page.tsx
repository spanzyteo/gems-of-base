'use client'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Body from './components/Body'
import Footer from './components/Footer'
import { useAppSelector } from './store/hooks'

export default function Home() {
  const darkState = useAppSelector((state) => state.darkMode.darkMode)
  return (
    <>
      <div
        className={`${darkState ? 'bg-[#212529]' : 'bg-white'}`}
      >
        <Navbar />
        <Marquee />
        <Body />
        <Footer />
      </div>
    </>
  )
}
