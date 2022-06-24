/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import socials from "../data/socials";
import skills from "../data/tools-data";

function About() {
  return (
    <div className="pb-5">
      <div className="flex flex-col px-6 lg:px-10 my-4 md:flex-row">
        <div className="w-full flex flex-col justify-center md:w-1/2">
          <span className="text-2xl lg:text-2xl font-bold mb-2 mt-6">
            About Me
          </span>
          <p className="text-base font-normal font-sans text-justify">
            Hello! I'm Hrushikesh Jadhav. A Full Stack Developer based in
            Mumbai. I follow a simple objective to design top-grade applications
            using various technologies while working in a collaborative
            environment. Most of my projects are a way to explore and learn
            newer Tools and Tech. I don't limit myself with specific tools and
            technology, this mindset has helped me be a quick learner. When I'm
            not coding, you'd find me playing video games or clicking
            photographs.
          </p>
          <h3 className="mt-4 mb-4 font-semibold">Let's connect:</h3>
          <div className="flex flex-row space-x-2">
            {socials.map((s) => (
              <a href={s.url} target="_blank" key={s.url} rel="noreferrer">
                <Image
                  src={s.logo}
                  alt={s.text}
                  width="35%"
                  height="35%"
                  className="w-6 md:w-8 mb-1 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
                />
              </a>
            ))}
          </div>
          <div className="flex flex-col justify-center items-start mt-4 mb-10">
            <div
              className="flex flex-row justify-center items-center rounded-sm 
            bg-gray-200 hover:bg-gray-300 focus:ring-4 dark:bg-slate-700 
            dark:hover:bg-slate-800 dark:focus:ring-gray-50"
            >
              <a
                href="https://drive.google.com/file/d/1hOwYc-Yd0wBTboiV6EaaztMGwkZKTz_V/view?usp=sharing"
                className="py-2 px-3 text-sm font-medium"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>

        <div className="w-full mb-8 lg:w-1/2">
          <div className="flex flex-col text-center px-6 lg:px-10 dark:text-white">
            <span className="text-l lg:text-2xl font-bold mb-2 mt-6">
              Tools and Tech I've worked with:
            </span>
          </div>
          <div className="flex items-center justify-center px-4 lg:px-10 ">
            <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4 p-5">
              {skills.map((s) => (
                <a
                  href={s.url}
                  target="_blank"
                  key={s.url}
                  className=""
                  rel="noreferrer"
                >
                  <Image
                    src={s.logo}
                    alt={s.name}
                    width="40%"
                    height="40%"
                    title={s.name}
                    className="md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
