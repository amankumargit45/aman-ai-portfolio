import { Trophy, Medal, Award } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <Trophy size={30} />,
    title: "Global Rank 782",
    subtitle: "TCS CodeVita Season 13"
  },
  {
    icon: <Award size={30} />,
    title: "National Semifinalist",
    subtitle: "Flipkart Grid 7.0"
  },
  {
    icon: <Medal size={30} />,
    title: "DRDO Internship",
    subtitle: "SSPL, Delhi"
  }
];

function Achievements() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">

      <div className="text-center">

        <p className="text-blue-500 uppercase tracking-[5px]">
          Achievements
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Milestones
        </h2>

      </div>

      <div className="mt-20 grid lg:grid-cols-3 gap-8">

        {achievements.map((item,index)=>(

          <motion.div

          whileHover={{y:-10}}

          key={index}

          className="bg-white/5 rounded-3xl p-8 border border-white/10"

          >

          <div className="text-blue-500 mb-6">

          {item.icon}

          </div>

          <h3 className="text-2xl font-bold">

          {item.title}

          </h3>

          <p className="text-gray-400 mt-3">

          {item.subtitle}

          </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default Achievements;