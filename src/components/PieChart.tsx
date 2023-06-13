import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

export default function PieChart({ chartData }) {
  // options={} is optional
  return <Pie data={chartData} options={{ maintainAspectRatio: false }} />;
}
