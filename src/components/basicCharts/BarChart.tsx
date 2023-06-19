import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
ChartJS.register(CategoryScale, autocolors);

/** Basic pieChart component. That renders the passed chartData and the (optional) title. */

export default function BarChart(props: { chartData: any; title?: string }) {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      autocolors: {
        mode: "data",
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  // options={} is optional
  // true is the defautl value for maintainAspectRatio and responsive
  return <Bar data={props.chartData} options={options} />;
}
