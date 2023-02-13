import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import BidTable from "../components/bidtable";
import Footer from "../components/footer";
import Header from "../components/header";

const Contracts: NextPage = () => {
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
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-3 md:py-12">
          <div className="mb-1 flex w-full flex-col text-center md:mb-5">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-yellow-500">
              Get Bidding Below
            </h2>
            <h1 className="title-font mb-2 text-xl font-medium text-gray-900 sm:text-5xl">
              Taxi Contracts
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Please see our list of current contracts at the moment. If you
              would like to bid on any of the jobs listed below, please click
              the Pencil Icon and fill out the form. Your bid may be subject to
              any commissions applied by the operator.
            </p>
          </div>
        </div>
      </section>
      <BidTable />
      <Footer />
    </>
  );
};

export default Contracts;
