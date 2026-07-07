import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "SQL"]
  },
  {
    category: "Frontend",
    items: ["React"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    category: "Cloud",
    items: ["Vercel", "Render", "REST APIs"]
  }
];

function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 py-28">

      <div className="text-center">

        <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
          Skills
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Technologies I Work With
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {skills.map((skill, index) => (

          <motion.div

            key={index}

            whileHover={{
              y: -10,
              scale: 1.02
            }}

            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"

          >

            <h3 className="text-2xl font-bold text-blue-400 mb-6">

              {skill.category}

            </h3>

            <div className="flex flex-wrap gap-3">

              {skill.items.map((item) => (

                <span

                  key={item}

                  className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full"

                >

                  {item}

                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;