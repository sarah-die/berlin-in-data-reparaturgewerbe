import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

export default function BarChart({ chartData }) {
  // options={} is optional
  return <Bar data={chartData} />;
}
