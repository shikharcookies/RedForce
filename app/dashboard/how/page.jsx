"use client";

import React from "react";
import Footer from "../_components/Footer";
// import { Footer } from "./_components/Footer"; // Adjust path if needed
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-10 text-[#720137] flex-grow">
        <h1 className="text-4xl font-bold mb-6">How RedForce Works</h1>
        <p className="text-lg mb-4 text-[#5E0009]">
          RedForce is your AI-powered interview coach. Here’s how to make the most of it:
        </p>

        <ol className="list-decimal ml-6 space-y-4 text-lg text-[#720137]">
          <li>Sign in with your account and go to the Dashboard.</li>
          <li>Select a job role or industry you're preparing for.</li>
          <li>RedForce generates tailored interview questions.</li>
          <li>You respond using voice or text, and the AI gives feedback instantly.</li>
          <li>Upgrade to unlock advanced analytics, unlimited questions, and resume tips.</li>
        </ol>

        <p className="mt-6 text-[#590054]">
          Whether you're preparing for your first job or your next big opportunity — RedForce has your back.
        </p>
      </div>

      <Footer/>
    </div>
  );
}

