'use client'

// Icons
import Image from "next/image";
import JSicon from "../icons/js-icon";
import Reacticon from "../icons/react-icon";
import PHPicon from "../icons/php-icon";
import NextJSicon from "../icons/next-icon";
import EmblaCarousel from './StackCarousel'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = {  slidesToScroll: 1, loop:true }

export default function Stack() {

    return(
        <div className="flex items-center justify-center w-full gap-44 pt-20">
          <div className="drop-shadow-[0px_0px_60px_rgba(192,192,192,1)]">
            <p className="mt-4 text-2xl  text-gray">
              2 years of
            </p>
            <h2 className="text-6xl font-bold">XP</h2>
            <p className="text-gray">Using these techonologies</p>
          </div>
            <EmblaCarousel options={OPTIONS}/>
        </div>
    )
}