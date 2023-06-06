import Layout from "../components/layout";
import Head from "next/head";

export default function AnotherPage() {
  return (
    <Layout>
      <Head>
        <title>Another Page</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">Hello!</h1>
          <h1>Welcome to another page</h1>
        </div>
      </section>
    </Layout>
  );
}
