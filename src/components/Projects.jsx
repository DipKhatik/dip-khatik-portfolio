import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Enterprise CRM System",
      desc: "Scalable customer relationship management platform designed for growing businesses.",
      link: "https://example.com"
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-featured e-commerce solution with secure payments and admin dashboard.",
      link: "https://example.com"
    },
    {
      title: "Business Analytics Dashboard",
      desc: "Real-time analytics dashboard with performance monitoring and reporting tools.",
      link: "https://example.com"
    },
    {
      title: "SaaS Web Application",
      desc: "Subscription-based SaaS platform with authentication and scalable backend.",
      link: "https://example.com"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16
                 bg-[#f8f8f8] dark:bg-[#0f0f0f]
                 text-black dark:text-white
                 transition-colors duration-500"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.open(project.link, "_blank")}
              className="group cursor-pointer p-8 rounded-2xl
                         bg-white dark:bg-[#111111]
                         border border-gray-200 dark:border-gray-800
                         transition-all duration-300
                         hover:border-black dark:hover:border-white
                         hover:shadow-xl"
            >

              <h3 className="text-2xl font-semibold mb-4
                             transition-colors duration-300
                             group-hover:text-black
                             dark:group-hover:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex justify-between items-center text-sm font-medium">

                <span className="opacity-70 group-hover:opacity-100 transition">
                  View Live Project
                </span>

                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
 }

