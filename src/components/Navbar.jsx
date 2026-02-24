
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 flex justify-between px-10 py-5 shadow-sm ">
      {/* <h1 className="text-xl font-bold tracking-wide cursor-pointer transition duration-300 hover:text-black hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
       Lift Logic Media 
      </h1> */}
     <h1 className="relative flex flex-col leading-tight cursor-pointer select-none group">

  <span className="text-xl font-bold tracking-wide transition duration-300
                   group-hover:tracking-wider">
    Lift <span className="font-light">Logic</span>
  </span>

  <span className="text-[10px] tracking-[0.35em] uppercase
                   text-gray-500 dark:text-gray-400
                   transition duration-300">
    Media
  </span>

  {/* Subtle underline accent */}
  <span className="absolute -bottom-1 left-0 w-8 h-[2px]
                   bg-black dark:bg-white
                   transition-all duration-300
                   group-hover:w-14">
  </span>

</h1>
      {/* <h1 className="font-bold text-xl">Dip Khatik</h1> */}

      <div className="space-x-8 text-sm font-medium">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition duration-300 hover:text-black 
              ${active === item.id
                ? "text-black border-b-2 border-black pb-1"
                : "text-gray-500"}`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

