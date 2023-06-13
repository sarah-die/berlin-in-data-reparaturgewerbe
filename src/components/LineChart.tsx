import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

export default function LineChart({ chartData }) {
    // options={} is optional
    return <Line data={chartData} />;
}
