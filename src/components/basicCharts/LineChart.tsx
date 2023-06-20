import { ChartProps, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

/** Basic pieChart component. That renders the passed chartData. */

export default function LineChart(props: { chartData: ChartProps<"line"> }) {
  // options={} is optional
  return (
    <div className="chart-container">
      <Line
        data={props.chartData as any}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
