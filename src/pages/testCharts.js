import Layout from "../components/layout";
import Head from "next/head";
import BarChart from "../components/BarChart";
import { useState } from "react";
import { UserData } from "../data/testData";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

export default function TestCharts() {
  // chart js requires an object that looks like the initialState
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
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
            data. This pages purpose is to get the right css-settings and chart-options. Focus was
            on making the charts responsive.
          </div>
          <div className="text-container">
            Note to myself: Chart.js uses its parent container to update the
            canvas render and display sizes. For that "position: relative" is
            necessary. "MaintainAspectRatio: false" to not automatically
            calculate the height of charts.
          </div>
          <div className="chart-container">
            <BarChart chartData={userData} />
          </div>
          <div className="chart-container">
            <LineChart chartData={userData} />
          </div>
          <div className="chart-container">
            <PieChart chartData={userData} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
