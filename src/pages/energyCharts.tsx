import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import EnergyGermanyChart from "@/components/specificComponents/EnergyGermanyChart";

export default function EnergyCharts() {
  return (
    <Layout>
      <Head>
        <title>Energy Data</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">Explore Data on Energy</h1>
          <div className="text-container">
            The following graphs are based on energy data provided by
            ourworldindata.org. The goal is to recreate the graph shown here (
            <Link
              style={{ whiteSpace: "nowrap" }}
              href={"https://ourworldindata.org/energy"}
            >
              ourworldindata.org
            </Link>
            ) step by step.
          </div>
          <EnergyGermanyChart />
        </div>
      </section>
    </Layout>
  );
}
