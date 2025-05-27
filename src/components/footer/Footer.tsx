import GithubIcon from '../icons/github-mark-white'
import LinkedInIcon from '../icons/linkedin-icon'
import EmailIcon from '../icons/email-icon'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex items-center justify-between w-full p-4 text-white bg-gray-800">
                <ul className="hidden space-x-6 sm:flex">
                    <li>
                        <Link href="https://www.linkedin.com/in/rr-david/" target="_blank">
                            <LinkedInIcon className="transition-colors text-purple hover:text-white"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/RRdav" target="_blank">
                            <GithubIcon className="transition-colors text-purple hover:text-white"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:raphaelruizd@gmail.com">
                            <EmailIcon className="transition-colors text-purple hover:text-white"/>
                        </Link>
                    </li>
                </ul>
        </footer>
    );
}