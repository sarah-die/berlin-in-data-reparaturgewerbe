import { ChartProps, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ChartOptions } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
import { useEffect, useRef, useState } from "react";
import BasicLegend from "@/components/legends/BasicLegend";

ChartJS.register(CategoryScale, autocolors);

type PieChartProps = ChartProps<"pie">;

/** Basic PieChart-component with custom legend that is excluded from the charts canvas. */

export default function PieChartWithCustomLegend(props: {
  chartData: PieChartProps["data"];
  title?: string;
  legendTitle: string;
}) {
  const pieRef = useRef(null);
  const [legendItems, setLegendItems] = useState<
    {
      text: string | number;
      fillStyle: string;
    }[]
  >([]);

  // https://codesandbox.io/s/react-playground-forked-xzm0sx?file=/index.js -> autocolor
  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // autocolors: {
      //   mode: "data",
      // },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const refLegendItems = (pieRef.current as any)?.legend.legendItems || [];
    setLegendItems(refLegendItems);
  }, [props.chartData, pieRef.current]);

  // console.log(pieRef.current)

  return (
    <>
      <BasicLegend legendItems={legendItems} legendTitle={props.legendTitle} />
      <div className="chart-container">
        <Pie
          data={props.chartData as any}
          // plugins={autocolors}
          options={options}
          ref={pieRef}
        />
      </div>
    </>
  );
}
