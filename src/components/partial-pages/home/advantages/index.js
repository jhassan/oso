import React from "react";
import { ArrowForwardIcon, CheckMarkFilledIcon } from "@/components/icons";
import Image from "next/image";

function AdvantagesSection() {
  return (
    <div className="container-main pt-8 pb-0 md:pt-12 md:pb-6">
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

      {/* <div className="w-full pt-16 justify-center items-center gap-2 flex flex-col">
        <div className="md:text-center text-black text-[40px] md:text-5xl font-bold md:leading-[80px]">
          Advantages of OSO Search{" "}
        </div>
        <p className="text-center text-gray-800 text-2xl font-light hidden md:block">
          OSO reads through thousands of websites in seconds, so you don’t have
          to waste time jumping between multiple sites, and delivers you a
          comprehensive answer.
        </p>
      </div>

      <div class="real-time w-full pb-[28px]">
        <img class="md:hidden" src="assets/images/realtime.png" alt="" />
        <img class="hidden md:block" src="assets/images/update.png" alt="" />
      </div>
      <div class="unsecured-time w-full pb-[28px]">
        <img class="md:hidden" src="assets/images/uncensored.png" alt="" />
        <img
          class="hidden md:block"
          src="assets/images/uncensored1.png"
          alt=""
        />
      </div> */}

      {/* <div className="w-[1089px] h-[571px] bg-gradient-to-b from-teal-100 via-slate-400 to-zinc-300 rounded-2xl" />

      <div className="w-[1089px] h-[571px] background-green rounded-2xl" /> */}
    </div>
  );
}

export default AdvantagesSection;
