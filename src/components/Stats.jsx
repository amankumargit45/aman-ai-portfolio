import { Trophy, FolderGit2, Briefcase, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FolderGit2 size={30} />,
    number: "20+",
    title: "Projects Built",
  },
  {
    icon: <Trophy size={30} />,
    number: "782",
    title: "TCS CodeVita Rank",
  },
  {
    icon: <Briefcase size={30} />,
    number: "2+",
    title: "Years of Learning",
  },
  {
    icon: <Cpu size={30} />,
    number: "AI",
    title: "Automation & Full Stack",
  },
];

function Stats() {
  return (
    <section className="relative py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{
                duration: 0.3,
              }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 text-center hover:border-blue-500 duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-6">

                {item.icon}

              </div>

              <h2 className="text-5xl font-black text-blue-400">

                {item.number}

              </h2>

              <p className="text-slate-400 mt-4">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;