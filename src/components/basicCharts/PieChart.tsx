import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
ChartJS.register(CategoryScale, autocolors);

/** Basic pieChart component. That renders the passed chartData and the (optional) title. */

export default function PieChart(props: { chartData; title?: string }) {
  // https://codesandbox.io/s/react-playground-forked-xzm0sx?file=/index.js
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // autocolors: {
      //   mode: "data",
      // },
      legend: {
        display: true,
        align: "center",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          boxHeight: 8,
          fontColor: "#323130",
          fontSize: 40, // ToDo
        },
      },
      title: {
        display: true,
        text: props.title,
        fontSize: 30, // ToDo
      },
    },
  };

  return (
    <Pie
      data={props.chartData}
      // plugins={autocolors}
      options={options}
    />
  );
}
