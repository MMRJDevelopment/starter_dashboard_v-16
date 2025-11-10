"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function VisitsByOutcome() {
  const data = {
    labels: ["Rescheduled", "No Answer", "Attended", "Cancelled"],
    datasets: [
      {
        label: "Team A",
        data: [110, 120, 160, 70],
        backgroundColor: "#4F46E5", // blue
        borderRadius: 8,
        barThickness: 40,
      },
      {
        label: "Team B",
        data: [90, 85, 130, 30],
        backgroundColor: "#E86F0D", // orange
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#555",
          font: {
            size: 13,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0,0,0,0.05)",
          drawBorder: false,
        },
        ticks: {
          color: "#555",
          font: {
            size: 12,
          },
          stepSize: 40,
        },
      },
    },
  };

  return (
    <div className="w-full  bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Visits by Outcome
      </h2>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
