import React from "react";
import { ArrowForwardIcon, CheckMarkFilledIcon } from "@/components/icons";
import Image from "next/image";

function HomePageHero() {
  return (
    <div className="container-main pt-8 pb-0 md:pt-24 md:pb-6">
      <div className="pb-6 flex-col justify-start items-center gap-6 inline-flex">
        <div className="max-w-[718px] text-center text-black text-[40px] md:text-[64px] font-extrabold md:leading-[80px]">
          Experience the Future of Search with OSO
        </div>
        <div className="max-w-[1089px] text-center text-gray-800 text-2xl md:text-[32px] font-light">
          Find what you’re looking for faster by letting OSO do the research for
          you.
        </div>
      </div>

      <div className="w-full flex-col justify-center items-center gap-2 inline-flex">
        <div className="justify-start items-start gap-2 flex flex-col md:flex-row pt-6 pb-8">
          <input
            className="min-w-[352px] h-[74px] px-6 py-4 bg-white text-black rounded-lg border border-gray-600 flex-col justify-center items-center gap-2 inline-flex"
            type="text"
            placeholder="Enter your email"
          />

          <button
            type="button"
            className="px-16 py-[17.6px] w-full md:w-fit bg-purple-600 rounded-lg justify-center items-center gap-4 flex"
          >
            <span className="text-white text-2xl font-normal leading-relaxed">
              Join Waitlist
            </span>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-start sm:justify-center sm:items-center gap-8">
        <div className="h-6 justify-start items-start gap-2 inline-flex">
          <CheckMarkFilledIcon />
          <div className="text-gray-800 text-base font-normal leading-normal">
            Fully Uncensored{" "}
          </div>
        </div>
        <div className="h-6 justify-start items-start gap-2 inline-flex">
          <CheckMarkFilledIcon />
          <div className="text-gray-800 text-base font-normal leading-normal">
            7-day trial{" "}
          </div>
        </div>
        <div className="h-6 justify-start items-start gap-2 inline-flex">
          <CheckMarkFilledIcon />
          <div className="text-gray-800 text-base font-normal leading-normal">
            Customised Plug-ins{" "}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-6">
        <Image height={600} width={902} src="/assets/video.png" alt="" />
      </div>
    </div>
  );
}

export default HomePageHero;
