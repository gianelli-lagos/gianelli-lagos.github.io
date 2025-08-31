import { motion } from "framer-motion";
import { styles } from "../styles";
// import Spline from '@splinetool/react-spline'; // for future use

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Optional Spline or background */}
      {/* <Spline scene="..." /> */}

      {/* Centered Name/Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className={`${styles.heroHeadText} text-[#334155] dark:text-[#cbd5e1]`}>
          Hi, I'm <span className="text-[#3ea1fd] dark:text-[#a6d4fa]">Gianelli</span>!
        </h1>

        <p className={`${styles.heroSubText} mt-4 text-[#64748b] dark:text-[#94a3b8]`}>
          I love problem solving. <br className="sm:block hidden" />
        </p>
        <a href="#contact"> <button className="mt-10 px-6 py-3 rounded-full bg-[#3ea1fd] dark:bg-[#6366f1] text-white font-semibold text-[16px] hover:bg-[#2e82c9] dark:hover:bg-[#7c3aed] transition-colors duration-300"> Contact Me </button> </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary dark:border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary dark:bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
