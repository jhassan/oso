import {
  ArrowForwardIcon,
  FacebookIcon,
  InstagramIcon,
  SvgLinkedin,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-wraper w-full px-6 pt-[200px] bg-black md:px-24">
        <div className="footer w-full container-main">
          <div className="ambassador w-full p-6 bg-gray-100 mb-24 mt-[-298px] rounded-lg lg:px-24 lg:py-16">
            <div className="grid divide-y divide-neutral-200 max-w-[896px] mx-auto">
              <div className="group">
                <div className="flex flex-col items-center lg:flex-row md:justify-between gap-4">
                  <div className=" text-black text-[40px] font-bold leading-[56px]">
                    Become OSO ambessedor
                  </div>
                  <button className="w-full px-8 py-[11px] bg-purple-600 rounded-lg justify-center items-center gap-2 flex cursor-pointer md:w-fit">
                    <div className="Label text-white text-base font-normal leading-relaxed">
                      Apply now
                    </div>
                    <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-wraper w-full max-w-[1088px] mx-auto flex flex-col md:flex-row md:justify-between gap-5">
            <div className="footer-left max-w-[418px]">
              <div className="flex justify-end gap-8 items-end">
                <img
                  className=""
                  src="/assets/footer-logo.png"
                  alt="Company name"
                />
                <p className="text-white text-2xl font-light text-end">
                  Experience the power of AI
                </p>
              </div>
              <button
                type="button"
                className="h-12 mt-8 px-6 py-2 bg-white rounded-lg justify-center items-center gap-2 inline-flex"
              >
                <div className="text-black text-base font-normal leading-relaxed">
                  Join Waitlist
                </div>
              </button>
            </div>
            <div className="footer-right max-w-[433px]">
              <div className="text mb-4">
                <p className="text-gray-400 text-base font-light leading-normal">
                  Stay updated on the latest news and features.
                </p>
              </div>
              <input
                className="w-full h-[64px] px-6 py-4 bg-transparent text-white rounded-lg border border-gray-600 flex-col justify-center items-center gap-2 inline-flex"
                type="text"
                placeholder="Enter your email"
              />
              {/* <div className="input-button w-full block p-6 py-4 mb-2 rounded-lg border border-gray-600">
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your name"
                    className="block w-full py-4 bg-black rounded-lg text-gray-500 text-base font-normal leading-loose border-0 focus:border-0"
                  />
                  
                  <div className="Icons w-6 h-6">
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4976 12.0213C15.4981 12.255 15.4167 12.4814 15.2676 12.6613L10.2676 18.6613C9.91417 19.0866 9.28289 19.1448 8.85763 18.7913C8.43237 18.4378 8.37417 17.8066 8.72763 17.3813L13.2076 12.0213L8.88763 6.6613C8.71986 6.45471 8.64136 6.18976 8.66952 5.92512C8.69767 5.66048 8.83015 5.41798 9.03763 5.2513C9.24549 5.06617 9.52111 4.97605 9.79819 5.00262C10.0753 5.02919 10.3287 5.17004 10.4976 5.3913L15.3276 11.3913C15.4531 11.5764 15.513 11.7982 15.4976 12.0213Z"
                      fill="#8E33FF"
                    />
                  </svg>
                  </div>
                </div>
              </div> */}
              <div className="socialmedia justify-around items-center flex pt-6">
                <div className="p-2">
                  <div className="IconLinkedin w-8 h-8">
                    <SvgLinkedin />
                  </div>
                </div>
                <div className="p-2">
                  <div className="IconFacebook w-8 h-8">
                    <FacebookIcon />
                  </div>
                </div>
                <div className="p-2">
                  <div className="TwitterX1 w-6 h-6">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="p-2">
                  <div className="IconInstagram w-8 h-8">
                    <InstagramIcon />
                  </div>
                </div>
                <div className="p-2">
                  <div className="IconYoutube w-8 h-8">
                    <YoutubeIcon />
                  </div>
                </div>
                <div className="p-2">
                  <div className="IconTiktok w-8 h-8">
                    <TiktokIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-black py-6 justify-center items-center flex">
            <div className="w-full bg-gray-400 bg-opacity-20 border border-gray-400 border-opacity-20"></div>
          </div>
          <div className="justify-between md:items-center w-full flex flex-col md:flex-row gap-5 py-8">
            <p className="text-gray-500 text-sm font-normal leading-snug order-2 md:order-1">
              © 2023 W4 Labs Inc.{" "}
            </p>
            <div className="justify-start items-start gap-8 flex order-1 md:order-2">
              <p className="text-gray-400 text-sm font-normal leading-snug">
                DCMA Policy
              </p>
              <p className="text-gray-400 text-sm font-normal leading-snug">
                Terms of Service
              </p>
              <p className="text-gray-400 text-sm font-normal leading-snug">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
