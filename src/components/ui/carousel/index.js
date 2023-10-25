import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
// import { BlogCarouselCard } from "../../cards";

const mainSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 2,
  arrows: true,
  swipeToSlide: true,
  draggable: true,
};

function NextArrow({ currentSlide, slideCount, cardsToShow, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "moz-css absolute !inline-flex items-center justify-center right-0 bg-gray-100 rounded-full border border-gray-200 top-24 w-12 h-12 translate-x-[70px]",
        currentSlide !== slideCount - cardsToShow && "text-gray-400",
        currentSlide === slideCount - cardsToShow && "text-gray-400 "
      )}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - cardsToShow ? true : false}
      type="button"
    >
      <ArrowRightIcon width={20} height={29} />
    </button>
  );
}

NextArrow.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
  cardsToShow: PropTypes.number,
};

NextArrow.defaultProps = {
  currentSlide: 0,
  slideCount: 0,
};

function PrevArrow({ currentSlide, slideCount, ...props }) {
  return (
    <>
      {currentSlide === 0 ? (
        ""
      ) : (
        <button
          {...props}
          className={twMerge(
            "moz-css absolute !inline-flex items-center justify-center left-0 bg-gray-100 rounded-full border border-gray-200 top-24 z-10 w-12 h-12 translate-x-[0px]",
            currentSlide !== 0 && "text-gray-400",
            currentSlide === 0 && "text-gray-400 "
          )}
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
        >
          <ArrowLeftIcon width={20} height={20} />
        </button>
      )}
    </>
  );
}

PrevArrow.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
};

const HomeCarousel = ({ data }) => {
  const cardsToShow = {
    desktop: 1.77,
    bigTablet: 1.97,
    tablet: 1.97,
    mobile: 1,
  };

  const settings = {
    ...mainSettings,
    slidesToShow: cardsToShow.desktop,
    nextArrow: <NextArrow cardsToShow={cardsToShow.desktop} />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: cardsToShow.bigTablet,
          nextArrow: <NextArrow cardsToShow={cardsToShow.bigTablet} />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: cardsToShow.tablet,
          nextArrow: <NextArrow cardsToShow={cardsToShow.tablet} />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: cardsToShow.mobile,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <span
      className="relative overflow-hidden"
      style={{ webkitTransition: "translate3d(0,0,0)" }}
    >
      <Slider {...settings}>
        {data &&
          data?.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-400 flex-col justify-center items-center gap-2 inline-flex"
            >
              <div className="justify-center items-center gap-6 inline-flex">
                <div className="flex-col justify-center items-center gap-4 inline-flex">
                  <div className="text-center text-black text-2xl font-normal leading-[34px]">
                    {item.comment}
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <img
                      className="w-8 h-8 rounded-[250px]"
                      src="/assets/dummy-person.png"
                    />
                    <div className="text-center text-gray-400 text-base font-normal leading-9">
                      {item.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </span>
  );
};

export default HomeCarousel;
