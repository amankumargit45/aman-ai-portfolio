import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-28">

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        className="text-center"
      >

        <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
          About Me
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Building Software That Solves Real Problems
        </h2>

      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 mt-20">

        {/* LEFT */}

        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
        >

          <p className="text-gray-400 leading-9 text-lg">

            I'm a Software Developer and Full Stack Web Developer passionate about building scalable software and modern web applications that solve real-world problems.

            <br/><br/>

            I enjoy creating scalable web applications using modern
            technologies.

            <br/><br/>

            My goal is to build software that saves businesses time,
            reduces manual work and delivers measurable impact.

          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="space-y-6"
        >

          <div className="bg-white/5 border border-white/10 rounded-3xl p-7 flex gap-5">

            <Briefcase className="text-blue-500"/>

            <div>

              <h3 className="font-bold text-xl">
                DRDO Internship
              </h3>

              <p className="text-gray-400 mt-2">
                Built an offline publication analytics platform for
                Defence Research and Development Organisation.
              </p>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-7 flex gap-5">

            <Trophy className="text-blue-500"/>

            <div>

              <h3 className="font-bold text-xl">
                Competitive Programming
              </h3>

              <p className="text-gray-400 mt-2">
                Global Rank 782 in TCS CodeVita and National
                Semifinalist in Flipkart Grid.
              </p>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-7 flex gap-5">

            <GraduationCap className="text-blue-500"/>

            <div>

              <h3 className="font-bold text-xl">
                Education
              </h3>

              <p className="text-gray-400 mt-2">
                B.Tech in Computer Science,
                Birla Institute of Technology Mesra.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;
