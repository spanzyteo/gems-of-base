import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <Marquee />
      <div className="text-red-500">Hello world</div>
    </>
  )
}
