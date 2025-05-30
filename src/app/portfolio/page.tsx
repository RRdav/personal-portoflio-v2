import Navbar from "@/components/navbar/Navbar";
import projects from "../data/projects.json";
import Image from "next/image";

export default function Projects() {
    return (
        <main className="container flex flex-col items-center font-[family-name:var(--font-raleway)]">
            <Navbar />
            <div className="flex flex-col items-center justify-center pt-20">
                <h1 className="mb-4 text-4xl font-bold">Projects</h1>
                <div className="grid grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <h2>{project.name}</h2>
                            <figure>
                                <Image 
                                    src={project.data.image}
                                    alt={project.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}