"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "../../components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const reviews = [
  {
    num: "01",
    name: "Denise Giacomolli - Bazk",
    testimonial:
      "Fernando has a keen eye for visual details and user experience, creating intuitive and visually appealing interfaces that enhance the user experience. Your ability to translate complex requirements into elegant and simple solutions is a real differentiator.",
    image: "/assets/testimonials/Denise.jpg",
  },
  {
    num: "02",
    name: "Marina Blum - Bazk",
    testimonial:
      "The frontend that a designer needs: agile, proactive and committed to deliveries and continuous process improvement. It is the person who takes a critical and attentive approach to maintaining visual consistency, application performance and design assumptions.",
    image: "/assets/testimonials/Marina.jpg",
  },
  {
    num: "03",
    name: "Flávia Tissot - OSPA",
    testimonial:
      "He is a great professional and a great person to work with. Competent, focused and proactive in propositions.",
    image: "/assets/testimonials/Flávia.png",
  },
  {
    num: "04",
    name: "Bruno Rudiger - IGOAL",
    testimonial:
      "With his mind always attentive to details, he always has excellent suggestions and ideas to share with the team.",
    image: "/assets/testimonials/Bruno.png",
  },
  {
    num: "05",
    name: "Rodrigo Vieira - Grupo RBS",
    testimonial:
      "A dedicated colleague, always attentive and open to new knowledge, never stop, searching of something more. Excellent professional, very communicative.",
    image: "/assets/testimonials/Rodrigo.png",
  },
  {
    num: "06",
    name: "Lucas Hashiguchi - URBE.M",
    testimonial: "Great professional, creative, dedicated and collaborative",
    image: "/assets/testimonials/Lucas.png",
  },
];
const Testimonials = () => {
  const [review, setReview] = useState(reviews[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setReview(reviews[currentIndex]);
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
        <div className="flex flex-col xl:flex-row ">
          <div className="w-full xl:w-[100%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"></div>
          <div className="w-full xl:w-[100%]">
            <Swiper
              spaceBetween={30}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                982: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] group flex justify-center items-center flex-col">
                    <div className="foto w-full h-full relative flex justify-center items-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 0.4,
                            delay: 2,
                            ease: "easeIn",
                          },
                        }}
                        className="flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: {
                              duration: 0.4,
                              delay: 2.4,
                              ease: "easeInOut",
                            },
                          }}
                          className="w-[100px] h-[100px] xl:w-[100px] xl:h-[100px] mix-blend-lighten absolute top-[14px]"
                        >
                          <Image
                            src={review.image}
                            alt="photo"
                            priority
                            quality={100}
                            fill
                            className="object-cover rounded-full"
                          />
                        </motion.div>

                        <motion.svg
                          className="w-[100px] h-[100px] xl:w-[100px] xl:h-[100px]"
                          fill="transparent"
                          viewBox="0 0 506 506"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#00ff99"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                              strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                              ],
                              rotate: [120, 360],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                    <div className="h-[1200px]">
                      <div className="relative h-full bg-[#232329] p-4 pb-2 rounded-xl">
                        {review.testimonial}
                        <div className="text-white/60 py-2">{review.name}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex justify-center fixed z-10 inset-x-0 bottom-12">
                <WorkSliderBtns
                  containerStyles="flex gap-2"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
