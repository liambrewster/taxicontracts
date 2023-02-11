import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Taxi Contracts Tendering</title>
        <meta name="description" content="Find and Bid for work to help fill your time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      
    </>
  );
};

export default Home;


