import { type NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CardProfile from "../../components/cardProfile";
import DashboardSideBar from "../../components/dashboardSideBar";
import Loading from "../../components/loading";
import OperatorSignUp from "../../components/operatorSignUp";
import { toast } from "react-toastify";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { data: sessionData, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/").catch((error) => {
        console.error("Oh no!", error);
        toast(`Error occured, Check console`, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
    },
  });
  console.log(sessionData);

  if (status === "loading") {
    return <Loading />;
  }

  if (!sessionData.user.operatorId) {
    return <OperatorSignUp />;
  }

  return (
    <>
      <Head>
        <title>Dashboard | Taxi Contracts Tendering</title>
        <meta name="description" content="Add Your bids ready for tender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardSideBar />
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-9/12"></div>
        <div className="w-full px-4 lg:w-3/12">
          <CardProfile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
