import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import DashboardSideBar from "../../components/dashboardSideBar";

// TODO: make private route must be signed in user

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Taxi Contracts Tendering</title>
        <meta name="description" content="Add Your bids ready for tender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardSideBar />
    </>
  );
};

export default Dashboard;
