import Reacticon from "../icons/react-icon";

export default function Technologies() {
    return(
        <div className="pt-20 flex flex-col self-start w-full">
            <h2 className="text-light-gray font-light text-5xl">These are the technologies I've been using</h2>
            <div className="grid grid-cols-4 pt-20 gap-8">
                <div className="text-light-gray border-2 rounded-2xl border-charcoal p-5">
                    <h3 className="font-bold">Front-end</h3>
                    <ul>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <Reacticon className="w-4 h-4 text-white" />
                            </span>React
                        </li>
                        <li>Next.js</li>
                        <li>Tailwind</li>
                        <li>CSS/SCSS</li>
                    </ul>
                </div>
                <div className="text-light-gray border-2 rounded-2xl border-charcoal p-5">
                    <h3 className="font-bold">Backend</h3>
                    <ul>
                        <li>NodeJS</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="text-light-gray border-2 rounded-2xl border-charcoal p-5">
                    <h3 className="font-bold">Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="text-light-gray border-2 rounded-2xl border-charcoal p-5">
                    <h3 className="font-bold">DevOps</h3>
                    <ul>
                        <li>Docker</li>
                        <li>Git</li>
                        <li>CI/CD</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}