import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "./ui/button";
import ShimmerButton from "./magicui/shimmer-button";


const HeroSection = () => {
  return (
    <section className="container flex flex-col max-w-screen-xl mx-auto mb-24 items-between">
      <div className="flex flex-col items-center text-center md:mt-16">
        <div className="relative mb-16 ">
          <Image
            className="relative z-10 transition-transform duration-200 border-4 border-gray-200 rounded-full dark:border-gray-700 hover:scale-105 object"
            src="/images/devImage.jpeg"
            alt="Developer's profile picture"
            height={200}
            width={200}
          />
          <div className="absolute inset-0 transform rotate-45 bg-gray-200 border-4 rounded-full shadow-2xl border-primary" />
        </div>
        <h6 className="mb-8 text-lg font-medium uppercase text-secondary-foreground md:text-2xl">
          John Doe
        </h6>
        <h1 className="mb-8 text-4xl font-normal leading-none text-primary md:text-7xl">
          FullStack Developer
        </h1>
        <p className="mb-16 font-normal text-secondary-foreground text-md md:text-xl">
          I have a passion for software. I enjoy creating tools that make life
          easier for people.
        </p>
        <div className="flex flex-row gap-4">
 
          <Button
            asChild
            size="lg_rounded"
            className="h-8 border rounded-full w-28 border-primary"
            variant="secondary"
          >
            <Link
              href="/TysonLukaleCV.pdf"
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              My CV
            </Link>
          </Button>
             <Link
              href="https://wa.me/+254792200650"
            
              target="_blank"
              rel="noreferrer"
            >
                <ShimmerButton className="h-8 shadow-2xl"  >
        <span className="text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg">
        Hire Me
        </span>
      </ShimmerButton>
      </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;