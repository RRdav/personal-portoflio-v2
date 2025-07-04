import GithubIcon from '../icons/github-mark-white'
import LinkedInIcon from '../icons/linkedin-icon'
import EmailIcon from '../icons/email-icon'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row items-center justify-between w-full  text-white pt-5 container">
                <h3 className="text-gray text-sm mb-5 sm:mb-0">Raphael David</h3>
                <ul className="flex space-x-6">
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