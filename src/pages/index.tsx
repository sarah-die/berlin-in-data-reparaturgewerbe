import { useState } from "react";
import clsx from "clsx";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  const [buttonSize, setButtonSize] = useState<boolean>(true);

  return (
    <Layout home>
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">Berlin (Charlottenburg) in Data - Reparaturgewerbe</h1>
            <p className="subtitle">
              Fetching data from berlin.de and using chart.js to display them.
            </p>
            <button
              className={clsx("button", buttonSize ? "is-small" : "is-large")}
              onClick={() => {
                setButtonSize(!buttonSize);
              }}
            >
              Button
            </button>
            <h2>
              <Link href="/anotherPage">To another Page</Link>
            </h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
