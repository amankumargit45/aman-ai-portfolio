import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#020617]"></div>

      <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[220px] rounded-full -top-52 -left-52"></div>

      <div className="absolute w-[550px] h-[550px] bg-cyan-500/10 blur-[180px] rounded-full bottom-0 right-0"></div>

      <div className="absolute w-[350px] h-[350px] bg-violet-500/10 blur-[140px] rounded-full top-1/2 left-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-5 py-2 mb-8">

            <Sparkles
              size={18}
              className="text-blue-400"
            />

            <span className="text-blue-300">
              WELCOME TO MY PORTFOLIO
            </span>

          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">

            Aman

            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">

              Gupta

            </span>

          </h1>

          <div className="mt-8 text-3xl font-semibold text-white">

            <TypeAnimation
              sequence={[
                "AI Engineer",
                1800,
                "Full Stack Developer",
                1800,
                "Automation Specialist",
                1800,
                "Problem Solver",
                1800,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 max-w-xl text-lg text-slate-400 leading-9">

            I build AI-powered software,
            automation systems and scalable web
            applications that help businesses
            reduce costs, improve productivity
            and automate repetitive work.

          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            <span className="px-5 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300">

              🚀 Available for Freelance

            </span>

            <span className="px-5 py-2 rounded-full bg-green-600/20 border border-green-500/30 text-green-300">

              🔥 Open To Work

            </span>

          </div>
                    <div className="flex flex-wrap gap-5 mt-12">

           <a
  href="#contact"
  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold duration-300"
>
  Hire Me
</a>
            <a
              href="#projects"
              className="border border-white/20 hover:border-blue-500 hover:bg-white/5 px-8 py-4 rounded-2xl duration-300"
            >
              View Projects
            </a>

            <a
  href="/resume.pdf"
  download
  className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl duration-300 flex items-center gap-3"
>
  Resume
</a>

          </div>

          {/* Social Icons */}
<div className="flex items-center gap-6 mt-14">

  <a
    href="https://github.com/amankumargit45"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 duration-300"
  >
    <Github size={24} />
  </a>

  <a
    href="https://www.linkedin.com/in/aman-kumar-gupta-0494782aa/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 duration-300"
  >
    <Linkedin size={24} />
  </a>

  <a
    href="mailto:amankumargupta899@gmail.com"
    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 duration-300"
  >
    <Mail size={24} />
  </a>

</div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-600 blur-[180px] opacity-50"></div>

            <div className="absolute -inset-3 rounded-full border border-blue-500/20 animate-pulse"></div>

            <img
              src={profile}
              alt="Aman Gupta"
              className="relative w-[340px] h-[340px] lg:w-[430px] lg:h-[430px] rounded-full object-cover border-[5px] border-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.4)]"
            />

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4">

                <h3 className="font-bold text-center text-lg">

                  20+ Projects Built

                </h3>

                <p className="text-sm text-slate-300 text-center mt-1">

                  AI • Full Stack • Automation

                </p>

              </div>

            </div>
                 {/* Floating Card */}

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="hidden lg:flex absolute -left-16 top-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 items-center gap-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl">
                🤖
              </div>

              <div>
                <h4 className="font-semibold">
                  AI Solutions
                </h4>

                <p className="text-sm text-slate-400">
                  Automation Expert
                </p>
              </div>
            </motion.div>

            {/* Floating Card */}

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [8, -8, 8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="hidden lg:flex absolute -right-14 bottom-20 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 items-center gap-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center text-xl">
                ⚡
              </div>

              <div>
                <h4 className="font-semibold">
                  Fast Delivery
                </h4>

                <p className="text-sm text-slate-400">
                  Clean & Scalable Code
                </p>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Down Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 2,
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <div className="w-8 h-14 border-2 border-slate-500 rounded-full flex justify-center">

          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;       