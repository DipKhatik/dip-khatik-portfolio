import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {

  const [status, setStatus] = useState(null); // success | error
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form,
      import.meta.env.VITE_PUBLIC_KEY
    )
    // auto reply email code
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_AUTO_TEMPLATE_ID,
      form,
      import.meta.env.VITE_PUBLIC_KEY
    )
    

    .then(() => {
      setLoading(false);
      setStatus("success");
      form.reset();
    })
    .catch(() => {
      setLoading(false);
      setStatus("error");
    });
  };



  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16
                 bg-[#f8f8f8] dark:bg-[#0f0f0f]
                 text-black dark:text-white
                 transition-colors duration-500"
    >

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          Let’s Build Something Great Together
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Share your idea with us and we’ll get back within 24 hours.
        </p>
      </div>

      <form
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-6"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-xl border
                     bg-white dark:bg-[#111]
                     border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-black dark:focus:ring-white
                     outline-none transition"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-xl border
                     bg-white dark:bg-[#111]
                     border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-black dark:focus:ring-white
                     outline-none transition"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows="5"
          required
          className="w-full p-4 rounded-xl border
                     bg-white dark:bg-[#111]
                     border-gray-300 dark:border-gray-700
                     focus:ring-2 focus:ring-black dark:focus:ring-white
                     outline-none transition"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`relative w-full py-4 rounded-full font-medium
                       transition-all duration-300
                       ${loading
                         ? "bg-gray-400 cursor-not-allowed"
                         : "bg-black dark:bg-white text-white dark:text-black hover:scale-[1.02]"
                       }`}
          >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* SUCCESS MESSAGE */}
       {/* Success & Error Messages */}
         <AnimatePresence mode="wait">
    {status && (
      <motion.div
      key="status-message"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="mt-8 relative overflow-hidden
                 rounded-xl p-4 text-sm
                 bg-green-100 text-green-700
                 dark:bg-green-900/20 dark:text-green-400"
    >
      {/* Progress bar animation */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 4, ease: "linear" }}
        className="absolute bottom-0 left-0 h-[3px]
                   bg-green-500 dark:bg-green-400"
      />

      Message sent successfully. We’ll get back to you shortly.
    </motion.div>
  )}
</AnimatePresence> 
      </form>
    </section>
  );
}
