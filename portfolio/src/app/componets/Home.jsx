"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const route = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-36 font-sans">
      {/* Header */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Photo */}
        <div className="relative">
          <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-yellow-400 relative">
            <Image
              src="/profile.png"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* About */}
        <div className="flex-1 px-20">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Architect & Design
          </h1>
          <h2 className="text-lg text-blue-500 mb-4 italic">About Me</h2>
          <div className="w-80">
            <p className="text-gray-700 leading-relaxed">
              Hi, I’m{" "}
              <span className="text-blue-500 font-bold">Mokila Heng</span>,
              passionate about designing functional and aesthetically pleasing
              architectural spaces. I specialize in creating both artistic and
              professional designs, blending form with function. With experience
              in freelance architecture projects, I am dedicated to delivering
              high-quality and innovative solutions that meet both client needs
              and design excellence.
            </p>
          </div>

          {/* Info Row */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>🎂</span> <span>18/06/2004</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span> <span>0968902476</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span> <span>Phnom penh</span>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              🎓 <span>Norton University</span>
            </div>
          </div>
        </div>
      </section>

      {/* Software Skills */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-400 inline-block">
          Software
        </h2>
        <div className="flex flex-wrap gap-8 mt-6 justify-center">
          {[
            { name: "AutoCad", img: "/autocad.png" },
            { name: "3D MAX", img: "/3dmax.png" },
            { name: "SketchUp", img: "/SketchUp.png" },
            { name: "v-ray", img: "/v-ray.png" },
            { name: "Lumion", img: "/Lumion.png" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center transform transition-transform duration-500 hover:scale-110"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden cursor-pointer hover:animate-pulse">
                <Image
                  src={tool.img}
                  alt={tool.name}
                  width={64}
                  height={64}
                  objectFit="contain"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-400 inline-block">
          Experience
        </h2>
        <div className="space-y-6 mt-4">
          {[
            { year: 2017, role: "Photographer", place: "Moji - Gift shop" },
            {
              year: 2018,
              role: "Photographer & Video Editor",
              place: "Muki Bookstore",
            },
            {
              year: 2018,
              role: "Freelance Photographer",
              place: "Ledouxi Bakery & Cafe",
            },
            { year: 2019, role: "Photographer", place: "Mint Cosmetics" },
            {
              year: 2019,
              role: "Photographer & Designer",
              place: "Athena Jewelry",
            },
          ].map((exp, index) => (
            <div
              key={`${exp.year}-${index}`}
              className="flex items-start gap-6"
            >
              <p className="text-blue-600 font-bold">{exp.year}</p>
              <div>
                <p className="text-gray-800 font-semibold">{exp.role}</p>
                <p className="text-gray-600 text-sm">{exp.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" py-10">
        <button
          onClick={() => route.push("/projects")}
          className=" cursor-pointer text-2xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-400 inline-block"
        >
          Go to my projects
        </button>
      </section>

      {/* Contacts */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-yellow-400 inline-block">
          Contacts
        </h2>
        <div className="flex flex-wrap gap-6 text-gray-700 text-sm mt-6">
          <div>
            📸{" "}
            <a
              href="https://instagram.com"
              className="text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              @molika
            </a>
          </div>
          <div>
            📧{" "}
            <a href="mailto:likacute@gmail.com" className="text-indigo-600">
              likacute@gmail.com
            </a>
          </div>
          <div>
            📘{" "}
            <a
              href="https://facebook.com"
              className="text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/likablock
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
