import JobIcon from "../icons/job-icon";
import StudyIcon from "../icons/study-icon";



export default function Cards({experience, education}: {experience: Array<any>, education: Array<any>}) {
    return(
        <>
            {/* // experience section */}
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
            {/* // education section */}
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
        
        </>
    )
}