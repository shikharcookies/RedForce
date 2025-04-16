"use client";

import React from "react";
import Footer from "../_components/Footer";

export default function Page() {
  return (
    <div className="p-10 text-black">
      <h1 className="text-4xl font-bold mb-6">Interview Questions</h1>
      <p className="text-lg text-black">
        Here's a curated list of mock interview questions tailored to help you prepare like a pro:
      </p>

      <div className="mt-8 space-y-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-xl text-[#5E0009]">1. Tell me about yourself.</h2>
          <p className="text-sm text-[#5E0009]">A classic opener to evaluate communication and self-awareness.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-xl text-[#5E0009]">2. What are your strengths and weaknesses?</h2>
          <p className="text-sm text-[#5E0009]">Tests emotional intelligence and your ability to self-reflect.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-xl text-[#5E0009]">3. Describe a challenging situation and how you handled it.</h2>
          <p className="text-sm text-[#5E0009]">Assesses problem-solving skills and composure under pressure.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-xl text-[#5E0009]">4. Why do you want to work at this company?</h2>
          <p className="text-sm text-[#5E0009]">Evaluates your understanding of the company and your motivation.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-xl text-[#5E0009]">5. Where do you see yourself in 5 years?</h2>
          <p className="text-sm text-[#5E0009]">Checks long-term vision, ambition, and alignment with company goals.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
