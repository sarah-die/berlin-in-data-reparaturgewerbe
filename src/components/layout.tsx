import Head from "next/head";
// import styles from '../styles/_layout.scss'
import Link from "next/link";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        {/*Bulma requires this*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="header">
        {/*<NavBar />*/}
        <h1>titel</h1>
      </header>
      <main className="mainLayoutContainer" id="Outlet">
        {children}
      </main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
