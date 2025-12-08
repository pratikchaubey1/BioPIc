import React from "react";
import { SiJavascript } from "react-icons/si";

function JavaScriptPage() {
  const topics = [
    "Variables (let, const)",
    "Functions & Arrow Functions",
    "Array & Object Methods",
    "Promises & async/await",
    "DOM basics (for vanilla JS)",
    "JSON & APIs",
    "Using JS with React",
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-yellow-50/70 to-white text-slate-800 flex justify-center px-6 md:px-12 lg:px-20 py-16">
      <div className="w-full max-w-5xl">
        {/* TITLE */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.08)] border border-yellow-300/70">
            <SiJavascript className="text-4xl text-yellow-500" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
              JavaScript
              <SiJavascript className="text-yellow-500 drop-shadow" />
            </h1>
            <p className="text-sm text-slate-500">
              Core language I use behind React and Node.js.
            </p>
          </div>
        </div>

        {/* INTRO */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          JavaScript is the base of my development. I use{" "}
          <span className="text-yellow-600 font-medium">modern ES6+ JavaScript </span> 
          with React on the frontend and Node.js on the backend. I&apos;m comfortable
          with functions, arrays, objects, promises and working with APIs.
        </p>

        {/* TOPICS / SKILLS */}
        <div className="mt-8">
          <p className="text-xs uppercase font-bold text-slate-500 mb-3 tracking-wide flex items-center gap-2">
            <SiJavascript className="text-yellow-500" />
            What I know in JavaScript
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 text-[11px] md:text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:border-yellow-500 hover:text-yellow-600 transition-all duration-200"
              >
                <SiJavascript className="text-yellow-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* EXAMPLE BLOCKS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic JS example */}
          <div className="rounded-2xl bg-white border border-yellow-300/60 p-5 shadow-md">
            <p className="text-sm text-yellow-600 font-semibold mb-3 flex items-center gap-2">
              <SiJavascript className="text-yellow-500" />
              Small JS example (array + map)
            </p>

            <pre className="text-[11px] md:text-xs bg-yellow-50/70 p-4 rounded-lg overflow-x-auto text-slate-800 font-mono border border-yellow-100">
{`const users = ["Pratik", "Prince", "Aman"];

const greetings = users.map((user) => {
  return \`Hello \${user}! \`;
});

console.log(greetings);
// ["Hello Amit! ", "Hello Prince! ", "Hello Aman! "]`}
            </pre>
          </div>

          {/* Async / API example */}
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-md">
            <p className="text-sm text-slate-700 font-semibold mb-3 flex items-center gap-2">
              <SiJavascript className="text-yellow-500" />
              Simple async / await example
            </p>

            <pre className="text-[11px] md:text-xs bg-slate-50 p-4 rounded-lg overflow-x-auto text-slate-800 font-mono border border-slate-200">
{`async function fetchUser() {
  const res = await fetch("/api/user");
  const data = await res.json();
  console.log("User:", data);
}

fetchUser();`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaScriptPage;
