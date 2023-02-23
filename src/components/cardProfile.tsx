import React from "react";
import Image from "next/image";
import Avatar from "../images/avatar.jpeg";
import { useSession } from "next-auth/react";

function CardProfile({}) {
  const { data: sessionData } = useSession();
  console.log(sessionData);

  return (
    <>
      <div className="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center px-4">
              <div className="relative">
                <Image width={124} height={124} src={Avatar} alt="progile" />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="mb-1 text-xl font-semibold leading-normal text-gray-700">
              {sessionData && <span> {sessionData.user?.name}</span>}
            </h3>
            <div className="mt-0 mb-1 text-sm font-bold uppercase leading-normal text-gray-400">
              Role: {sessionData && <span> {sessionData.user?.role}</span>}
            </div>
            <div className="mb-5  text-gray-600">
              {sessionData && <span> {sessionData.user?.email}</span>}
            </div>
          </div>
          <div className="flex flex-wrap justify-center border-t border-gray-200">
            <div className="flex w-full justify-center px-4">
              <div className="relative">
                <Image
                  width={124}
                  height={124}
                  src={Avatar}
                  alt="Operator Logo"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="mb-1 text-xl font-semibold leading-normal text-gray-700">
              City Taxis
            </h3>
            <div className="mt-0 mb-1 text-sm font-bold uppercase leading-normal text-gray-400">
              Plan: Basic / Free
            </div>
            <div className="mb-2  text-gray-600">Liam@LiamBrewster.co.uk</div>
            <div className="mb-2  text-gray-600">011423939393</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
