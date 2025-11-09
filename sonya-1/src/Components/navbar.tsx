import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 700px)");
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
    <>
      {isMobile ? (
        <div className="w-full flex justify-center">
          <motion.div
            className="flex justify-between p-2 h-[10vh] min-h-[75px] fixed z-100"
            animate={{
              width: isScrolled ? "100%" : "80%",
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
            <button
              className="pt-[6px]"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              {isScrolled ? <img src="/3bar.svg" className="" /> : ""}
            </button>
            <dialog id="my_modal_2" className="modal modal-bottom">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div className="w-[60%] h-full flex justify-center items-center">
              <Link
                to="/"
                className="font-light text-xl text-white [&.active]:text-white cursor-pointer"
              >
                Lok's Treats
              </Link>
            </div>
            <div className=" h-full flex justify-center items-center">
              <Link
                to="/"
                className="font-light text-lg text-white hover:scale-105 transition-transform cursor-pointer"
              >
                {isScrolled ? <img src="/cart.svg" className="pr-[2px]" /> : ""}
              </Link>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <motion.div
            className="flex justify-between p-2 h-[10vh] min-h-[75px] fixed z-100"
            animate={{
              width: isScrolled ? "100%" : "60%",
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
            <div className="drawer w-[15%] h-full flex justify-center items-center">
              <div className="drawer">
                <input
                  id="my-drawer-1"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer-1"
                    className="flex justify-center items-center"
                  >
                    <p className="font-light text-xl text-white hover:scale-105 transition-transform cursor-pointer">
                      {isScrolled ? "Menu" : ""}
                    </p>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-1"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-[#d4a373]/95 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                      <a>Sidebar Item 1</a>
                    </li>
                    <li>
                      <a>Sidebar Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[15%] min-w-[150px] h-full flex justify-center items-center">
              <Link
                to="/"
                className="font-light text-2xl text-white [&.active]:text-white cursor-pointer"
              >
                Lok's Treats
              </Link>
            </div>
            <div className="w-[15%] h-full flex justify-center items-center">
              <Link
                to="/"
                className="font-light text-xl text-white hover:scale-105 transition-transform cursor-pointer"
              >
                {isScrolled ? "Order Now" : ""}
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
