import React from "react";
import { SocialMedias } from "@/lib/links";
import satumbo92 from "@/public/home/satumbo9-2.png";

import Image from "next/image";
import Link from "next/link";
import ExperienceTimeline from "@/components/ui/TimeLineItem";

const HeroSection = ({ id }: { id: string }) => {
  return (
    <section id={id}>
      <div className="min-h-2/4  text-white flex flex-col py-16  ">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl text-pink-500 font-extrabold tracking-tight  ">
                Edimarf Satumbo
              </h1>

              <p className=" mt-2 text-lg text-pink-400">Software Engineer</p>
            </div>

            <div className="text-white text-base leading-relaxed space-y-3">
              <p>
                Sharing everything I know
                <br />
                about Web Development.
              </p>
              <p>
                Let’s talk about{" "}
                <span className="text-white font-semibold">
                  Prompt Engineering
                </span>
                ,{" "}
                <span className="text-white font-semibold">System Design</span>,
                and{" "}
                <span className="text-white font-semibold">
                  Web Development
                </span>
                .
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              {SocialMedias.map((item) => (
                <Link
                  target="_blank"
                  key={item.id}
                  href={item.route}
                  className="group transition-all duration-300 ease-in-out"
                  aria-label="Social link"
                >
                  {React.createElement(item.icons, {
                    className: `
                            w-6 h-6 text-white 
                            transition-transform transition-colors duration-300 ease-in-out 
                            group-hover:text-pink-500 
                            group-hover:scale-125 
                            group-hover:drop-shadow-lg
                            `,
                  })}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative p-1 rounded-full shadow-xl ">
              <Image
                src={satumbo92}
                alt="Edimarf Satumbo"
                width={400}
                height={400}
                className="rounded-full cursor-pointer object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <ExperienceTimeline />
    </section>
  );
};

export default HeroSection;
