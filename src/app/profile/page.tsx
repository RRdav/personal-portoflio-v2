import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import Technologies from "@/components/technologies/Technologies";
import Cards from "@/components/cards/Cards";
import experience from "@/data/experience.json"
import education from "@/data/education.json";
import Link from "next/link";

export default function Projects() {
    return(
      <main className="container flex flex-col items-center font-[family-name:var(--font-raleway)]">
        <Navbar />
            <div className="flex flex-col-reverse items-center justify-between w-full pt-20 lg:flex-row">
                <div className="flex flex-col justify-center">
                    <p className="mt-4 text-xl ">Hi again! I'm <strong>Raphael David</strong>, currently a Web Developer working in a PHP based agency.</p>
                    <p className="mt-4 text-xl leading-10">I am also progressing through a Bachelor of IT major in CS student at QUT, studying online while balancing a full-time job, so I'm slowly progressing through it. </p>
                    <div className="flex flex-col items-start gap-5 mt-8 sm:flex-row sm:items-center sm:gap-14">
                        <Link href="/RaphaelDavids_Resume.pdf" download>
                            <Button >Download CV</Button>
                        </Link>
                    </div>
                </div>
            </div>
        <Technologies hidden={true}/>
        <Cards experience={experience} education={education} projects={[]} showEducation={true} showExperience={true} showProjects={false} />
      </main>
    )
}