import Navbar from "@/components/navbar/Navbar";
import projects from "../../data/projects.json";
import Image from "next/image";
import Cards from "@/components/cards/Cards";

export default function Projects() {
    return (
        <main className="container flex flex-col items-center font-[family-name:var(--font-raleway)]">
            <Navbar />
            <div className="flex flex-col items-center justify-center pt-20">
                <h1 className="mb-4 text-4xl font-bold">Projects</h1>
                <Cards showEducation={false} showExperience={false} showProjects={true} experience={[]} education={[]} projects={projects} />
            </div>
        </main>
    );
}