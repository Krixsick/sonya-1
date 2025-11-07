import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // console.log(scrollPosition);
      setIsScrolled(scrollPosition > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full flex justify-center">
      <motion.div
        className="flex justify-between p-2 h-[10vh] min-h-[75px] fixed z-100"
        animate={{
          width: isScrolled ? "100%" : "70%",
          backgroundColor: isScrolled
            ? "rgba(212, 163, 115, 0.95)"
            : "rgba(255, 255, 255, 0.1)",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(5px)",
          borderRadius: isScrolled ? "0px" : "50px",
          marginTop: isScrolled ? "0px" : "16px",
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <div className="w-[12%] min-w-[100px] h-full flex justify-center items-center">
          <Link
            to="/w"
            className="font-light text-lg text-white hover:scale-105 transition-transform cursor-pointer"
          >
            Menu
          </Link>
        </div>
        <div className="w-[15%] min-w-[150px] h-full flex justify-center items-center">
          <Link
            to="/"
            className="font-light text-2xl text-white [&.active]:text-white cursor-pointer"
          >
            Lok's Treats
          </Link>
        </div>
        <div className="w-[15%] min-w-[150px] h-full flex justify-center items-center">
          <Link
            to="/w"
            className="font-light text-lg text-white hover:scale-105 transition-transform cursor-pointer"
          >
            Order Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
