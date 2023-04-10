import { type NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession } from "next-auth/react";
import DashboardSideBar from "../../components/dashboardSideBar";
import Loading from "../../components/loading";
import { toast } from "react-toastify";
import AddContractForm from "../../components/addContractForm";

const NewContract: NextPage = () => {
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

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Add Your Contract | Taxi Contracts Tendering</title>
        <meta
          name="description"
          content="Add Your contracts ready to be bid upon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardSideBar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md">
          <AddContractForm />
        </div>
      </div>
    </>
  );
};

export default NewContract;
