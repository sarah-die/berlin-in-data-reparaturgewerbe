import Layout from "../components/layout";
import Head from "next/head";
import BarChart from "../components/BarChart";
import { useState } from "react";
import { UserData } from "../data/testData";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

export default function AnotherPage() {
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
        <title>Another Page</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello!</h1>
          <h1>Here are some basic charts displayed. The data used are just mock data.</h1>
          <div style={{ width: 700 }}>
            <BarChart chartData={userData} />
          </div>
          <div style={{ width: 700 }}>
            <LineChart chartData={userData} />
          </div>
          <div style={{ width: 700 }}>
            <PieChart chartData={userData} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
