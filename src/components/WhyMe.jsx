import { motion } from "framer-motion";

export default function WhyChooseUs() {

  const points = [
    {
      title: "Scalable Architecture",
      desc: "We build systems designed to grow with your business — ensuring performance, stability, and long-term sustainability."
    },
    {
      title: "Business-Focused Development",
      desc: "Every solution is aligned with your business goals, not just technical requirements."
    },
    {
      title: "Performance & Reliability",
      desc: "Clean code, optimized backend systems, and secure infrastructure ensure dependable applications."
    },
    {
      title: "Long-Term Partnership",
      desc: "We don’t just deliver projects — we support, improve, and evolve your product over time."
    }
  ];

  return (
    <section
      id="why"
      className="py-24 px-6 md:px-16
                 bg-white dark:bg-[#0f0f0f]
                 text-black dark:text-white
                 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Why Businesses Trust Us
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We combine technical expertise with business understanding to deliver
            digital solutions that create measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {points.map((point, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl border
                         border-gray-200 dark:border-gray-800
                         hover:shadow-xl transition duration-300
                         bg-[#f9f9f9] dark:bg-[#111111]"
            >
              <h3 className="text-xl font-semibold mb-4
                             group-hover:text-black
                             dark:group-hover:text-white transition">
                {point.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}

        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium">
            Our goal is simple:
            <span className="font-bold">
              {" "}Build reliable technology that drives real business growth.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}