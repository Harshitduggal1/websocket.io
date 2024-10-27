import { Logo, MenuIcon } from "@/assets";

import Link from "next/link";

const navItems = [
  { href: "/blogs", title: "Blogs" },
  { href: "/contact", title: "Contact Us" },
  { href: "/pricing", title: "Pricing" },
  { href: "/features", title: "Features" },
  { href: "/about", title: "About Us" },
  { href: "/support", title: "Support" },
];

export const Header = () => {
  return (
    <header className="top-0 z-50 sticky bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-900 py-4">
      <div className="-z-10 absolute inset-0 bg-black bg-opacity-30 backdrop-blur-xl"></div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <div className="relative flex justify-between items-center border-white/20 bg-gradient-to-br from-indigo-600/30 to-fuchsia-600/30 shadow-2xl backdrop-blur-lg p-3 border rounded-3xl">
          <div className="flex items-center space-x-4">
            <div className="inline-flex justify-center items-center bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-600 hover:to-purple-700 rounded-full w-12 h-12 transform transition-all duration-300 hover:scale-110">
              <Logo className="w-8 h-8 text-white" />
            </div>
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold text-2xl text-transparent">websocket.dev</span>
          </div>
          <div className="md:block hidden">
            <nav className="flex gap-8">
              {navItems.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 font-semibold text-lg text-white/80 hover:text-white hover:text-transparent transition-all duration-300 hover:scale-110"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/harshitduggal1"
              className="relative shadow-lg hover:shadow-xl px-6 py-3 rounded-full font-bold text-lg transform transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-indigo-300 relative z-10 bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent transition-all duration-300">
 JOIN US ✨

              </span>
            </Link>
            <MenuIcon className="md:hidden w-8 h-8 text-white hover:text-purple-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </header>
  );
};
//add more from here