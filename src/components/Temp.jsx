import { motion } from "framer-motion";
// import aboutImage from "../assets/about.jpg";

export default function Temp() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-16
                 bg-[#f8f8f8] dark:bg-[#0f0f0f]
                 text-black dark:text-white
                 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Building Technology That Drives Business Growth
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We design and develop scalable digital solutions that help businesses
            operate efficiently, improve performance, and grow confidently.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="group relative"
    >
    <div className="overflow-hidden rounded-xl shadow-md
                    transition duration-500
                    group-hover:shadow-2xl">

        <img
<<<<<<< HEAD
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
=======
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
        alt="Business Technology"
        className="w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/0
                        group-hover:bg-black/5
                        transition duration-500" />
    </div>
    </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Who We Are
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We are a software development team focused on building reliable,
              scalable, and high-performance web applications using modern
              technologies.
            </p>

            <h3 className="text-2xl font-semibold">
              What We Do
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              From custom web platforms to SaaS systems, we create digital
              products that align with your business goals and future growth.
            </p>

            <h3 className="text-2xl font-semibold">
              Our Commitment
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We prioritize clean architecture, performance optimization, and
              long-term scalability — ensuring your technology supports your
              business vision.
            </p>

          </motion.div>

        </div>

        {/* Trust Points */}
       <div className="grid md:grid-cols-3 gap-8 mt-20">

  {[
    {
      title: "Scalable Solutions",
      desc: "Built for long-term growth and adaptability."
    },
    {
      title: "Business-First Approach",
      desc: "Technology aligned with measurable results."
    },
    {
      title: "Long-Term Partnership",
      desc: "Ongoing support and product evolution."
    }
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative p-8 rounded-xl
                 bg-white dark:bg-[#111111]
                 border border-gray-200 dark:border-gray-800
                 overflow-hidden
                 transition-all duration-300
                 hover:shadow-xl
                 hover:border-black dark:hover:border-white"
    >

      {/* Glossy hover shine */}
      <div className="absolute inset-0 opacity-0
                      group-hover:opacity-100
                      transition duration-500
                      bg-gradient-to-tr
                      from-transparent via-white/10 to-transparent
                      pointer-events-none" />

      <h4 className="text-xl font-semibold mb-3 relative z-10">
        {item.title}
      </h4>

      <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
        {item.desc}
      </p>

      {/* Small bottom accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0
                      bg-black dark:bg-white
                      transition-all duration-300
                      group-hover:w-full" />

    </motion.div>
  ))}

</div>

      </div>
    </section>
  );
}