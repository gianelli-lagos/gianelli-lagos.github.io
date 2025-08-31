import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";


const Tech = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white100 mb-4">Tech Stack</h2>
        <p className={`${styles.sectionSubText} text-center`}>Technologies I use to build amazing things</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white border-2 border-blue-200 dark:bg-[#1a2038] rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
          >
            <img 
              src={tech.icon} 
              alt={tech.name}
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium text-slate-700 dark:text-white">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");