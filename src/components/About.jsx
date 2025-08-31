import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { meimage } from "../assets";

const AboutCard = ({ index, children, className = "", darkMode }) => (
  <Tilt className="xs:w-[350px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className={`w-full p-[1px] rounded-[20px] shadow-lg ${
        darkMode
          ? "bg-gradient-to-r from-tertiarydark to-black100"
          : "bg-gradient-to-r from-blue-110 to-navbar"
      }`}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`rounded-[20px] py-8 px-8 min-h-[350px] flex justify-center items-center flex-col ${
          darkMode
            ? "bg-carddark border border-black100"
            : "bg-primary border border-navbar"
        } ${className}`}
      >
        {children}
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ darkMode }) => {
  const funFacts = [
    "🎨 I create art in my spare time.",
    "💪 I enjoy working out and blasting music!",
    "🌍 I like learning languages.",
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Learn more
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          About me!
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-8 justify-center">
        {/* Picture Card */}
        <AboutCard index={0} darkMode={darkMode}>
          <div className="flex flex-col items-center">
            <img
              src={meimage}
              alt="Myself"
              className="bg-gradient-to-b from-blue-110 to-babyblue rounded-[20px] w-48 h-48 object-cover mb-4 border-2 border-navbar"
            />
            <h3 className="text-secondary dark:text-white100 text-[24px] font-bold text-center">
              Gianelli Lagos
            </h3>
            <p className="text-babyblue dark:text-secondarydark text-[16px] text-center mt-2">
              Software Developer
            </p>
          </div>
        </AboutCard>

        {/* About Me Info Card */}
        <AboutCard index={1} darkMode={darkMode}>
          <div className="flex flex-col h-full">
            <h3 className="text-secondary dark:text-white100 text-[24px] font-bold text-center mb-6">
              About Me
            </h3>
            <p className="text-secondary dark:text-white100 text-[16px] leading-[24px] text-center flex-grow flex items-center">
              I am deeply passionate about technology, particularly in the realms of Computer Science, Artificial Intelligence, Machine Learning, and Quantitative Finance. Currently, I am a rising junior at Stevens Institute of Technology, where I am actively engaging in projects and coursework that fuel my enthusiasm for tech. I am eager to connect with like-minded individuals and contribute to advancements in the tech industry.
            </p>
          </div>
        </AboutCard>

        {/* Fun Facts Card */}
        <AboutCard index={2} darkMode={darkMode}>
          <div className="flex flex-col h-full">
            <h3 className="text-secondary dark:text-white100 text-[24px] font-bold text-center mb-6">
              Fun Facts
            </h3>
            <div className="text-secondary dark:text-white100 flex-grow flex flex-col justify-center space-y-3 text-[14px] text-left">
              {funFacts.map((fact, index) => (
                <div key={index}>{fact}</div>
              ))}
            </div>
          </div>
        </AboutCard>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");