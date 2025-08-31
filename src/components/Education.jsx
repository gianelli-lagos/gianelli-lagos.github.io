import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import { schoolimage } from "../assets"; // Uncomment when image is added

const FloatingBubble = ({ course, index, position, darkMode }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1 + 1, 0.75)}
    className="absolute hidden lg:block"
    style={{
      ...position,
      zIndex: 1
    }}
  >
    <motion.div
      animate={{
        y: [-10, 10, -10],
        x: [-5, 5, -5],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2
      }}
      className={`backdrop-blur-sm rounded-full px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
        darkMode
          ? "bg-carddark/80 border border-black100 text-secondarydark"
          : "bg-white/80 border border-blue-110 text-secondary"
      }`}
    >
      <span className="text-sm font-medium whitespace-nowrap">
        {course}
      </span>
    </motion.div>
  </motion.div>
);

const EducationCard = ({ children, darkMode }) => (
  <Tilt className='w-full max-w-4xl'>
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className={`w-full p-[2px] rounded-[30px] shadow-2xl ${
        darkMode
          ? "bg-gradient-to-r from-tertiarydark to-black100"
          : "bg-gradient-to-r from-blue-110 to-navbar"
      }`}
    >
      <div
        options={{
          max: 15,
          scale: 1.02,
          speed: 450,
        }}
        className={`rounded-[30px] py-12 px-8 md:px-16 min-h-[500px] flex justify-center items-center flex-col text-center ${
          darkMode ? "bg-carddark" : "bg-white"
        }`}
      >
        {children}
      </div>
    </motion.div>
  </Tilt>
);

const Education = ({ darkMode }) => {
  const courses = [
    "Data Structures", "Algorithms", "Web Development", "Database Systems",
    "Software Engineering", "Linear Algebra", "Machine Learning",
    "Intermediate Statistics", "Computer Architecture", "Probability Statistics", "Intro to QF", "Financial Tools & Tech"
  ];

  const floatingPositions = [
    { top: '10%', left: '15%' }, { top: '20%', right: '10%' },
    { top: '75%', left: '8%' }, { top: '85%', right: '15%' },
    { top: '15%', left: '5%' }, { top: '60%', right: '5%' },
    { top: '25%', left: '85%' }, { top: '45%', left: '12%' },
    { top: '70%', right: '85%' }, { top: '35%', right: '20%' },
    { top: '80%', left: '75%' }, { top: '50%', left: '88%' }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex justify-center relative'>
        {/* Floating Course Bubbles */}
        {courses.map((course, index) => (
          <FloatingBubble
            key={course}
            course={course}
            index={index}
            position={floatingPositions[index]}
            darkMode={darkMode}
          />
        ))}

        {/* Main Education Card */}
        <EducationCard darkMode={darkMode}>
          {/* School Picture - Uncomment when I have the image
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="mb-8">
            <img
              src={schoolimage}
              alt="Stevens Institute of Technology"
              className={`w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-xl border-4 ${
                darkMode ? "border-blue-110" : "border-blue-110"
              }`}
            />
          </motion.div>
          */}

          <motion.h3 
            variants={fadeIn("", "", 0.2, 1)} 
            className={`text-[24px] md:text-[32px] font-bold text-center mb-4 ${
              darkMode ? "text-secondarydark" : "text-secondary"
            }`}
          >
            Stevens Institute of Technology
          </motion.h3>

          <motion.div variants={fadeIn("", "", 0.3, 1)} className="mb-6">
            <p className={`text-[20px] md:text-[24px] font-semibold ${
              darkMode ? "text-secondarydark" : "text-secondary"
            }`}>
              Bachelor of Science
            </p>
            <p className={`text-[18px] md:text-[20px] mt-2 ${
              darkMode ? "text-blue-110" : "text-babyblue"
            }`}>
              Computer Science
            </p>
            <p className={`text-[18px] md:text-[20px] mt-2 ${
              darkMode ? "text-blue-110" : "text-babyblue"
            }`}>
              Minor - Quantitative Finance
            </p>
          </motion.div>

          <motion.div variants={fadeIn("", "", 0.4, 1)} className="mb-8">
            <p className={`text-[16px] mb-3 ${
              darkMode ? "text-blue-110" : "text-babyblue"
            }`}>
              Expected Graduation
            </p>
            <div className={`inline-block text-white px-6 py-3 rounded-full text-[18px] md:text-[20px] font-bold shadow-lg ${
              darkMode 
                ? "bg-gradient-to-r from-blue-110 to-babyblue" 
                : "bg-gradient-to-r from-blue-300 to-babyblue"
            }`}>
              May 2027
            </div>
          </motion.div>

          <motion.div variants={fadeIn("", "", 0.5, 1)} className="lg:hidden mt-8">
            <h4 className={`text-[18px] font-semibold mb-4 ${
              darkMode ? "text-secondarydark" : "text-secondary"
            }`}>
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {courses.slice(0, 8).map((course, index) => (
                <span 
                  key={course} 
                  className={`px-3 py-1 rounded-full text-[14px] ${
                    darkMode 
                      ? "bg-tertiarydark text-secondarydark" 
                      : "bg-navbar text-secondary"
                  }`}
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </EducationCard>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");