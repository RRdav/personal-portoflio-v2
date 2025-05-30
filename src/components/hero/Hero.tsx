import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";

export default function Hero() {
    return(
        <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row ">
            <div className="flex flex-col justify-center drop-shadow-[0px_0px_240px_rgba(192,192,192,1)]">
                <h1 className="text-6xl font-bold text-white">Hello, I'm RR!</h1>
                <p className="mt-4 text-xl sm:text-2xl max-w-[800px] leading-10 text-gray">I'm a software developer with a passion for building web applications and just coding around. Playing and writing radical guitar riffs in my free time. </p>
                <div className="flex flex-col items-start gap-5 mt-8 sm:flex-row sm:items-center sm:gap-14">
                    <Link href="/profile">
                        <Button>
                            About me
                        </Button>
                    </Link>
                </div>
            </div>
            <div>
            <div className="relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mask-[url('/blob.png')] mask-contain mask-no-repeat">
                <Image
                    src="/RR-DAVID.jpg"
                    alt="hero"
                    fill
                    className="object-cover [object-position:0px_40px] sm:[object-position:0px_60px] md:[object-position:0px_80px] "
                />
            </div>
            </div>
        </div>
    )
}