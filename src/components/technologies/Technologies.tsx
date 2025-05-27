import CSSIcon from "../icons/css-icon";
import DockerIcon from "../icons/docker-icon";
import GitIcon from "../icons/git-icon";
import JSicon from "../icons/js-icon";
import MySQLIcon from "../icons/mysql-icon";
import NextJSicon from "../icons/next-icon";
import NodeIcon from "../icons/node-js-icon";
import PHPicon from "../icons/php-icon";
import Reacticon from "../icons/react-icon";
import TailwindIcon from "../icons/tailwind-icon";
import TypeScriptIcon from "../icons/typescript-icon";

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
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <NextJSicon className="w-4 h-4 text-white" />
                            </span>NextJS
                        </li>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <TailwindIcon className="w-4 h-4 text-white" />
                            </span>Tailwind
                        </li>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <CSSIcon className="w-4 h-4 text-white" />
                            </span>CSS/SCSS
                        </li>

                    </ul>
                </div>
                <div className="text-light-gray border-2 rounded-2xl border-charcoal p-5">
                    <h3 className="font-bold">Backend</h3>
                    <ul>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <NodeIcon className="w-4 h-4 text-white" />
                            </span>NodeJS
                        </li>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <MySQLIcon className="w-4 h-4 text-white" />
                            </span>MySQL
                        </li>
                    </ul>
                </div>
                <div className="text-light-gray border-2 rounded-2xl border-charcoal p-5">
                    <h3 className="font-bold">Languages</h3>
                    <ul>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <JSicon className="w-4 h-4 text-white" />
                            </span>JavaScript
                        </li>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <TypeScriptIcon className="w-4 h-4 text-white" />
                            </span>JavaScript
                        </li>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <PHPicon className="w-4 h-4 text-white" />
                            </span>PHP
                        </li>
                    </ul>
                </div>
                <div className="text-light-gray border-2 rounded-2xl border-charcoal p-5">
                    <h3 className="font-bold">DevOps</h3>
                    <ul>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <DockerIcon className="w-4 h-4 text-white" />
                            </span>Docker
                        </li>
                        <li className="flex gap-2 p-1">
                            <span className="w-5 h-5 bg-charcoal rounded-full flex items-center justify-center">
                                <GitIcon className="w-4 h-4 text-white" />
                            </span>Git
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}