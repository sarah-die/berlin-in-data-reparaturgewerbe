import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

/** Basic pieChart component. That renders the passed chartData. */

export default function LineChart({ chartData }) {
  // options={} is optional
  return <Line data={chartData} options={{ maintainAspectRatio: false }} />;
}
