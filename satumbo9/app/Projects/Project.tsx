"use client";

import Image from "next/image";
import Link from "next/link";
import { IoLockClosed } from "react-icons/io5";
import React from "react";

const mockProjects = [
  {
    id: 1,
    title: "AkombeVeya – Recycling Platform",
    description:
      "A green-tech platform focused on connecting households and collectors in Angola.",
    link: "https://akombeveya.com",
    ogImage: "/projects/akombeveya/og",
    Icon: IoLockClosed,
  },
];

const Projects = ({ id }: { id: string }) => {
  return (
    <section id={id} className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockProjects.map(
            ({ id, title, description, link, ogImage, Icon }) => (
              <Link
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={`Visit ${title}`}
              >
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  {/* Open Graph Preview */}
                  <div className="relative w-full h-52 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
                    <Image
                      src={ogImage}
                      alt={`${title} preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {title}
                      </h3>
                      <p className="text-zinc-400 text-sm">{description}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-primary">
                        View Project →
                      </span>
                      {Icon && (
                        <div className="text-zinc-400">
                          <Icon size={20} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
