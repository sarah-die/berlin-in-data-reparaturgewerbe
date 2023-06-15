import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
ChartJS.register(CategoryScale, autocolors);

export default function ChartWithCustomLegend(props: {
  chartData;
  title: string;
}) {
  const plugintest: any = {

  };

  // https://codesandbox.io/s/react-playground-forked-xzm0sx?file=/index.js -> autocolor
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
      },
      title: {
        display: true,
        text: props.title,
        fontSize: 30, // ToDo
      },
    },
  };

  return (
    <>
      <Pie
        data={props.chartData}
        // plugins={autocolors}
        options={options}
      />
      <div id="js-legend"></div>
    </>
  );
}
