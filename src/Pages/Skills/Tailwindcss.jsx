import React from "react";
import { SiTailwindcss } from "react-icons/si";

function TailwindCss() {
  const topics = [
    "Utility-first CSS",
    "Responsive design (sm / md / lg / xl)",
    "Flexbox & Grid with utilities",
    "Spacing, colors, typography",
    "Custom classes & reuse",
    "Using Tailwind with React components",
    "Hover / focus / transition utilities",
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-sky-50/60 to-white text-slate-800 flex justify-center px-6 md:px-12 lg:px-20 py-16">
      <div className="w-full max-w-5xl">

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.08)] border border-sky-400/40">
            <SiTailwindcss className="text-4xl text-sky-500" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
              Tailwind CSS
              <SiTailwindcss className="text-sky-500 drop-shadow" />
            </h1>
            <p className="text-sm text-slate-500">
              Designing clean, responsive UI with utility-first styling.
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          I use <span className="text-sky-600 font-medium">Tailwind CSS</span> to
          style interfaces quickly with utility classes. Instead of writing long
          custom CSS files, I build layouts directly in JSX using Tailwind&apos;s
          spacing, color, flex and grid utilities. It helps me keep designs
          clean, consistent and responsive.
        </p>

        {/* Skills / Topics */}
        <div className="mt-8">
          <p className="text-xs uppercase font-bold text-slate-500 mb-3 tracking-wide flex items-center gap-2">
            <SiTailwindcss className="text-sky-500" />
            How I use Tailwind
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 text-[11px] md:text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:border-sky-500 hover:text-sky-600 transition-all duration-200"
              >
                <SiTailwindcss className="text-sky-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Example block */}
        <div className="mt-10 rounded-2xl bg-white border border-sky-300/40 p-5 shadow-md">
          <p className="text-sm text-sky-600 font-semibold mb-3 flex items-center gap-2">
            <SiTailwindcss className="text-sky-500" />
            Small Tailwind example I use 
          </p>

          <pre className="text-[11px] md:text-xs bg-slate-50 p-4 rounded-lg overflow-x-auto text-slate-700 font-mono border border-slate-200">
{`function Card() {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md 
                    border border-slate-200 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-sky-500" />
      <div>
        <p className="text-sm font-semibold text-slate-900">
          Tailwind styled card
        </p>
        <p className="text-xs text-slate-500">
          Built only with utility classes.
        </p>
      </div>
    </div>
  );
}`}
          </pre>
        </div>

      </div>
    </div>
  );
}

export default TailwindCss;
