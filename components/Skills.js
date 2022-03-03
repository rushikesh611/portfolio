/* eslint-disable react/no-unescaped-entities */
import React from "react";
import skills from "../data/tools-data";
import Image from "next/image";

function Skills() {
  return (
    <div className="pb-5">
      <div className="flex flex-col px-6 lg:px-10 dark:text-white">
        <span className="text-xl lg:text-2xl font-bold mb-2 mt-2">
          Tools and Tech I've worked with:
        </span>
      </div>
      <div className="flex items-center justify-start px-4 lg:px-10">
        <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-4 p-5">
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
  );
}

export default Skills;
