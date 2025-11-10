"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashbordOverviwe() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Chases Sent",
        data: [13, 19, 15, 23, 18, 26, 22, 28, 19, 15],
        borderColor: "rgba(54, 72, 255, 1)",
        backgroundColor: "rgba(54, 72, 255, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(54, 72, 255, 1)",
        pointBorderWidth: 2,
        pointRadius: 4,
        tension: 0.4, // smooth curve
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: "rgba(54, 72, 255, 1)",
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          padding: 15,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: false,
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          color: "#444",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          drawBorder: false,
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          color: "#444",
          stepSize: 7,
        },
      },
    },
  };

  return (
    <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-[#141414] font-Arial text-base not-italic font-normal leading-6 mb-4">
        Repair Chases Over Time
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}
