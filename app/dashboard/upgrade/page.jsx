"use client";
import PricingPlan from "@/app/_data/PricingPlan";
import { useUser } from "@clerk/nextjs";
import React from "react";

function Upgrade() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-wrap gap-6 justify-center sm:justify-between">
          {/* Basic Plan */}
          <div className="relative rounded-2xl border border-gray-300 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[300px]">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              Popular
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Basic Plan
              </h2>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                ₹299
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>50 AI Forms</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>500 Form Responses</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Basic Email Support</span>
              </li>
            </ul>
            <a
              href={
                PricingPlan[0].link +
                "?prefilled_email=" +
                user?.primaryEmailAddress.emailAddress
              }
              target="_blank"
              className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700"
            >
              Choose Basic
            </a>
          </div>

          {/* Standard Plan */}
          <div className="relative rounded-2xl border border-gray-300 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[300px]">
            <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              Standard
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Standard Plan
              </h2>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                ₹899
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>100 AI Forms</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>1,000 Form Responses</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Priority Email Support</span>
              </li>
            </ul>
            <a
              href={
                PricingPlan[1].link +
                "?prefilled_email=" +
                user?.primaryEmailAddress.emailAddress
              }
              target="_blank"
              className="mt-8 block rounded-full border border-yellow-600 bg-yellow-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-yellow-700"
            >
              Choose Standard
            </a>
          </div>

          {/* Premium Plan */}
          <div className="relative rounded-2xl border border-gray-300 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[300px]">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg">
              Most Popular
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Premium Plan
              </h2>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                ₹1999
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Unlimited AI Forms</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Unlimited Form Responses</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Unlimited Form Responses</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Access to Exclusive Features</span>
              </li>
            </ul>

            <a
              href={
                PricingPlan[1].link +
                "?prefilled_email=" +
                user?.primaryEmailAddress.emailAddress
              }
              target="_blank"
              className="mt-8 block rounded-full border border-green-600 bg-green-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-green-700"
            >
              Choose Premium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
