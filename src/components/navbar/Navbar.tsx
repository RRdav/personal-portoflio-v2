import GithubIcon from '../icons/github-mark-white'
import Image from 'next/image'
import LinkedInIcon from '../icons/linkedin-icon'
import EmailIcon from '../icons/email-icon'

export default function Navbar() {
    return(
        <div className="bg-dark rounded-full">
            <nav>
                <div className="flex justify-between items-center p-3 space-x-12">
                    <ul className="flex space-x-8">
                        <li><a href="#" className="text-purple font-medium hover:text-white transition-colors">RR</a></li>
                        <li><a href="#" className="text-purple font-medium hover:text-white transition-colors">profile</a></li>
                        <li><a href="#" className="text-purple font-medium hover:text-white transition-colors">portfolio</a></li>
                    </ul>
                        {/* socials */}
                    <ul className="flex space-x-6">
                        <li>
                            <a href="https://www.linkedin.com/in/rr-david/" target="_blank">
                                <LinkedInIcon className="text-purple hover:text-white transition-colors"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/RRdav" target="_blank">
                                <GithubIcon className="text-purple hover:text-white transition-colors"/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:raphaelruizd@gmail.com">
                                <EmailIcon className="text-purple hover:text-white transition-colors"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}