import { motion } from "framer-motion";
import { useState } from "react";
import profilePic from "../assets/passport size.png";

export default function Hero() {
  const [clicked, setClicked] = useState(false);

  const handleHireClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <section 
  id="home" 
  // Change 1: Use items-start on mobile to pull content up, items-center on desktop
  className="min-h-screen flex items-start md:items-center px-6 md:px-16 
             /* Change 2: Reduced mobile padding to pt-24 */
             pt-24 md:pt-32
             bg-[#f8f8f8] dark:bg-[#0f0f0f]
             text-black dark:text-white
             transition-colors duration-500 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center w-full">
    
    {/* RIGHT SIDE (Profile Image) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      // Change 3: Ensure the container doesn't have extra margin pushing it down
      className="relative flex justify-center items-center order-1 md:order-2 mt-4 md:mt-0"
    >
      <div className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] bg-gray-200 dark:bg-zinc-800 rounded-full -z-10"></div>
      
      <img
        id="profile-pic"
        src="./public/passport size.png"
        alt="Siddhraj"
        className="w-60 h-60 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]
                   rounded-full object-cover object-top 
                   /* Change 4: Remove the negative margin for mobile, keep for desktop */
                   mt-0 md:-mt-24 
                   drop-shadow-2xl transition hover:scale-105"
      />
    </motion.div>

    {/* LEFT SIDE (Text) */}
    {/* ... rest of your text side code ... */}
        {/* TEXT SIDE (Bottom on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I Build Fast & Scalable <br className="hidden lg:block" />
            Web Applications <br className="hidden lg:block" />
            For Growing Businesses.
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            MERN Stack Developer helping startups and companies
            build modern, scalable web platforms.
          </p>

          {/* Fixed: flex-col for mobile prevents buttons from overlapping/cramming */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition text-center min-w-[160px]"
            >
              View My Work
            </a>

            <button
              onClick={handleHireClick}
              className={`relative px-8 py-3 rounded-full border border-black dark:border-white transition duration-300 min-w-[160px]
                ${clicked ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"}`}
            >
              Hire Me
              <span className={`absolute inset-0 rounded-full -z-10 transition-all duration-500 ${clicked ? "shadow-[0_0_40px_rgba(0,0,0,0.3)]" : ""}`}></span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}