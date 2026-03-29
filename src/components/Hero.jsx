// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center px-10 pt-32 ">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             I Build Fast & Scalable <br /> Web Applications <br /> For Growing Businesses.
//           </h1>
//           <p className="mt-6 text-gray-600 text-lg">
//             MERN Stack Developer helping startups build modern web platforms.
//           </p>
//           <div className="mt-8 space-x-4">
//             <a href="#projects" className="px-6 py-3 bg-black text-white rounded-full">View My Work</a>
//             <a href="#contact" className="px-6 py-3 border rounded-full">Hire Me</a>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center">
//           <div className="w-80 h-80 bg-gray-200 rounded-full"></div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
<<<<<<< HEAD
=======
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Hero() {

//   const [clicked, setClicked] = useState(false);

//   const handleHireClick = () => {
//     setClicked(true);

//     setTimeout(() => {
//       setClicked(false);
//       document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
//     }, 600);
//   };

//   return (
// //min-h-screen flex items-center px-6 md:px-16 pt-32 bg-[#f8f8f8] overflow-hidden"
//     <section id="home" className="min-h-screen flex items-center px-6 md:px-16 pt-32
//              bg-[#f8f8f8] dark:bg-[#0f0f0f]
//              text-black dark:text-white
//              transition-colors duration-500">

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             I Build Fast & Scalable <br />
//             Web Applications <br />
//             For Growing Businesses.
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg">
//             MERN Stack Developer helping startups and companies
//             build modern, scalable web platforms.
//           </p>

//           <div className="mt-8 space-x-4">
//             <a
//               href="#projects"
//               className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
//             >
//               View My Work
//             </a>

//             <button
//               onClick={handleHireClick}
//               className={`relative px-6 py-3 rounded-full border border-black transition duration-300
//                 ${clicked ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}
//             >
//               Hire Me

//               {/* Shadow Animation */}
//               <span
//                 className={`absolute inset-0 rounded-full -z-10 transition-all duration-500
//                   ${clicked ? "shadow-[0_0_60px_rgba(0,0,0,0.4)]" : ""}`}
//               ></span>
//             </button>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative flex justify-center"
//         >
//           {/* Background Circle */}
//           <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gray-200 rounded-full -z-10"></div>
//           {/* Image */}
//           <img
//             id="profile-pic"
//             src="./public/passport size.png"
//             alt="Dip Khatik"
//             className="w-80 h-80 md:w-96 md:h-96 
//              rounded-full object-cover 
//              /* Focus on the top of the photo */
//              object-top 
//              /* Move the image up by 100px */
//              -mt-[100px] 
//              drop-shadow-2xl transition hover:scale-105"
//              />
//         </motion.div>

//       </div>
//     </section>
//   );
// }
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
<<<<<<< HEAD

=======
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
  const [clicked, setClicked] = useState(false);

  const handleHireClick = () => {
    setClicked(true);
<<<<<<< HEAD

=======
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
    setTimeout(() => {
      setClicked(false);
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
<<<<<<< HEAD
//min-h-screen flex items-center px-6 md:px-16 pt-32 bg-[#f8f8f8] overflow-hidden"
    <section id="home" className="min-h-screen flex items-center px-6 md:px-16 pt-32
             bg-[#f8f8f8] dark:bg-[#0f0f0f]
             text-black dark:text-white
             transition-colors duration-500">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
=======
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
        {/* TEXT SIDE (Bottom on mobile) */}
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I Build Fast & Scalable <br />
            Web Applications <br />
            For Growing Businesses.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
=======
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I Build Fast & Scalable <br className="hidden lg:block" />
            Web Applications <br className="hidden lg:block" />
            For Growing Businesses.
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-lg mx-auto md:mx-0">
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
            MERN Stack Developer helping startups and companies
            build modern, scalable web platforms.
          </p>

<<<<<<< HEAD
          <div className="mt-8 space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
=======
          {/* Fixed: flex-col for mobile prevents buttons from overlapping/cramming */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition text-center min-w-[160px]"
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
            >
              View My Work
            </a>

            <button
              onClick={handleHireClick}
<<<<<<< HEAD
              className={`relative px-6 py-3 rounded-full border border-black transition duration-300
                ${clicked ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}
            >
              Hire Me

              {/* Shadow Animation */}
              <span
                className={`absolute inset-0 rounded-full -z-10 transition-all duration-500
                  ${clicked ? "shadow-[0_0_60px_rgba(0,0,0,0.4)]" : ""}`}
              ></span>
=======
              className={`relative px-8 py-3 rounded-full border border-black dark:border-white transition duration-300 min-w-[160px]
                ${clicked ? "bg-black text-white dark:bg-white dark:text-black" : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"}`}
            >
              Hire Me
              <span className={`absolute inset-0 rounded-full -z-10 transition-all duration-500 ${clicked ? "shadow-[0_0_40px_rgba(0,0,0,0.3)]" : ""}`}></span>
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
            </button>
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Background Circle */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gray-200 rounded-full -z-10"></div>
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Siddhraj - MERN Developer"
            className="w-72 md:w-96 object-cover drop-shadow-2xl transition hover:scale-105"
          />
          
        </motion.div>

=======
>>>>>>> 7ab06a9 (Finalizing responsive Navbar and Hero)
      </div>
    </section>
  );
}