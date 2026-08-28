import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { me_hiking, me_japan, me_SF, newyork_view } from "../assets";
import FloatingStar from "./FloatingStar";

const heroSlides = [
  { src: me_hiking, caption: "Amazing hike at North Cascades National Park, WA 🏔️" },
  { src: me_japan, caption: "Exploring and having fun in Japan 🇯🇵" },
  { src: me_SF, caption: "SF! 4th of July trip :D  🌉" },
  { src: newyork_view, caption: "Catching the NYC view from Stevens 🏙️" },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%" }),
  center: { x: "0%" },
  exit: (direction) => ({ x: direction > 0 ? "-100%" : "100%" }),
};

const ChevronButton = ({ onClick, direction, darkMode }) => (
  <button
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous photo" : "Next photo"}
    className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10 ${
      direction === "prev" ? "left-4" : "right-4"
    } ${
      darkMode
        ? "bg-black/50 border border-white/20 text-white100"
        : "bg-white/70 border border-black/10 text-secondary"
    }`}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d={direction === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const FunBubble = ({ children, delay = 0, darkMode }) => (
  <motion.span
    animate={{ y: [0, -7, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    className={`text-sm px-5 py-3 rounded-full border ${
      darkMode
        ? "bg-carddark border-black100 text-white100"
        : "bg-primary border-navbar text-secondary"
    }`}
  >
    {children}
  </motion.span>
);

const About = ({ darkMode }) => {
  const [[index, direction], setSlide] = useState([0, 0]);

  useEffect(() => {
    heroSlides.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const paginate = (newDirection) => {
    setSlide([
      (index + newDirection + heroSlides.length) % heroSlides.length,
      newDirection,
    ]);
  };

  const goTo = (i) => {
    setSlide([i, i > index ? 1 : -1]);
  };

  const funFacts = [
    "🎨 I enjoy creating art in my free time.",
    "💪 I stay active through working out and listening to music.",
    "🌍 I like learning new languages and exploring different cultures.",
    "🇭🇳 My family is from Honduras!",
    "📺 My favorite shows are One Piece and The Office."
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Learn more</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>About me!</h2>
      </motion.div>

      {/* Statement hero */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className="w-full max-w-[900px] mx-auto mt-10"
      >
        {/* Photo container — name/tag/dots/scrim all live INSIDE this,
            so they're always anchored to the photo itself */}
        <div className="relative w-full h-[62vh] max-h-[560px] min-h-[380px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={index}
              src={heroSlides[index].src}
              alt="Gianelli Lagos"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Readability scrim behind the name */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent z-[1]" />

          <ChevronButton
            onClick={() => paginate(-1)}
            direction="prev"
            darkMode={darkMode}
          />
          <ChevronButton
            onClick={() => paginate(1)}
            direction="next"
            darkMode={darkMode}
          />

          <span
            className="absolute right-6 top-5 text-[13px] px-3.5 py-1.5 border border-white/30 bg-black/50 text-white z-10 backdrop-blur-sm"
          >
            Software Engineer
          </span>

          <div
            className="absolute left-6 bottom-4 font-extrabold leading-[0.92] tracking-tight text-white z-10"
            style={{ fontSize: "clamp(18px, 3.2vw, 34px)" }}
          >
            GIANELLI
            <br />
            LAGOS
          </div>

          <div className="absolute bottom-3 right-6 flex gap-1.5 z-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-transform ${
                  i === index ? "scale-125 bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Caption — separate block below the photo, doesn't affect name position */}
        <div className="mt-3 h-6 overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-babyblue dark:text-secondarydark text-sm italic"
            >
              {heroSlides[index].caption}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="h-[50px] sm:h-[35px]" />

      {/* Bio */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="max-w-[620px] mx-auto mb-16 text-secondary dark:text-white100 text-[15.5px] leading-[1.8] text-left space-y-4"
      >
        <p>
          I am a Computer Science student at Stevens Institute of Technology
          with software engineering internship experience at Amazon (AWS),
          along with participation in AI-focused programs such as Break
          Through Tech. Through these experiences, I have built a strong
          foundation in algorithms, programming, and software engineering
          principles.
        </p>
        <p>
          I have also explored quantitative finance concepts through
          implementations such as the Black-Scholes option pricing model in
          R, which deepened my understanding of numerical methods and
          computational modeling. In addition, I continue to build full-stack
          and systems-oriented projects involving data structures, backend
          development, and cloud-based applications.
        </p>
        <p>
          I am currently focused on strengthening my software engineering
          skills while building projects in machine learning and artificial
          intelligence through coursework and personal exploration.
        </p>
        <p className="text-[#3ea1fd] dark:text-[#dfd9ff] font-semibold border-t border-[#3ea1fd]/20 pt-4 mt-4 text-center">
          Feel free to connect — I'm always open to discussing technology,
          projects, and new opportunities.
        </p>
      </motion.div>
      
      <FloatingStar id="star-about" className="absolute top-10 right-10" />

      {/* Fun facts */}
      <motion.div variants={fadeIn("up", "spring", 0.4, 0.75)}>
        <h3 className="text-secondary dark:text-white100 text-[22px] font-bold text-center mb-6">
          Fun Facts
        </h3>
        <div className="flex flex-wrap justify-center gap-3.5">
          {funFacts.map((fact, i) => (
            <FunBubble key={i} darkMode={darkMode} delay={i * 0.6}>
              {fact}
            </FunBubble>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");