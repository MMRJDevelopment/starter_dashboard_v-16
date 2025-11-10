"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SurveyResponsesOverview() {
  const data = {
    labels: ["Completed", "Pending", "Not Started"],
    datasets: [
      {
        data: [46, 26, 28],
        backgroundColor: ["#4F46E5", "#E86F0D", "#555555"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // we'll make custom legend
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-2xl  shadow p-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
        Survey Responses Overview
      </h2>

      {/* Pie Chart */}
      <div className="w-70 h-74 mb-3">
        <Pie data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4F46E5]" />
            <span className="text-gray-700">Completed</span>
          </div>
          <span className="text-gray-700 font-medium">46%</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E86F0D]" />
            <span className="text-gray-700">Pending</span>
          </div>
          <span className="text-gray-700 font-medium">26%</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#555555]" />
            <span className="text-gray-700">Not Started</span>
          </div>
          <span className="text-gray-700 font-medium">28%</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 mt-4 mb-2"></div>

      {/* Footer */}
      <p className="text-sm text-gray-700 text-center">
        Total surveys sent: <span className="font-medium">342</span>
      </p>
    </div>
  );
}
