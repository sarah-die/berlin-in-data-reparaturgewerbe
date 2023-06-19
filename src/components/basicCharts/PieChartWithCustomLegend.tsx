import { ChartProps, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ChartOptions } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
import { useEffect, useRef, useState } from "react";
import BasicLegend from "@/components/legends/BasicLegend";

ChartJS.register(CategoryScale, autocolors);

type PieChartProps = ChartProps<"pie">;
export default function PieChartWithCustomLegend(props: {
  chartData: PieChartProps["data"];
  title: string;
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
        display: true,
        text: props.title,
        fontSize: 30, // ToDo
      },
    },
  };

  useEffect(() => {
    const refLegendItems = (pieRef.current as any)?.legend.legendItems || [];
    setLegendItems(refLegendItems);
  }, [props.chartData, pieRef.current]);

  console.log(legendItems);

  return (
    <>
      <div className="chart-container">
        <Pie
          data={props.chartData as any}
          // plugins={autocolors}
          options={options}
          ref={pieRef}
        />
      </div>
      <BasicLegend legendItems={legendItems} legendTitle={"Some test title"} />
    </>
  );
}
