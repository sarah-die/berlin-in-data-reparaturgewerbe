import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
ChartJS.register(CategoryScale, autocolors);

export default function PieChart(props: { chartData; title: string }) {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      autocolors: {
        mode: "label",
      },
      legend: {
        display: true,
        align: "center",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          boxHeight: 8,
          fontColor: "#323130",
          fontSize: 14,
        },
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  return <Pie data={props.chartData} options={options} />;
}
