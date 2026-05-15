import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { meimage } from "../assets";

const AboutCard = ({ index, children, className = "", darkMode }) => (
  <Tilt className="w-full">
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
    "🎨 I enjoy creating art in my free time.",
    "💪 I stay active through working out and listening to music.",
    "🌍 I like learning new languages and exploring different cultures.",
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

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        {/* LEFT SIDE :) */}
        <div className="flex flex-col gap-8 lg:col-span-1">

          {/* Picture Card */}
          <AboutCard index={0} darkMode={darkMode}>
            <div className="flex flex-col items-center">
              <img
                src={meimage}
                alt="Myself"
                className="bg-gradient-to-b from-blue-110 to-babyblue rounded-[20px] w-44 h-44 object-cover mb-4 border-2 border-navbar"
              />
              <h3 className="text-secondary dark:text-white100 text-[22px] font-bold text-center">
                Gianelli Lagos
              </h3>
              <p className="text-babyblue dark:text-secondarydark text-[15px] text-center mt-2">
                Software Engineer
              </p>
            </div>
          </AboutCard>

          {/* Fun Facts */}
          <AboutCard index={2} darkMode={darkMode}>
            <div className="flex flex-col h-full">
              <h3 className="text-secondary dark:text-white100 text-[22px] font-bold text-center mb-6">
                Fun Facts
              </h3>

              <div className="text-secondary dark:text-white100 flex flex-col space-y-3 text-[14px] text-left">
                {funFacts.map((fact, index) => (
                  <div key={index}>{fact}</div>
                ))}
              </div>
            </div>
          </AboutCard>
        </div>

        {/* RIGHT SIDE (WIDE ABOUT ME) */}
        <div className="lg:col-span-3 mt-20">
          <AboutCard index={1} darkMode={darkMode}>
            <div className="flex flex-col h-full">
              <h3 className="text-secondary dark:text-white100 text-[26px] font-bold text-center mb-6">
                Profile Summary 
              </h3>

              <p className="text-secondary dark:text-white100 text-[16px] leading-[28px] text-left">
                I am a Computer Science student at Stevens Institute of Technology with
                software engineering internship experience at Amazon (AWS), along with
                participation in AI-focused programs such as Break Through Tech. Through
                these experiences, I have built a strong foundation in algorithms,
                programming, and software engineering principles.

                <br /><br />

                I have also explored quantitative finance concepts through implementations
                such as the Black-Scholes option pricing model in R, which deepened my
                understanding of numerical methods and computational modeling. In addition,
                I continue to build full-stack and systems-oriented projects involving data
                structures, backend development, and cloud-based applications.

                <br /><br />

                I am currently focused on strengthening my software engineering skills while
                building projects in machine learning and artificial intelligence through
                coursework and personal exploration.

                <br /><br />
                </p>

                <p className="text-[#3ea1fd] dark:text-[#dfd9ff] font-semibold border-t border-[#3ea1fd]/20 pt-4 mt-4 text-center">
                  Feel free to connect — I'm always open to discussing technology, projects, and new opportunities.
                  <br /><br />
                </p>
            </div>
          </AboutCard>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");