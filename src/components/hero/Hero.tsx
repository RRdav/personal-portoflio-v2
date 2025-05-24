import Image from "next/image";
import Button from "../buttons/Button";

export default function Hero() {
    return(
        <div className="flex items-center justify-between w-full pt-20">
            <div className="flex flex-col justify-center">
                <h1 className="text-7xl  text-white">Hello, I'm RR!</h1>
                <p className="mt-4 text-2xl text-gray max-w-[800px]">I'm a software engineer with a passion for building web applications. Me like play gitor and make music. Me like play with cats. Me like my beb joiebells</p>
                <div className="flex items-center gap-14 mt-8">
                    <Button>Download CV</Button>
                    <h2 className="text-purple">See experiences</h2>
                </div>
            </div>
            <div>
                <div className="mask-[url('/blob.png')] mask-cover bg-purple">
                    <Image
                        src="/rrdabed.jpg"
                        alt="hero"
                        width={400}
                        height={400}
                        className="object-cover w-[450px] h-[450px] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}