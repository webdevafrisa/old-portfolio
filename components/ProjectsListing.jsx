import React from "react";
import { ProjectCard } from "./ProjectCard";
import { DATA } from "@/data";
import Test from "./Test";

const ProjectsListing = () => {
  return (
    <section className="w-full py-8 bg-white border rounded-md gap-y-4">
      <h6 className="font-normal text-center text-secondary-foreground text-md md:text-lg text-capitalize">
        Projects coming soon
      </h6>
      <h5 className="mb-8 text-lg font-semibold text-center capitalize text-primary md:text-2xl">
        What I have been doing
      </h5>
      <div className="grid w-full grid-cols-1 gap-2 px-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  place-items-stretch">
        {DATA.projects.map((project) => {
          // return <ProjectCard key={project.title} project={project} />;
          return <Test key={project.title} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsListing;
