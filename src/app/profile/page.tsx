import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import Technologies from "@/components/technologies/Technologies";

export default function Projects() {
    return(
      <main className="container flex flex-col items-center font-[family-name:var(--font-raleway)]">
        <Navbar />
            <div className="flex flex-col-reverse items-center justify-between w-full pt-20 lg:flex-row">
                <div className="flex flex-col justify-center">
                    <p className="mt-4 text-2xl ">Hi again! I'm currently a Web Developer working in a PHP based agency.</p>
                    <p className="mt-4 text-2xl ">I am also progressing through a Bachelor of IT major in CS student at QUT, studying online while balancing a full-time job, so I'm slowly progressing through it. </p>
                    <p className="mt-4 text-xl">I have a passion for building web applications and just coding around. Playing and writing radical guitar riffs in my free time.</p>
                    <div className="flex flex-col items-start gap-5 mt-8 sm:flex-row sm:items-center sm:gap-14">
                        <Button>Download CV</Button>
                    </div>
                </div>
            </div>
        <Technologies />
      </main>
    )
}