'use client';
import ShareButton from "@/components/ui/share-button";
import FlipLink from "@/components/ui/text-effect-flipper";
import WrapButton from "@/components/ui/wrap-button";
import { Facebook, Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to Face Around</h1>
      <WrapButton>Push More</WrapButton>
      <ShareButton className="mt-4" links={[{icon: Linkedin}, {icon: Facebook}, {icon: Twitter}, {icon: Instagram}]}>Social Links</ShareButton>
      <FlipLink href="https://github.com/"> Github</FlipLink>

      <motion.div 
        className="flex items-center gap-1"
        whileHover="hover"
        initial="initial"
      >
        <motion.div
          variants={{
        initial: { color: "#fff" },
        hover: { color: "#FE7500" }  // Twitter brand orange color
          }}
        >
          <Twitter size={70} />
        </motion.div>
        <FlipLink href="https://twitter.com/"> Twitter</FlipLink>
      </motion.div>
    </div>
  );
}
