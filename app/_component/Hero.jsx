"use client";
import { useUser } from "@clerk/nextjs";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";

function Hero() {
  const { isSignedIn } = useUser(); // Access user sign-in status

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[url('/assets/grid.svg')] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white">
        <div className="absolute inset-0"></div>{" "}
        {/* Overlay for text visibility */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center lg:justify-center">
          <div className="mx-auto max-w-xl">
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl text-black">
              Simplify Your Survey Process
              <strong className="block font-extrabold text-primary sm:block">
                With AI-Powered Efficiency
              </strong>
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500">
              Effortlessly design, distribute, and analyze surveys using
              advanced AI tools. Experience quick setup, insightful feedback,
              and intuitive data visualization.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-purple-600 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
                href={isSignedIn ? "/create-survey" : "/login"} // Redirect based on sign-in status
              >
                Start Your Survey
              </a>

              <a
                className="block rounded px-12 py-3 text-sm font-medium text-primary shadow-lg hover:text-purple-600 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
                href={isSignedIn ? "/learnmore" : "/login"}
              >
                Discover Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* "How It Works" Section */}
      <section className="bg-gray-100 py-16 min-h-screen md:py-32">
        <div className="mx-auto max-w-screen-xl px-4">
          {/* Introduction */}
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold md:text-3xl">How It Works</h2>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              Discover how easy it is to create, edit, and share your forms with
              our platform. Our streamlined process ensures you get results
              quickly and efficiently. Here’s a step-by-step guide to help you
              get started:
            </p>
          </div>

          {/* Steps */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <a
              className="block rounded-xl border border-purple-400 p-6 shadow-xl transition-transform transform hover:scale-105 hover:border-2 hover:border-purple-600 hover:shadow-purple-500/10"
              href="#"
            >
              <AtomIcon className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-lg font-bold text-black">
                Craft Your Form
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Start by designing your form with customizable features tailored
                to your needs. Use our intuitive drag-and-drop interface to
                create professional forms in minutes.
              </p>
            </a>

            {/* Step 2 */}
            <a
              className="block rounded-xl border border-purple-400 p-6 shadow-xl transition-transform transform hover:scale-105 hover:border-2 hover:border-purple-600 hover:shadow-purple-500/10"
              href="#"
            >
              <Edit className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-lg font-bold text-black">
                Refine and Edit
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Fine-tune your form’s details and layout with real-time editing.
                Preview your changes across different devices to ensure a
                seamless user experience.
              </p>
            </a>

            {/* Step 3 */}
            <a
              className="block rounded-xl border border-purple-400 p-6 shadow-xl transition-transform transform hover:scale-105 hover:border-2 hover:border-purple-600 hover:shadow-purple-500/10"
              href="#"
            >
              <Share2 className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-lg font-bold text-black">
                Share and Gather Feedback
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Share your form effortlessly via email, social media, or direct
                links. Collect responses instantly and analyze the feedback to
                make data-driven decisions.
              </p>
            </a>

            {/* New Step 4 */}
            <a
              className="block rounded-xl border border-purple-400 p-6 shadow-xl transition-transform transform hover:scale-105 hover:border-2 hover:border-purple-600 hover:shadow-purple-500/10"
              href="#"
            >
              <div className="h-8 w-8 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chart-line"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-black">
                Monitor and Analyze
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Utilize our advanced analytics tools to track form performance.
                Monitor key metrics, user interactions, and make informed
                adjustments to improve engagement and results.
              </p>
            </a>

            {/* New Step 5 */}
            <a
              className="block rounded-xl border border-purple-400 p-6 shadow-xl transition-transform transform hover:scale-105 hover:border-2 hover:border-purple-600 hover:shadow-purple-500/10"
              href="#"
            >
              <div className="h-8 w-8 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-workflow"
                >
                  <rect width="8" height="8" x="3" y="3" rx="2" />
                  <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                  <rect width="8" height="8" x="13" y="13" rx="2" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-black">
                Automate and Integrate
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Automate workflows and integrate with your favorite tools.
                Connect with CRM systems, email platforms, and other
                productivity tools to streamline your processes.
              </p>
            </a>

            {/* New Step 6 */}
            <a
              className="block rounded-xl border border-purple-400 p-6 shadow-xl transition-transform transform hover:scale-105 hover:border-2 hover:border-purple-600 hover:shadow-purple-500/10"
              href="#"
            >
              <div className="h-8 w-8 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-black">
                Explore and Expand
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Explore additional features and expand your form capabilities.
                Discover new tools and enhancements to continuously improve your
                form-building experience.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white py-8 mt-auto">
        <div className="container mx-auto text-center px-4">
          <p className="text-base font-medium mb-4">
            &copy; {new Date().getFullYear()} Terrform. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition duration-300 text-base"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/terms-of-service"
              className="text-gray-300 hover:text-white transition duration-300 text-base"
            >
              Terms of Service
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            <p>
              Made with <span className="text-red-400">&hearts;</span> by
              Soumojit Banerjee
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Hero;
