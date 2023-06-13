import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">
              Berlin (Charlottenburg) in Data - Reparaturgewerbe
            </h1>
            <p className="subtitle">
              Fetching data from berlin.de and using chart.js to display them.
            </p>
            <div className="text-container">
              The main purpose from this web-project is getting practice with
              fetching and displaying data. To do so I'm using chartJS react.
            </div>
            <h2>
              <Link href="/testCharts">View some test charts</Link>
            </h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
