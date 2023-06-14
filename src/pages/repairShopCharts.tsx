import Layout from "@/components/layout";
import Head from "next/head";
import { getRepairshopData, Shop } from "@/data/repairShopData";
import { useEffect, useMemo, useState } from "react";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";

/** This component renders charts that display the different sectors that offer the option to repair things. */

type BranchenType = { branche: string; numb: number };

export default function RepairShopCharts() {
  // get raw data from the API
  const [repairShopData, setRepairShopData] = useState<Shop[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data: Shop[] = await getRepairshopData();
        setRepairShopData(data);
      } catch (err: any) {
        console.error(err.message);
      }
    };
    fetch();
  }, []);

  // process the data according to the requirement that only the different sectors are still present
  const numberOfBranchen = useMemo(() => {
    const branchen: string[] = repairShopData.map((shop) => shop.branche);

    const temp: BranchenType[] = [];
    branchen.forEach((br) => {
      const index: number = temp.findIndex((el) => el.branche === br);
      if (index === -1) {
        // sector does not exist
        temp.push({ branche: br, numb: 1 });
      } else {
        // sector does already exist
        temp[index].numb++;
      }
    });
    return temp;
  }, [repairShopData]);

  // process the data the way they are needed to be displayed in the charts
  const chartData = useMemo(
    () => ({
      labels: numberOfBranchen.map((data: BranchenType) => data.branche),
      datasets: [
        {
          label: "Branchen",
          data: numberOfBranchen.map((data: BranchenType) => data.numb),
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
    [numberOfBranchen]
  );

  return (
    <Layout>
      <Head>
        <title>Repair Shops</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Some charts about repair shops in Berlin-Charlottenburg
          </h1>
          <div className="text-container">
            The data on which the graphs are based are provided by berlin.de.
          </div>
          <div className="chart-container">
            <BarChart chartData={chartData} />
          </div>
          <div className="chart-container">
            <LineChart chartData={chartData} />
          </div>
          <div className="chart-container">
            <PieChart chartData={chartData} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
