"use client";
import WhatsAppLink from "../../components/WhatsAppLink";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(51) 981626259",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fernando89soares@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Porto Alegre - RS",
  },
];
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl items-center">
              <h3 className="text-4xl text-accent">Let´s work together</h3>
              <p className="text-white/60">
                If you liked my profile, don&apos;t hesitate to contact me, it
                will be a pleasure to talk to you.
              </p>

              <div className="flex items-center w-full justify-center">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="text-white/60 mb-4">Send a whatsapp</div>
                  <div className="flex justify-center items-center ">
                    <WhatsAppLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
