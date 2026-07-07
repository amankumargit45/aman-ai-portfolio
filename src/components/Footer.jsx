import { Github, Linkedin, Mail, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-black">

              Aman

              <span className="text-blue-500">.</span>

            </h2>

            <p className="text-slate-400 mt-4 max-w-md leading-8">

              • Full Stack Developer • Software Developer

            </p>

          </div>

          {/* Navigation */}

          <div className="flex flex-wrap gap-8 text-slate-400">

            <a
              href="#home"
              className="hover:text-blue-500 duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-blue-500 duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-blue-500 duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-blue-500 duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-blue-500 duration-300"
            >
              Contact
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-5">

            <a
              href="https://github.com/amankumargit45"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 duration-300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-kumar-gupta-0494782aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 duration-300"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:amankumargupta899@gmail.com"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 duration-300"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500">

          <p className="flex items-center justify-center gap-2">

            Made with

            <Heart
              size={18}
              className="text-red-500 fill-red-500"
            />

            by Aman Gupta © 2026

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;