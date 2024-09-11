"use client";
import { useUser } from "@clerk/nextjs";
import { CheckCircle, ArrowRightCircle } from "lucide-react";
import React from "react";

function LearnMore() {
  const { isSignedIn } = useUser(); // Access user sign-in status
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-purple-700 to-purple-500 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
            Learn More About Our Platform
          </h1>
          <p className="mt-4 text-lg text-gray-200 sm:text-xl">
            Discover the power of AI-driven form creation, seamless
            collaboration, and insightful analytics.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-purple-100">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl drop-shadow-md">
            Unlock the Full Potential of AI-Driven Forms
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Our platform simplifies form creation and enhances your ability to
            collect, analyze, and act on data efficiently. Discover how easy it
            is to create and share forms with advanced features.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 shadow-md hover:shadow-2xl hover:bg-gradient-to-br from-purple-100 to-purple-50 transition-transform transform hover:scale-105 duration-300"
              >
                <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-purple-400">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            Sign up today and start creating AI-powered forms in minutes. Get
            actionable insights and real-time results, all in one place.
          </p>
          <div className="mt-8">
            <a
              href={isSignedIn ? "/dashboard" : "/login"}
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-lg font-medium text-purple-700 shadow-lg transition hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring focus:ring-gray-300"
            >
              Get Started Now
              <ArrowRightCircle className="ml-2 h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature data
const features = [
  {
    title: "AI-Assisted Form Creation",
    description:
      "Leverage the power of AI to generate and refine forms in moments, not hours. Customize your forms with ease to fit your needs.",
    icon: CheckCircle,
  },
  {
    title: "Seamless Collaboration",
    description:
      "Share forms instantly with your team and collect feedback effortlessly. Enjoy real-time collaboration with our intuitive platform.",
    icon: CheckCircle,
  },
  {
    title: "Advanced Analytics",
    description:
      "Receive instant feedback with dynamic charts and detailed insights. Make informed decisions based on real-time data analysis.",
    icon: CheckCircle,
  },
  {
    title: "Mobile-Optimized Forms",
    description:
      "Design forms that work seamlessly across all devices, ensuring a great user experience no matter the platform.",
    icon: CheckCircle,
  },
  {
    title: "Quick and Easy Sharing",
    description:
      "Share your forms with a single click and start gathering responses in seconds, whether through a link or embedded in a website.",
    icon: CheckCircle,
  },
  {
    title: "Data Security and Privacy",
    description:
      "We prioritize the security of your data, ensuring that all responses and analytics are protected with industry-leading encryption.",
    icon: CheckCircle,
  },
];

export default LearnMore;
