import React from "react";
import { FaReact } from "react-icons/fa";

function ReactJs() {
  const topics = [
    "JSX & Virtual DOM",
    "Functional Components",
    "React Hooks (useState, useEffect)",
    "React Router Navigation",
    "API Integration in React",
    "Reusable UI Components",
    "Styling with Tailwind CSS",
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-sky-50/60 to-white text-slate-800 flex justify-center px-6 md:px-12 lg:px-20 py-16">
      <div className="w-full max-w-5xl">

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.08)] border border-cyan-400/30">
            <FaReact className="text-4xl text-cyan-500" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
              React.js Development
              <FaReact className="text-cyan-500 drop-shadow" />
            </h1>
            <p className="text-sm text-slate-500">
              Building rich interactive UI with modern React.
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          I develop fast and scalable web interfaces using{" "}
          <span className="text-cyan-600 font-medium">React.js</span>.
          I focus on clean UI, reusable components and smooth UX with hooks & routing.
        </p>

        {/* Skills */}
        <div className="mt-8">
          <p className="text-xs uppercase font-bold text-slate-500 mb-3 tracking-wide flex items-center gap-2">
            <FaReact className="text-cyan-500" />
            What I Know in React
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 text-[11px] md:text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:border-cyan-500 hover:text-cyan-600 transition-all duration-200"
              >
                <FaReact className="text-cyan-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-10 rounded-2xl bg-white border border-cyan-300/40 p-5 shadow-md">
          <p className="text-sm text-cyan-600 font-semibold mb-3 flex items-center gap-2">
            <FaReact className="text-cyan-500" />
            Small Example I Use Everyday 
          </p>

          <pre className="text-[11px] md:text-xs bg-slate-50 p-4 rounded-lg overflow-x-auto text-slate-700 font-mono border border-slate-200">
{`function Welcome({ name }) {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>Hello {name}! </p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </>
  );
}`}
          </pre>
        </div>

      </div>
    </div>
  );
}

export default ReactJs;
