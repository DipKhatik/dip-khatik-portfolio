import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* LOGO */}
        <h1 className="relative flex flex-col leading-tight cursor-pointer select-none group">
          <span className="text-lg md:text-xl font-bold tracking-wide transition duration-300 group-hover:tracking-wider">
            Lift <span className="font-light">Logic</span>
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-gray-500 transition duration-300">
            Media
          </span>
          <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-black transition-all duration-300 group-hover:w-14"></span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition duration-300 hover:text-black hover:scale-105 ${
                active === item.id ? "text-black border-b-2 border-black pb-1" : "text-gray-500"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-black transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col items-center py-6 space-y-4 md:hidden shadow-xl overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  active === item.id ? "text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}