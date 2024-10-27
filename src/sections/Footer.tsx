import { Logo, SocialX, SocialInstagram, SocialYoutube } from "@/assets";
import Link from "next/link";

const navItems = [
  { href: "/blogs", title: "Blogs" },
  { href: "/contact", title: "Contact Us" },
  { href: "/pricing", title: "Pricing" },
  { href: "/features", title: "Features" },
  { href: "/about", title: "About Us" },
  { href: "/support", title: "Support" },
];

export const Footer = () => {
  return (
    <footer className="border-white/20 bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-900 py-8 border-t">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex lg:flex-1 items-center gap-3 transform hover:scale-105 transition-all duration-300">
            <Logo className="w-8 h-8 animate-pulse" />
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold text-lg text-transparent">websocket.dev</span>
          </div>
          <nav className="flex lg:flex-row flex-col lg:flex-1 lg:justify-center gap-6 lg:gap-10">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 font-medium text-sm text-white/80 md:text-base hover:text-white hover:text-transparent transition-all duration-300 hover:scale-110"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex lg:flex-1 lg:justify-end gap-8">
            <SocialX className="text-white/60 hover:text-white transform transition-all duration-300 hover:scale-125 hover:rotate-12" />
            <SocialInstagram className="text-white/60 hover:text-white transform transition-all duration-300 hover:scale-125 hover:-rotate-12" />
            <SocialYoutube className="text-white/60 hover:text-white transform transition-all duration-300 hover:scale-125 hover:rotate-6" />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="https://github.com/harshitduggal1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-indigo-500/50 p-[2px] rounded-full transition-all duration-300 overflow-hidden ease-in-out group"
          >
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_2s_linear_infinite]" />
            <span className="group-hover:bg-slate-950/70 inline-flex justify-center items-center bg-slate-950/90 backdrop-blur-3xl px-4 py-2 rounded-full w-full h-full font-medium text-sm text-white transition-all duration-300 cursor-pointer">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Fork on GitHub
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
//add more from here