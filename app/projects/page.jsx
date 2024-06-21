"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import WorkSliderBtns from "../../components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "EasyControl",
    title: "Project 1",
    description: "Application for managing customers and tickets.",
    stack: [
      { name: "Next.JS" },
      { name: "Prisma" },
      { name: "Typescript" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/EasyControlThumb.png",
    live: "https://easy-controls.vercel.app/",
    github: "https://github.com/89fernando/easy-control",
  },
  {
    num: "02",
    category: "Portfolio",
    title: "Project 2",
    description: "My first portfolio.",
    stack: [
      { name: "React" },
      { name: "javascript" },
      { name: "Html" },
      { name: "Css" },
    ],
    image: "/assets/work/firstPortfolioThumb.png",
    live: "https://89fernando.github.io/My-Portfolio-React/",
    github: "https://github.com/89fernando/My-Portfolio-React",
  },
  {
    num: "03",
    category: "Tetris",
    title: "Project 3",
    description: "Creation of the tetris game to practice logic.",
    stack: [
      { name: "React" },
      { name: "javascript" },
      { name: "Html" },
      { name: "Css" },
    ],
    image: "/assets/work/tetrisThumb.png",
    live: "",
    github: "https://github.com/89fernando/tetris-game-react",
  },
  {
    num: "04",
    category: "E-commerce",
    title: "Project 4",
    description: "Creating an e-commerce store.",
    stack: [{ name: "html5" }, { name: "css3" }, { name: "javascript" }],
    image: "/assets/work/EcommerceThumb.png",
    live: "",
    github: "https://github.com/89fernando/frontend-challenge-junior",
  },
  {
    num: "05",
    category: "This portfolio",
    title: "Project 5",
    description: "Updating my portfolio with new technologies.",
    stack: [{ name: "Next.JS" }, { name: "Tailwind" }, { name: "javascript" }],
    image: "/assets/work/thisPortfolioThumb.png",
    live: "https://89fernando-portfolio.vercel.app/",
    github: "https://github.com/89fernando/My-Portfolio-Next",
  },
];
const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-2 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50px]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                <div>{project.num}</div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ", "}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <RiArrowRightUpLine className="text-white text-4xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[50px] h-[50px] rounded-full bg-white/10 flex justify-center items-center cursor-not-allowed opacity-50">
                    <RiArrowRightUpLine className="text-white text-4xl" />
                  </div>
                )}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt="project-image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
