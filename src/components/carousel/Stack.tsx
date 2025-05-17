'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Stack() {
    var settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    draggable: false
    };

    return(
      <div className="flex items-center w-full h-screen">
        <div className="">
          <p className="mt-4 text-2xl text-center text-gray max-w-[800px]">
            I'm a software engineer with a passion for building web applications.
            Me like play gitor and make music. Me like play with cats. Me like my
            beb joiebells
          </p>
        </div>
        <div className="w-[400px]">
          <Slider {...settings}>
            <div className="w-[200px] h-[200px] p-5">
              <div className="flex flex-col items-center justify-center w-full h-full bg-js rounded-2xl">

              </div>
            </div>
            <div className="w-[200px] h-[200px] p-5">
              <div className="flex flex-col items-center justify-center w-full h-full bg-react rounded-2xl">

              </div>
            </div>
          </Slider>
        </div>
      </div>
    )
}