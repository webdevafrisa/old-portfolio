"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProjectCard({ project }) {
  return (
    <div className="w-full max-w-xs group/card">
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-cover bg-center"
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="z-10 flex flex-row items-center space-x-4">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/images/devImage.jpeg"
            className="object-cover w-10 h-10 border-2 rounded-full"
          />
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal group-hover/card:text-gray-50">
              {project.devName}
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="relative z-10 text-xl font-bold md:text-2xl group-hover/card:text-gray-50">
            {project.title}
          </h1>
          <p className="relative z-10 my-4 text-sm font-normal group-hover/card:text-gray-50">
            {project.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
