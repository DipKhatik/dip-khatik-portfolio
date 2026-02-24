import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiPostman } from "react-icons/si";

export default function Technologies() {

  const techStack = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  return (
    <section className="py-24 px-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16">Technologies I Use</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {techStack.map((tech, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-6 bg-[#f8f8f8] rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">{tech.icon}</div>
            <p className="font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
