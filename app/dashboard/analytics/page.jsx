"use client";
import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics = () => {
  // Sample data for charts
  const formUsageData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Form Submissions",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
    ],
  };

  // Updated Form Engagement Data
  const formEngagementData = {
    labels: [
      "Survey Form",
      "Feedback Form",
      "Registration Form",
      "Application Form",
    ],
    datasets: [
      {
        label: "Views",
        data: [45, 67, 89, 23],
        backgroundColor: [
          "rgba(255, 159, 64, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  const completionRateData = {
    labels: ["Completed", "Incomplete"],
    datasets: [
      {
        label: "Completion Rate",
        data: [300, 50],
        backgroundColor: ["#4caf50", "#ff5252"],
        hoverBackgroundColor: ["#66bb6a", "#ff867c"],
      },
    ],
  };

  return (
    <div className="p-6 sm:p-10 min-h-screen bg-gray-100">
      <div className="mb-8 mt-12"> {/* Adjusted margin-top */}
        <h1 className="font-bold text-3xl text-gray-800 mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600">Track the performance of your AI forms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart - Form Submissions Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Form Submissions Over Time
          </h2>
          <Line data={formUsageData} />
        </div>

        {/* Bar Chart - Updated Form Engagement */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Form Engagement (Views)
          </h2>
          <Bar data={formEngagementData} />
        </div>

        {/* Pie Chart - Form Completion Rate */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2 flex justify-center items-center">
          <div className="w-full lg:w-1/3">
            {" "}
            {/* Set a smaller width for larger screens */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
              Form Completion Rate
            </h2>
            <Pie data={completionRateData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
