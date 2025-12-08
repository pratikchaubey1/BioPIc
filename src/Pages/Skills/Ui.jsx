import React from "react";
import { FaPalette, FaUserFriends } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

function UiUx() {
  const topics = [
    "Clean & minimal UI",
    "Figma wireframing",
    "High-fidelity UI designs",
    "Responsive layout thinking",
    "Component-based design systems",
    "User flow & basic UX journeys",
    "Micro-interactions & feedback",
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-slate-50/70 to-white text-slate-800 flex justify-center px-6 md:px-12 lg:px-20 py-16">
      <div className="w-full max-w-5xl">
        {/* TITLE */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.08)] border border-pink-300/60">
            <FaPalette className="text-4xl text-pink-500" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
              UI / UX Design
              <FaPalette className="text-pink-500 drop-shadow" />
            </h1>
            <p className="text-sm text-slate-500">
              Designing simple, modern and user-friendly experiences.
            </p>
          </div>
        </div>

        {/* INTRO */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          I focus on creating interfaces that look clean and feel easy to use.
          I use <span className="text-pink-600 font-medium">UI/UX thinking</span> to
          plan layouts, choose proper spacing, colors and typography, and make sure
          the design actually helps the user complete their task comfortably.
        </p>

        {/* SKILLS / TOPICS */}
        <div className="mt-8">
          <p className="text-xs uppercase font-bold text-slate-500 mb-3 tracking-wide flex items-center gap-2">
            <SiFigma className="text-pink-500" />
            How I approach UI / UX
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 text-[11px] md:text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:border-pink-500 hover:text-pink-600 transition-all duration-200"
              >
                <FaPalette className="text-pink-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* EXAMPLE SECTION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Figma / Wireframe idea */}
          <div className="rounded-2xl bg-white border border-pink-300/50 p-5 shadow-md">
            <p className="text-sm text-pink-600 font-semibold mb-3 flex items-center gap-2">
              <SiFigma className="text-pink-500" />
              Wireframe to UI process
            </p>

            <ul className="text-[11px] md:text-sm text-slate-700 space-y-2">
              <li>1️ Start with rough wireframes (layout blocks, no colors).</li>
              <li>2️ Add hierarchy using font sizes & spacing.</li>
              <li>3️ Choose 2–3 main colors and 1 accent color.</li>
              <li>4️ Turn wireframe into clean UI in Figma.</li>
              <li>5️ Convert final design into React + Tailwind code.</li>
            </ul>
          </div>

          {/* Small UI card example */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-md">
            <p className="text-sm text-slate-700 font-semibold mb-3 flex items-center gap-2">
              <FaUserFriends className="text-indigo-500" />
              Simple profile card UI example
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3 border border-slate-200">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-400 to-indigo-500" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">
                  Clean UI Card
                </p>
                <p className="text-xs text-slate-500">
                  Proper spacing, clear text, simple layout.
                </p>
              </div>
              <button className="text-xs px-3 py-1 rounded-full bg-slate-900 text-white">
                View
              </button>
            </div>

            <p className="mt-3 text-[11px] text-slate-500">
              I try to keep components like this: simple, readable and easy to reuse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiUx;
