import Layout from "@/components/layout";
import Head from "next/head";
import SectorPieChart from "@/components/specificComponents/SectorPieChart";
import FaxPieChart from "@/components/specificComponents/FaxPieChart";
import ZipCodeBarChart from "@/components/specificComponents/ZipCodeBarChart";

/** This page renders charts that display different information about repairshops in Berlin. */

export default function RepairShopCharts() {
  return (
    <Layout>
      <Head>
        <title>Reparaturgewerbe nach Branchen</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Branchenverteilung von Reparaturshops in Berlin-Charlottenburg.
          </h1>
          <div className="text-container">
            Die Daten, auf denen die Grafiken basieren, werden von berlin.de zur
            Verfügung gestellt.
          </div>
          <SectorPieChart />
          <FaxPieChart />
          <ZipCodeBarChart />
        </div>
      </section>
    </Layout>
  );
}
