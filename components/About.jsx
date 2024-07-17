import Image from "next/image";
import React from "react";




const AboutMe = (props) => {
  return (
    <section className="flex flex-col w-full py-8 bg-white border rounded-md gap-y-4">
      <h6 className="font-normal text-center text-secondary-foreground text-md md:text-lg text-capitalize">
        Get To Know Me
      </h6>
      <h5 className="mb-8 text-lg font-semibold text-center capitalize text-primary md:text-2xl">
        About JohnDoe
      </h5>

      <p className="font-normal text-secondary-foreground/80 text-md md:text-xl  text-center py-2 w-[80%] mx-auto tracking-wide">
        I&apos;m a passionate Full Stack Developer with over 3 years of experience. I
        love solving complex problems and building scalable web applications. In
        my free time, I enjoy reading tech blogs and exploring new technologies.
      </p>
    </section>
  );
};

export default AboutMe;