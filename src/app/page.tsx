'use client';
import ShareButton from "@/components/ui/share-button";
import FlipLink from "@/components/ui/text-effect-flipper";
import WrapButton from "@/components/ui/wrap-button";
import { Facebook, Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardCarousel } from "@/components/ui/card-carousel";

export default function Home() {

  const images = [
    { src: "/images/11.jpg", alt: "Image 1" },
    { src: "/images/22.jpg", alt: "Image 2" },
    { src: "/images/33.jpg", alt: "Image 3" },
    { src: "/images/44.jpg", alt: "Image 4" },
    { src: "/images/55.jpg", alt: "Image 5" },
    { src: "/images/66.jpg", alt: "Image 6" }
  ]


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


      <div className="pt-40">
        <CardCarousel 
          images={images}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        />
      </div>


    </div>
  );
}
