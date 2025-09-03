import React, { useState } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { github_dark, linkedin, gmail } from "../assets";

const contactLinks = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://linkedin.com/in/gianellil",
    color: "#0077B5"
  },
  {
    name: "Email",
    icon: gmail,
    email: "glagos@stevens.edu",
    color: "#EA4335"
  },
  {
    name: "GitHub",
    icon: github_dark,
    url: "https://github.com/gianelli-lagos",
    color: "#333"
  }
];

const Contact = ({ darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleLinkClick = (contact) => {
    if (contact.name === "Email") {
      // Copy email to clipboard
      navigator.clipboard.writeText(contact.email).then(() => {
        setCopiedEmail(true);
        // Hide the "Copied!" message after 2 seconds
        setTimeout(() => setCopiedEmail(false), 2000);
      }).catch(err => {
        console.error('Failed to copy email: ', err);
      });
    } else {
      // Open other links normally
      window.open(contact.url, '_blank');
    }
  };

  return (
    <div className="w-full flex justify-center px-4 pb-16">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Let's Connect
          </h2>
          <p className={`${styles.sectionSubText} text-base sm:text-lg`}>
            Ready to build something amazing together?
          </p>
        </motion.div>

        {/* Business Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Business Card Background */}
          <div className="bg-primary dark:bg-carddark from-[#F1F5F9] to-[#E0F2FE] rounded-3xl border border-white/20 backdrop-blur-sm shadow-2xl p-6 sm:p-8 lg:p-12">
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-secondarydark mb-2 sm:mb-3">
                Gianelli Lagos
              </h3>
              <p className="text-slate-600 dark:text-secondarydark text-lg sm:text-xl">
                Software Engineer
              </p>
            </motion.div>

            {/* Contact Balls - Pure CSS Responsive */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-6 sm:mb-8">
              {contactLinks.map((contact, index) => (
                <div key={contact.name} className="flex flex-col items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-[120px] sm:max-w-none">
                  <motion.div
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  >
                    <BallCanvas
                      icon={contact.icon}
                      darkMode={darkMode}
                    />
                  </motion.div>

                  <motion.button
                    className="text-slate-700 dark:text-secondarydark font-semibold text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 dark:bg-tertiarydark border border-slate-300/50 dark:border-black100 shadow-sm cursor-pointer hover:bg-white/90 dark:hover:bg-black100 hover:shadow-md transition-all duration-200 relative min-w-[80px] sm:min-w-[100px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 + index * 0.2 }}
                    onClick={() => handleLinkClick(contact)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {contact.name === "Email" && copiedEmail ? "Copied!" : contact.name}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="text-center px-2 sm:px-0"
            >
              <p className="text-slate-600 dark:text-secondarydark text-base sm:text-lg italic">
                "Building the future, one line of code at a time"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");