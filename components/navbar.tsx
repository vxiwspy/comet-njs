import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";

import Logo from "../public/logo.png"

const Graphik = localFont({
    src: "../app/fonts/Graphik-Bold.eot",
    weight: "20 30",
  });


export default function Navbar() {
  return (
    <div className="flex gap-3 top-0 fixed w-screen py-5 text-white text-lg  items-center justify-start md:justify-center border-b border-gray-800 bg-transparent ">
      <Link href="/" className={`text-xl font-bold text-gray-200 ${Graphik.className} px-1 md:px-9 inline-flex md:inline-flex`} ><Image className="flex mx-2 md:-px-10 md:mx-10 rounded-lg" src={Logo} alt="logo" width={45} height={20} /><h1 className="my-2 hidden sm:flex">comet</h1></Link>
      <div className={`flex gap-3`}>
        <Link href="/" className="text-sm text-gray-50 mx-2 hover:text-blue-500 hidden md:flex">Getting Started</Link>
        <Link href="/" className="text-sm text-gray-50 mx-2 hover:text-blue-500 hidden md:flex">Features</Link>
        <Link href="/" className="text-sm text-gray-50 mx-2 hover:text-blue-500 hidden md:flex">Useful Links</Link>
      </div>
    </div>
    );

 };
