"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <motion.p
        className=" bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 text-black"
        initial={{
          opacity: 0,
          rotateX: -90,
        }}
        whileInView={{
          opacity: 1,
          rotateX: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <span >Kindly contact me through</span>{" "}
        <a className="underline text-black" href="mailto:sudarshangadadasu@gmail.com">
          sudarshangadadasu@gmail.com
        </a>{" "}
      </motion.p>

    </motion.section>
  );
}
