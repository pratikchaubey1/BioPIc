import React from "react";
import { FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

function Dbms() {
  const topics = [
    { label: "MongoDB Collections & Documents", icon: <SiMongodb className="text-emerald-600" /> },
    { label: "MySQL Tables & Relations", icon: <SiMysql className="text-sky-600" /> },
    { label: "CRUD Operations (Create, Read, Update, Delete)", icon: <FaDatabase className="text-indigo-500" /> },
    { label: "Connecting DB with Node.js / Express", icon: <FaDatabase className="text-purple-500" /> },
    { label: "Schema Design & Basic Normalization", icon: <FaDatabase className="text-rose-500" /> },
    { label: "Writing Queries & Filters", icon: <FaDatabase className="text-amber-500" /> },
  ];

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-emerald-50/50 to-white text-slate-800 flex justify-center px-6 md:px-12 lg:px-20 py-16">
      <div className="w-full max-w-5xl">
        {/* TITLE */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.08)] border border-emerald-400/40">
            <FaDatabase className="text-4xl text-emerald-500" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-2">
              DBMS / Databases
              <FaDatabase className="text-emerald-500 drop-shadow" />
            </h1>
            <p className="text-sm text-slate-500">
              Working with MongoDB and MySQL to store and manage data.
            </p>
          </div>
        </div>

        {/* INTRO */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
          I work with both{" "}
          <span className="text-emerald-600 font-medium">MongoDB (NoSQL)</span> and{" "}
          <span className="text-sky-600 font-medium">MySQL (SQL)</span> in my
          projects. I use MongoDB for flexible document-based data and MySQL
          when I need structured tables and relations. I connect these databases
          with Node.js / Express to build full-stack applications.
        </p>

        {/* TOPICS / SKILLS */}
        <div className="mt-8">
          <p className="text-xs uppercase font-bold text-slate-500 mb-3 tracking-wide flex items-center gap-2">
            <FaDatabase className="text-emerald-500" />
            What I Do in DBMS
          </p>

          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-1 text-[11px] md:text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:border-emerald-500 hover:text-emerald-600 transition-all duration-200"
              >
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* EXAMPLES SECTION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MongoDB Example */}
          <div className="rounded-2xl bg-white border border-emerald-300/50 p-5 shadow-md">
            <p className="text-sm text-emerald-600 font-semibold mb-3 flex items-center gap-2">
              <SiMongodb className="text-emerald-600" />
              Simple MongoDB model example
            </p>

            <pre className="text-[11px] md:text-xs bg-emerald-50/60 p-4 rounded-lg overflow-x-auto text-slate-800 font-mono border border-emerald-100">
{`const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  isActive: Boolean,
});

module.exports = mongoose.model("User", userSchema);`}
            </pre>
          </div>

          {/* MySQL Example */}
          <div className="rounded-2xl bg-white border border-sky-300/50 p-5 shadow-md">
            <p className="text-sm text-sky-600 font-semibold mb-3 flex items-center gap-2">
              <SiMysql className="text-sky-600" />
              Simple MySQL table & query
            </p>

            <pre className="text-[11px] md:text-xs bg-sky-50/70 p-4 rounded-lg overflow-x-auto text-slate-800 font-mono border border-sky-100">
{`-- create table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  is_active BOOLEAN
);

-- select active users
SELECT * FROM users WHERE is_active = 1;`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dbms;
