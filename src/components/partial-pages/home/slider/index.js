import React from "react";
import HomeCarousel from "@/components/ui/carousel";

function HomeSlider() {
  const data = [
    {
      comment: `It's next level from chatGPT bc you can pull data about real time trends, sentiment and analytics. Content creators are going to make a lot of money with OSO.`,
      name: "Michael S.",
    },
    {
      comment: `It's next level from chatGPT bc you can pull data about real time trends, sentiment and analytics. Content creators are going to make a lot of money with OSO.`,
      name: "Michael S.",
    },
    {
      comment: `It's next level from chatGPT bc you can pull data about real time trends, sentiment and analytics. Content creators are going to make a lot of money with OSO.`,
      name: "Michael S.",
    },
    {
      comment: `It's next level from chatGPT bc you can pull data about real time trends, sentiment and analytics. Content creators are going to make a lot of money with OSO.`,
      name: "Michael S.",
    },
  ];
  return (
    <>
      <div className="container-main py-16 w-full ">
        <div className="grow shrink basis-0 text-center text-black text-5xl font-bold leading-[80px]">
          Many people already feel the magic
        </div>
      </div>
      <div className="relative">
        <div className="pb-8 pt-10 overflow-visible container-main 3xlg:min-w-[1364px] relative">
          <HomeCarousel data={data} />
        </div>
        {/* <img
          src="/assets/bg-white-gradiant.webp"
          className="absolute top-10 right-0 z-10"
        /> */}
      </div>
    </>
  );
}

export default HomeSlider;
