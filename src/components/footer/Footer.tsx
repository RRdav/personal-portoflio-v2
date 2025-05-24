
export default function Footer() {
    return (
        <footer className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
            <div className="text-sm">
                &copy; {new Date().getFullYear()} RR Dabed. All rights reserved.
            </div>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-500">Privacy Policy</a>
                <a href="#" className="hover:text-purple-500">Terms of Service</a>
                <a href="#" className="hover:text-purple-500">Contact</a>
            </div>
        </footer>
    );
}