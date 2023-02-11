import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Taxi Contracts Tendering</title>
        <meta
          name="description"
          content="Find and Bid for work to help fill your time"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      {/* Add Testimonial section with driver feedback */}
      {/* Add Users section with badges of companies using it */}
      <Footer />
    </>
  );
};

export default Home;
