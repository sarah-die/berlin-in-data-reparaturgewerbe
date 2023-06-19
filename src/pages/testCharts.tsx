import Layout from "../components/layout";
import Head from "next/head";
import BarChart from "../components/basicCharts/BarChart";
import { useMemo } from "react";
import { Userdata, UserData } from "@/data/testData";
import LineChart from "../components/basicCharts/LineChart";
import PieChart from "../components/basicCharts/PieChart";
import PieChartWithCustomLegend from "@/components/basicCharts/PieChartWithCustomLegend";
import { ChartData } from "chart.js";

/** Test component that visualizes different types of charts. The dataset is just mock-data. */

export default function TestCharts() {
  // chart js requires an object that looks like this
  const chartData = useMemo<ChartData<"pie">>(
    () => ({
      labels: UserData.map((data: Userdata) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data: Userdata) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    }),
    [UserData]
  );

  return (
    <Layout>
      <Head>
        <title>Test Charts</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello!</h1>
          <div className="text-container">
            Here are some basic charts displayed. The data used are just mock
            data. This pages purpose is to get the right css-settings and
            chart-options. Focus was on making the charts responsive.
          </div>
          <div className="text-container">
            Note to myself: Chart.js uses its parent container to update the
            canvas render and display sizes. For that "position: relative" is
            necessary. "MaintainAspectRatio: false" to not automatically
            calculate the height of charts.
          </div>
          <div className="chart-container">
            <BarChart chartData={chartData} title={"basic bar chart"} />
          </div>
          <div className="chart-container">
            <LineChart chartData={chartData} />
          </div>
          <div className="chart-container">
            <PieChart chartData={chartData} title={"basic pie chart"} />
          </div>
          <div className="text-container">
            Charts down here have a custom legend and not the default one from
            chart.js. Reason to do so is, that the legend counts to the height
            of the charts. So the same PieChart with one big and one small
            legend (above or below the chart) have a different size. Since one
            legend is taking up more space than the other.
          </div>
          <PieChartWithCustomLegend
            chartData={chartData}
            title={"This is a chart with a custom legend"}
            legendTitle={"The title from the legend"}
          />
          <PieChartWithCustomLegend
            chartData={chartData}
            title={"This is a chart with a custom legend"}
            legendTitle={"The title from the legend"}
          />
        </div>
      </section>
    </Layout>
  );
}
