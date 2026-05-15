"use client";
import React from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../constants";
import { PinContainer } from "./ui/Pin";

const Works = () => {
  return (
    <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Projects.
        </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-20">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] mb-10"
            key={item.id}
          >
            <PinContainer
              title={item.link}a
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[250px] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src={item.img}
                    alt="cover"
                    className="w-full h-full object-cover z-10"
                  />

                </div>
              </div>

              <h1 className="text-babyblue dark:text-blue-110  font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="text-secondary dark:text-white100 lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>


              {/* Tool Icons */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((Icon, index) => (
                    <div
                      key={index}
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      className="border border-[#3ea1fd]/30 dark:border-white/[.2] rounded-full 
                                bg-[#e8f4ff] dark:bg-[#13162D] 
                                lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <Icon className="text-[#3ea1fd] dark:text-[#CBACF9] w-5 h-5" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="text-babyblue dark:text-blue-110  flex lg:text-xl md:text-xs text-sm text-purple">
                    See GitHub repository!
                  </p>
                  <FaLocationArrow className="ms-3 dark:text-[#CBACF9] text-blue-300" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
