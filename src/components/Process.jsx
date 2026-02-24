import { motion } from "framer-motion";

export default function Process() {

  const steps = [
    {
      title: "1. Understanding Your Requirements",
      desc: "I start by understanding your business goals, challenges, and expectations. Clear communication is my first priority."
    },
    {
      title: "2. Planning & Designing the Solution",
      desc: "I create a structured plan and design a clean, scalable solution tailored to your needs."
    },
    {
      title: "3. Development & Testing",
      desc: "I build the application using modern technologies while ensuring performance, security, and reliability."
    },
    {
      title: "4. Delivery & Ongoing Support",
      desc: "After deployment, I provide support, improvements, and guidance to ensure long-term success."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16">
        How I Work
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-8 bg-[#f8f8f8] rounded-2xl shadow hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}