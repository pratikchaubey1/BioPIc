import React from "react";
import { FaNodeJs } from "react-icons/fa";

function Node() {
  const topics = [
    "Backend with Node.js",
    "Express.js REST APIs",
    "Routing & Middleware",
    "JSON & API responses",
    "Connecting with MongoDB",
    "Handling requests & responses",
    "Environment variables (.env)",
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-emerald-50/60 to-white text-slate-800 flex justify-center px-6 md:px-12 lg:px-20 py-16">
      <div className="w-full max-w-5xl">
        {/* TITLE */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.08)] border border-emerald-400/40">
            <FaNodeJs className="text-4xl text-emerald-500" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
              Node.js Backend
              <FaNodeJs className="text-emerald-500 drop-shadow" />
            </h1>
            <p className="text-sm text-slate-500">
              Writing APIs and server-side logic with Node.js & Express.
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          I use <span className="text-emerald-600 font-medium">Node.js</span> to
          build backend services and REST APIs. I&apos;m comfortable with
          Express.js, routing, middleware, JSON responses and connecting the
          backend with databases like MongoDB for full-stack applications.
        </p>

        {/* TOPICS */}
        <div className="mt-8">
          <p className="text-xs uppercase font-bold text-slate-500 mb-3 tracking-wide flex items-center gap-2">
            <FaNodeJs className="text-emerald-500" />
            What I Do with Node.js
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 text-[11px] md:text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:border-emerald-500 hover:text-emerald-600 transition-all duration-200"
              >
                <FaNodeJs className="text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* EXAMPLE */}
        <div className="mt-10 rounded-2xl bg-white border border-emerald-300/40 p-5 shadow-md">
          <p className="text-sm text-emerald-600 font-semibold mb-3 flex items-center gap-2">
            <FaNodeJs className="text-emerald-500" />
            Simple Express API I can create 
          </p>

          <pre className="text-[11px] md:text-xs bg-slate-50 p-4 rounded-lg overflow-x-auto text-slate-700 font-mono border border-slate-200">
{`const express = require("express");
const app = express();

app.use(express.json());

// simple route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js " });
});

// sample post route
app.post("/api/user", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ success: true, user: name });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Node;
