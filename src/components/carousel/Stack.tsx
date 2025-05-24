'use client'
import Slider from "react-slick";
import Image from "next/image";
import JSicon from "../icons/js-icon";
import Reacticon from "../icons/react-icon";
import PHPicon from "../icons/php-icon";
import NextJSicon from "../icons/next-icon";

export default function Stack() {
    var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500
    };

    return(
      <>
        <div className="flex items-center justify-between w-full gap-20">
          <div className=" min-w-[500px] drop-shadow-[0px_0px_60px_rgba(192,192,192,1)]">
            <p className="mt-4 text-2xl  text-gray">
              2 years of
            </p>
            <h2 className="text-6xl font-bold">XP</h2>
            <p className="text-gray">Using these techonologies</p>
          </div>
          <div className=" slider-container">
            <Slider {...settings} className="w-[800px]">
              <div className="px-2">
                <div className="flex flex-col items-center justify-center px-3 py-8 h-full w-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 rounded-4xl">
                  <JSicon className="w-[40px] h-[40px]"/>
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="px-2">
                <div className="flex flex-col items-center justify-center px-3 py-8 h-full w-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 rounded-4xl">
                  <Reacticon className="w-[40px] h-[40px]" />
                  <p>React</p>
                </div>
              </div>
              <div className="px-2">
                <div className="flex flex-col items-center justify-center px-3 py-8 h-full w-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 rounded-4xl">
                  <div>
                    <PHPicon className="w-[40px] h-[40px]" />
                    <p>PHP</p>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="flex flex-col items-center justify-center px-3 py-8 h-full w-full bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 rounded-4xl">
                  <NextJSicon className="w-[40px] h-[40px]" />
                  <p>NextJS</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    )
}