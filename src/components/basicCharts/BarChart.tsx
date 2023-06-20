import { Bar, ChartProps } from "react-chartjs-2";
import { Chart as ChartJS, ChartOptions } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
ChartJS.register(CategoryScale, autocolors);

/** Basic pieChart component. That renders the passed chartData and the (optional) title. */

export default function BarChart(props: {
  chartData: ChartProps<"bar">;
  title?: string;
}) {
  const options: ChartOptions<"bar"> = {
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
  return (
    <div className="chart-container">
      <Bar data={props.chartData as any} options={options} />
    </div>
  );
}
