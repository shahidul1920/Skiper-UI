'use client';
import ShareButton from "@/components/ui/share-button";
import WrapButton from "@/components/ui/wrap-button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to Face Around</h1>
      <WrapButton>Push More</WrapButton>
      <ShareButton className="mt-4" links={[{icon: Linkedin}, {icon: Facebook}, {icon: Twitter}, {icon: Instagram}]}>Social Links</ShareButton>
    </div>
  );
}
