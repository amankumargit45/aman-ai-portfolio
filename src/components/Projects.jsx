import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#020617]"></div>

      <div className="absolute w-[700px] h-[700px] bg-blue-600/10 blur-[220px] rounded-full -top-60 -left-60"></div>

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block px-5 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium">

            MY PROJECTS

          </span>

          <h2 className="text-5xl lg:text-6xl font-black mt-8">

            Featured

            <span className="text-blue-500">

              {" "}Projects

            </span>

          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-8 text-lg leading-9">

            Here are some of my favorite projects built
            using  Full Stack Development and
            Modern Web Technologies.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects; 