import { motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";
export function SectionTwo() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <>
      {isMobile ? (
        <>
          {/* Title */}
          <div className="w-full h-[10%] min-h-[90px] bg-[var(--ref-primary-40)] flex items-center p-2 pt-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[90%] flex flex-col"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-black mb-4">
                Flavours
              </h2>
              <p className="text-xl text-gray-600">
                Discover our signature treats
              </p>
            </motion.div>
          </div>
          {/* Card */}
          <div className="w-full h-[50vh] max-h-[700px] bg-[var(--ref-primary-40)] flex justify-center items-center ">
            {/* Image */}
            <motion.div
              className="w-full h-[70%] flex justify-center rounded-xl"
              initial={{ backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: "#fefae0" }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <div className="relative w-[60%] h-full ">
                <img
                  src={`${import.meta.env.BASE_URL}test1.svg`}
                  alt="Lemon Raspberry Cookie"
                  className="w-[90%] h-[90%] rotate-20 "
                />
              </div>
              {/* Content */}
              <div className="w-[40%] h-full flex flex-col justify-center items-center">
                <div className="">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    Lemon Raspberry White Chocolate Cookie
                  </h3>
                </div>
                {/* Buttons */}
                <div className="w-full flex justify-start gap-4 pt-4 flex-wrap"></div>
              </div>
            </motion.div>
          </div>
        </>
      ) : (
        <>
          {/* Title */}
          <div className="w-full h-[10%] min-h-[90px] bg-[var(--ref-primary-40)] flex items-center p-2 pt-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[90%] flex flex-col"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-black mb-4">
                Flavours
              </h2>
              <p className="text-xl text-gray-600">
                Discover our signature treats
              </p>
            </motion.div>
          </div>
          {/* Card */}
          <div className="w-full h-[100vh] max-h-[700px] bg-[var(--ref-primary-40)] p-2 flex justify-center items-center ">
            {/* Image */}
            <motion.div
              className="w-full h-[70%] flex p-2 justify-center rounded-xl"
              initial={{ backgroundColor: "transparent" }}
              whileHover={{ backgroundColor: "#fefae0" }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <div className="relative w-[55%] h-full">
                <img
                  src={`${import.meta.env.BASE_URL}cookie3.svg`}
                  alt="Lemon Raspberry Cookie"
                  className="w-full h-full rotate-20 pr-4"
                />
              </div>
              {/* Content */}
              <div className="w-[45%] h-full flex flex-col justify-center items-center">
                <div className="">
                  <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                    Lemon Raspberry White Chocolate Cookie
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
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
