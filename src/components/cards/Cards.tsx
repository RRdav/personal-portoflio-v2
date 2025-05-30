import Link from "next/link";
import JobIcon from "../icons/job-icon";
import StudyIcon from "../icons/study-icon";
import Image from "next/image";



export default function Cards({experience, education, projects, showExperience, showEducation, showProjects}:
    {experience: Array<any>, education: Array<any>, projects: Array<any>, showExperience: boolean, showEducation: boolean, showProjects: boolean}) {
    return(
        <>
            {/* // experience section */}
            {showExperience &&
                <div className="pt-10 w-full">
                    {experience.map((data, index) => (
                        <div key={index} className="flex flex-col sm:flex-row bg-dark mt-10 rounded-3xl p-10 min-h-[250px] gap-10">
                            <div className="w-full sm:w-2/4">
                                <h4 className="font-medium mb-2">{data.position}</h4>
                                <p><small className="text-purple font-medium flex items-center gap-1"><JobIcon className="w-4"/>{data.employment_type}</small></p>
                                <p><small className="text-gray">{data.years_in}</small></p>
                                <p><small className="text-gray">{data.job_location}</small></p>
                            </div>
                            <div className="w-full">
                                <h4 className="text-sm text-purple font-medium mb-4">{data.company_name}</h4>
                                <p className="text-sm text-gray leading-7">{data.job_description_responsibilities}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }

            {/* // education section */}
            {showEducation &&
                <div className="w-full">
                    {education.map((data, index)=> (
                        <div key={index} className="flex border-charcoal border mt-10 rounded-3xl p-10 min-h-[200px]">
                            <div className="w-full">
                                <h4 className="font-medium flex items-center mb-1 gap-2"><span><StudyIcon className="w-5"/></span>{data.university}</h4>
                                <p><small className="text-purple font-medium">{data.degree}</small></p>
                                <p><small className="text-gray">{data.startDate} - {data.endDate}</small></p>
                                <p className="mt-2 leading-7">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }

            {/* // projects section */}
            {showProjects &&
                <div className="w-full">
                    {projects.map((data, index)=> (
                        <div className="flex flex-col lg:flex-row border-charcoal border rounded-3xl p-10 mt-10 min-h-[200px] items-center gap-10" key={index} >
                            <div className="w-full relative min-h-[200px] max-w-[300px] ">
                                <Image
                                    src={data.data.image != "none" ? data.data.image : "/placeholder.jpg"}
                                    alt={data.name}
                                    fill
                                    className="rounded-3xl w-full object-contain"
                                    />
                            </div>
                            <div className="flex">
                                <div className="w-full">
                                    <h3 className="font-medium text-2xl mb-1">{data.name}</h3>
                                    <p><small className="text-purple font-medium">{data.degree}</small></p>
                                    <p><small className="text-blue-400"><Link href={data.data.website} target="_blank">{data.data.website}</Link></small></p>
                                    <p>
                                        <small className={
                                            data.data.status === "Live"
                                            ? "text-green-500"
                                            : data.data.status === "Down"
                                            ? "text-red-500"
                                            : data.data.status === "In Development"
                                            ? "text-yellow-500"
                                            : ""
                                        }>
                                            {data.data.status}
                                        </small>
                                    </p>
                                    <p className="mt-2 leading-7 text-white">{data.data.description}</p>
                                    <p className="mt-2 leading-7 text-gray">{data.data.responsibility}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </>
    )
}