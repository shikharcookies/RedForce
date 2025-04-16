"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-white">
      <div className="text-center space-y-6">
        {/* Logo Section */}
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="RedForce Logo"
            width={200}
            height={200}
            className="animate__animated animate__fadeIn"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold sm:text-5xl text-[#720137]">
          Welcome to RedForce
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#590054]">
          RedForce is an AI-powered mock interview platform designed to help you ace your interviews with realistic simulations and detailed feedback.
        </p>

        {/* Call to Action Button */}
        <div>
          <Link href="/dashboard">
            <Button className="bg-[#42002E] text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-[#5E0009] transition duration-200">
              Start Your Mock Interview
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-10 space-y-5">
          <h2 className="text-2xl font-semibold text-[#720137]">Why Choose RedForce?</h2>
          <ul className="list-disc space-y-2 text-lg text-[#42002E]">
            <li>AI-powered mock interviews with real-world scenarios</li>
            <li>Instant feedback on your responses, including ratings and areas of improvement</li>
            <li>Comprehensive question bank covering multiple industries and roles</li>
            <li>Track your progress and improve your interview skills over time</li>
          </ul>
        </div>

        {/* Footer Section */}
        <footer className="mt-20 text-[#5E0009]">
          <p>&copy; 2025 RedForce, All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}
