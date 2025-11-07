import { motion } from "framer-motion";

export function SectionThree() {
  return (
    <>
      {/* Card */}
      <div className="w-full h-[100vh] bg-[var(--ref-primary-40)] p-2 flex justify-center items-top">
        {/* Image */}
        <motion.div
          className="w-full h-[70%] flex justify-center p-2"
          whileHover={{ backgroundColor: "#fefae0" }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          {/* Content */}
          <div className="w-[50%] h-full flex flex-col justify-center items-center">
            <div className="">
              <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Dark Chocolate Cookie
              </h3>
            </div>
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A soft, fudgy cookie with tangy lemon zest, sweet raspberry
                chunks, and creamy white chocolate pieces. Baked fresh daily
                with love.
              </p>
            </div>
            {/* Buttons */}
            <div className="w-full flex justify-start gap-4 pt-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
              >
                Learn More
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
              >
                Order Now
              </motion.button>
            </div>
          </div>
          {/* Image */}
          <div className="relative w-[45%] h-full">
            <img
              src="/cookie4.svg"
              alt="Lemon Raspberry Cookie"
              className="w-full h-full -rotate-30"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
