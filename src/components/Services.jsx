import { Bot, Code2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Bot size={42} />,
    title: "Web Development",
    description:
      "Build scalable software solutions and modern web applications with clean architecture, responsive design, and high-performance backend systems."
  },
  {
    icon: <Code2 size={42} />,
    title: "Full Stack Development",
    description:
      "Build modern, responsive and scalable web applications using React, Node.js and modern technologies."
  },
  
];

function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-blue-500 font-semibold tracking-widest uppercase">
          Services
        </p>

        <h2 className="text-5xl font-bold mt-4">
          What I Can Build For You
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
         I build scalable software solutions and modern web applications that deliver seamless user experiences, improve performance, and solve real-world problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {services.map((service, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -12,
              scale: 1.03
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-blue-500 duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-500 mb-8">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {service.title}
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              {service.description}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Services;