"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

const WhatsAppLink = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5551981626259"
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <motion.a
        className="w-[100px] h-[50px] rounded-full bg-green-500 flex justify-center items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoLogoWhatsapp className="text-white text-3xl" />
      </motion.a>
    </Link>
  );
};

export default WhatsAppLink;
