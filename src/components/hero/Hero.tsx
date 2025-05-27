import Image from "next/image";
import Button from "../buttons/Button";

export default function Hero() {
    return(
        <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row ">
            <div className="flex flex-col justify-center">
                <h1 className="text-6xl font-bold text-white">Hello, I'm RR!</h1>
                <p className="mt-4 text-2xl max-w-[800px] text-gray">I'm a software developer with a passion for building web applications and just coding around. Playing and writing radical guitar riffs in my free time. </p>
                <div className="flex flex-col items-start gap-5 mt-8 sm:flex-row sm:items-center sm:gap-14">
                    <Button>Download CV</Button>
                </div>
            </div>
            <div>
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mask-[url('/blob.png')] mask-contain mask-no-repeat">
                <Image
                    src="/RR-DAVID.jpg"
                    alt="hero"
                    fill
                    className="object-cover [object-position:0px_40px] md:[object-position:0px_80px] "
                />
            </div>
            </div>
        </div>
    )
}