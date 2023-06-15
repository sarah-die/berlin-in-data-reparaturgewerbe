import Layout from "../components/layout";
import Head from "next/head";
import BarChart from "../components/basicCharts/BarChart";
import { useState } from "react";
import { Userdata, UserData } from "@/data/testData";
import LineChart from "../components/basicCharts/LineChart";
import PieChart from "../components/basicCharts/PieChart";
import ChartWithCustomLegend from "@/components/basicCharts/ChartWithCustomLegend";

export default function TestCharts() {
  // chart js requires an object that looks like the initialState
  const [userData, setUserData] = useState({
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
  });

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
            <BarChart chartData={userData} title={"basic bar chart"} />
          </div>
          <div className="chart-container">
            <LineChart chartData={userData} />
          </div>
          <div className="chart-container">
            <PieChart chartData={userData} title={"basic bar chart"} />
          </div>
          <div className="chart-container">
            <ChartWithCustomLegend
              chartData={userData}
              title={"This is the titel"}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
