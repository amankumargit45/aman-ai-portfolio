import { Github, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500 duration-300"
    >
      {/* Image */}

      <div className="relative overflow-hidden h-60">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

        {project.featured && (
          <div className="absolute top-4 left-4">

            <span className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">

              <Star size={15} />

              Featured

            </span>

          </div>
        )}

      </div>

      {/* Content */}

      <div className="p-8">

        <h2 className="text-3xl font-bold">

          {project.title}

        </h2>

        <p className="mt-5 text-slate-400 leading-8">

          {project.description}

        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mt-8">

          {project.tech.map((item) => (

            <span
              key={item}
              className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm border border-blue-500/20"
            >

              {item}

            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.live ? "flex-1" : "w-full"} flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-xl py-3 font-semibold duration-300`}
          >

            <Github size={18} />

            GitHub

          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-white/20 hover:border-blue-500 rounded-xl py-3 duration-300"
            >

              <ExternalLink size={18} />

              Live Demo

            </a>
          )}

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;