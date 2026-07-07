import streamify from "../assets/projects/streamify.png";
import incident from "../assets/projects/incident-analyzer.png";
import anpr from "../assets/projects/anpr.png";

const projects = [
 

  {
    id: 2,
    image: streamify,
    title: "Streamify",
    description:
      "Modern chat and video calling application with authentication, real-time messaging and responsive UI.",
    tech: ["React", "Node", "MongoDB", "Socket.io"],
    github: "https://github.com/amankumargit45/Streamify",
    live: "https://streamify-m2bm.onrender.com/",
    featured: true,
  },


   {
    id: 1,
    image: incident,
    title: "Flipcom",
    description:
      "Developed a responsive e-commerce frontend with product browsing, shopping cart management, and an intuitive user interface. Implemented dynamic client-side functionality using JavaScript for cart updates, quantity management, and real-time toast notifications. Deployed the application on Render for seamless access.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/amankumargit45/Flipcom",
    live: "https://flipcom-2.onrender.com/",
    featured: true,
  }
];

export default projects;