/* eslint-disable react/no-unescaped-entities */
import React from "react";
import projects from "../data/workDone-data";
import { Card as AntDesignCard } from "antd";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

function Work() {
  return (
    <div className="pb-5">
      <div className="flex flex-col px-6 lg:px-10 dark:text-white">
        <span className="text-xl lg:text-2xl font-bold mb-4 mt-4">
          What I have been up to:
        </span>
      </div>
      <div>
        <ScrollContainer
          className="list flex overflow-auto pl-6 lg:pl-10 py-2 mb-8"
          hideScrollbars={true}
        >
          {projects.map((proj) => (
            <a href={proj.url} target="_blank" rel="noreferrer" key={proj.url}>
              <AntDesignCard
                className="flex-shrink-0 w-72 lg:w-80 mr-2 rounded cursor-pointer
            border border-light dark:border-dark
            bg-placeholder-light dark:bg-placeholder-dark"
                hoverable
                cover={
                  <Image
                    src={proj.img}
                    alt="example"
                    className="h-10 w-10"
                    loading="eager"
                    objectFit="cover"
                    width="1366"
                    height="768"
                  />
                }
              >
                <div className="flex flex-col pt-2 pb-4 px-6">
                  <span className="text-lg font-bold">{proj.title}</span>

                  <p className="mt-1 text-sm font-light line-clamp-2">
                    {proj.description}
                  </p>
                  <p className="text-sm font-medium">{proj.stack}</p>
                </div>
              </AntDesignCard>
            </a>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}

export default Work;
