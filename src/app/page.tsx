import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head><link rel="icon" href="/favicon.ico" /></Head>
      <div className="flex justify-center items-center h-screen w-screen bg-[#090909]">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
