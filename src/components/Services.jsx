import { motion } from "framer-motion";

export default function Services() {

  const services = [
    {
      title: "Custom Web Application Development",
      desc: "Tailored web solutions designed to meet your business objectives and scale with growth."
    },
    {
      title: "Full-Stack Development",
      desc: "Modern frontend interfaces combined with secure and optimized backend architecture."
    },
    {
      title: "Business System Automation",
      desc: "Streamlining operations through intelligent system design and process automation."
    },
    {
      title: "SaaS Product Development",
      desc: "End-to-end SaaS platforms with subscription models and scalable infrastructure."
    },
    {
      title: "API & Backend Engineering",
      desc: "Secure REST APIs and database architecture built for performance and reliability."
    },
    {
      title: "Performance Optimization",
      desc: "Improving application speed, scalability, and long-term maintainability."
    }
  ];

  return (
    <section
    id="services"
    className="py-24 px-6 md:px-16
             bg-[#f8f8f8] dark:bg-[#0f0f0f]
             text-black dark:text-white
             transition-colors duration-500"

    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering scalable digital solutions that empower businesses to grow confidently.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 rounded-xl
                         border border-gray-200 dark:border-gray-800
                         bg-[#f9f9f9] dark:bg-[#111111]
                         hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              {/* Subtle Glossy Effect */}
              <div className="absolute inset-0 opacity-0
                              group-hover:opacity-100
                              transition duration-500
                              bg-gradient-to-tr
                              from-transparent via-white/10 to-transparent
                              pointer-events-none" />

              <h3 className="text-lg font-semibold mb-4 relative z-10">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}