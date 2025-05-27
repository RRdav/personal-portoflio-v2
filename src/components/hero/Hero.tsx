import Image from "next/image";
import Button from "../buttons/Button";

export default function Hero() {
    return(
        <div className="flex items-center justify-between w-full pt-20">
            <div className="flex flex-col justify-center">
                <h1 className="text-7xl  text-white">Hello, I'm RR!</h1>
                <p className="mt-4 text-2xl max-w-[800px]">I'm a software developer with a passion for building web applications and just coding around. Playing and writing radical guitar riffs in my free time. </p>
                <div className="flex items-center gap-14 mt-8">
                    <Button>Download CV</Button>
                    <h2 className="text-purple">See experiences</h2>
                </div>
            </div>
            <div>
            <div
            className="relative w-[500px] h-[500px] mask-[url('/blob.png')] mask-contain mask-no-repeat"
            >
            <Image
                src="/RR-DAVID.jpg"
                alt="hero"
                fill
                className="object-cover [object-position:0px_80px]"
            />
            </div>
            </div>
        </div>
    )
}