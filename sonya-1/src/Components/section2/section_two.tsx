import { motion } from "framer-motion";

export function SectionTwo() {
  return (
    <>
      <div className="w-full h-[15%] min-h-[90px] flex items-center bg-red-100 p-2 pt-4">
        <h1 className="text-2xl md:text-6xl font-light tracking-wide">
          Flavours
        </h1>
      </div>
      <div className="w-full h-[100vh] bg-[var(--ref-primary-30)] p-2 flex justify-center items-center">
        <div className="w-full h-[70%] flex bg-blue-100">
          <div className="w-[50%] h-full">
            <img src="/cookie3.svg" />
          </div>
          <div className="w-[50%] h-full flex-col">
            <div>
              <h1>Lemon Raspberry White Chocolate Cookie</h1>
              <p>Soft fudgy cookie...</p>
              <motion.button>Learn More</motion.button>
              <motion.button>Order Now</motion.button>
            </div>
          </div>
          <div className="w-full h-[40%] bg-blue-100">w</div>
        </div>
      </div>
    </>
  );
}
