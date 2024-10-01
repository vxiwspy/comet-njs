import Link from "next/link";
import localFont from "next/font/local";

const Graphik = localFont({
    src: "../app/fonts/Graphik-Bold.eot"
  });

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center mx-2 h-screen w-screen">
        <h1 className={`animate-fade-down animate-delay-[300ms] ${Graphik.className} text-2xl my-5 font-bold md:text-8xl items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 text-center`}>Tracking Made Easy.<br/>Everything In One App.</h1>
        <p className="animate-fade-up animate-delay-[500ms] text-gray-400 text-md my-3 text-center mx-3">Best App To Track Your Meals, Workouts And More In One Place And To Progress Faster.<br/>Try Our App For Free And Elevate Your Gym Logging Today</p>
        <div className="inline-flex gap-6">
            <button className="animate-fade-down animate-delay-[700ms] my-5 bg-white text-black w-[128px] h-[40px] rounded-full text-sm hover:bg-gray-100"><Link href="/">Get Comet</Link></button>
            <button className="animate-fade-up animate-delay-[700ms] my-5 bg-black text-white w-[128px] h-[40px] rounded-full text-sm hover:bg-gray-700"><Link href="/">Tutorial</Link></button>
        </div>
    </div>
  );
}