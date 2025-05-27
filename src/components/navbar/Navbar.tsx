import GithubIcon from '../icons/github-mark-white'
import LinkedInIcon from '../icons/linkedin-icon'
import EmailIcon from '../icons/email-icon'
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className="bg-dark rounded-full w-full sm:w-[unset]">
            <nav className="flex items-center justify-center p-3 sm:justify-between sm:space-x-12">
                <ul className="flex gap-8">
                    <li><Link href="/" className="font-medium transition-colors text-purple hover:text-white">RR</Link></li>
                    <li><Link href="/profile" className="font-medium transition-colors text-purple hover:text-white">profile</Link></li>
                    <li><Link href="/portfolio" className="font-medium transition-colors text-purple hover:text-white">portfolio</Link></li>
                </ul>
                    {/* socials */}
                <ul className="hidden space-x-6 sm:flex">
                    <li>
                        <a href="https://www.linkedin.com/in/rr-david/" target="_blank">
                            <LinkedInIcon className="transition-colors text-purple hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/RRdav" target="_blank">
                            <GithubIcon className="transition-colors text-purple hover:text-white"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:raphaelruizd@gmail.com">
                            <EmailIcon className="transition-colors text-purple hover:text-white"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}