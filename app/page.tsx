import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Body from "./components/Body";

export default function Home() {
  return (
    <>
      <Navbar />
      <Marquee />
      <Body />
    </>
  )
}
