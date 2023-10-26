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

      <div className="w-full py-16 justify-center items-center gap-2 flex flex-col">
        <div className="md:text-center text-black text-[40px] md:text-5xl font-bold md:leading-[80px]">
          Advantages of OSO Search{" "}
        </div>
        <p className="text-center text-gray-800 text-2xl font-light hidden md:block">
          OSO reads through thousands of websites in seconds, so you don’t have
          to waste time jumping between multiple sites, and delivers you a
          comprehensive answer.
        </p>
      </div>

      <div className="flex flex-col gap-14">
        <div className="bg-[url('/assets/section1.webp')] md:bg-contain bg-no-repeat h-full md:h-[570px] w-full relative rounded-2xl">
          <div className="flex-col justify-start items-start gap-6 p-8 md:p-16 inline-flex">
            <div className=" text-black text-[32px] md:text-5xl font-bold">
              Up to Date
            </div>
            <div className="max-w-[422px]">
              <span className="text-gray-800 text-2xl font-light leading-loose">
                Unlike AI chatbots with fixed knowledge limits,{" "}
              </span>
              <span className="text-gray-800 text-2xl font-medium leading-loose">
                OSO Search guarantees you access to the latest
              </span>
              <span className="text-gray-800 text-2xl font-light leading-loose">
                {" "}
                and most pertinent information.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[url('/assets/section2.webp')] md:bg-contain bg-no-repeat h-full md:h-[570px] w-full relative rounded-2xl">
          <div className="flex-col justify-start items-start gap-6 p-8 md:p-16 inline-flex">
            <div className=" text-black text-[32px] md:text-5xl font-bold">
              Uncensored
            </div>
            <div className="max-w-[422px]">
              <span className="text-gray-800 text-2xl font-light leading-loose">
                OSO believes in{" "}
              </span>
              <span className="text-gray-800 text-2xl font-medium leading-loose">
                free speech{" "}
              </span>
              <span className="text-gray-800 text-2xl font-light leading-loose">
                and{" "}
              </span>
              <span className="text-gray-800 text-2xl font-medium leading-loose">
                unrestricted access to knowledge
              </span>
              <span className="text-gray-800 text-2xl font-light leading-loose">
                , ensuring your receive in-depth and unfiltered answers.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[url('/assets/section3.webp')] md:bg-contain bg-no-repeat h-full md:h-[570px] w-full relative rounded-2xl">
          <div className="flex-col justify-start items-start gap-6 p-8 md:p-16 inline-flex">
            <div className=" text-black text-[32px] md:text-5xl font-bold">
              Secure
            </div>
            <div className="max-w-[422px]">
              <span className="text-gray-800 text-2xl font-light leading-loose">
                With OSO, there’s{" "}
              </span>
              <span className="text-gray-800 text-2xl font-medium leading-loose">
                no need to venture into potentially harmful sites
              </span>
              <span className="text-gray-800 text-2xl font-light leading-loose">
                {" "}
                since the searching is done for you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesSection;
