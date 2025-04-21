import { GiSoapExperiment } from "react-icons/gi";
import { Timeline } from "@/lib/background";
import Link from "next/link";

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-3xl flex items-center justify-center gap-5 font-bold text-center mb-12">
        <GiSoapExperiment />
        Work Experience
      </p>

      <div className="relative ml-4 md:pl-10 md:border-l md:border-zinc-800">
        {Timeline.map((item, i) => (
          <div key={i} className="mb-12 relative flex items-start gap-6">
            <span className="absolute hidden md:block  -left-12 top-2 w-4 h-4 bg-pink-500 rounded-full border-2 border-white z-10" />

            <div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {item.year}
                </h3>
                {item.badge && (
                  <span className="bg-purple-700 text-white text-xs px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>

              <h4 className="text-md text-pink-400 font-medium mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/WorkExpirience"
        className=" relative py-2  md:-left-10 px-10 bg-black cursor-pointer  rounded-md border-1 border-pink-500 flex-shrink-0"
      >
        View All
      </Link>
    </div>
  );
}
