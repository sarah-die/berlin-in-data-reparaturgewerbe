import Layout from "@/components/layout";
import Head from "next/head";
import { getRepairshopData, Shop } from "@/data/repairShopData";
import { useEffect, useState } from "react";

export default function RepairShopCharts() {
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
        </div>
      </section>
    </Layout>
  );
}
