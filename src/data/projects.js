import streamify from "../assets/projects/streamify.png";
import incident from "../assets/projects/incident-analyzer.png";
import anpr from "../assets/projects/anpr.png";

const projects = [
  {
    id: 1,
    image: incident,
    title: "AI Incident Analyzer",
    description:
      "AI-powered incident analysis platform that categorizes incidents, generates intelligent summaries and helps businesses respond faster.",
    tech: ["React", "FastAPI", "Python", "OpenAI"],
    github: "https://github.com/amankumargit45/AI_INCIDENT_ANALYZER",
    live: "",
    featured: true,
  },

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
    id: 3,
    image: anpr,
    title: "ANPR System",
    description:
      "Automatic Number Plate Recognition using YOLOv8, OpenCV and OCR with real-time vehicle detection.",
    tech: ["YOLOv8", "OpenCV", "Python", "EasyOCR"],
    github: "https://github.com/amankumargit45/anpr_project",
    live: "",
    featured: true,
  },
];

export default projects;