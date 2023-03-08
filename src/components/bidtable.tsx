import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { RiAuctionLine } from "react-icons/ri";
import { api } from "../utils/api";

interface contractItem {
  id: string;
  internalId: string;
  operatorId: string;
  status: string;
  pickup: string;
  destination: string;
  collections: number;
  distance: number;
  vehicleSize: number;
  timings: string;
  days: string;
  journeytype: string;
}

interface contractItems extends Array<contractItem> {}

function BidTable() {
  const { data: contracts } = api.contract.getAll.useQuery();

  return (
    <div className="mx-2 overflow-x-auto rounded-lg border border-gray-200 shadow-md md:mx-10">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className=" px-6 py-4 font-medium text-gray-900">
              Operator
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Status
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Type
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Pickup
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Drop-off
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Pickups
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Est Mileage
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Vehicle Size
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Timings
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              No of Days
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {contracts?.map((contract, idx) => (
            <tr className="hover:bg-gray-50" key={idx}>
              <th className=" flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={`https://eu.ui-avatars.com/api/?name=${contract.operator.name}&size=250`}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">
                    {contract.operator.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    Ref: {contract.internalId}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <Stage label={contract.status} />
              </td>
              <td className="px-6 py-4">{contract.journeytype}</td>
              <td className="px-6 py-4">{contract.pickup}</td>
              <td className="px-6 py-4">{contract.destination}</td>
              <td className="px-6 py-4">{contract.collections}</td>
              <td className="px-6 py-4">{contract.distance}</td>
              <td className="px-6 py-4">{contract.vehicleSize}</td>
              <td className="px-6 py-4">{contract.timings}</td>
              <td className="px-6 py-4">{contract.days}</td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <RiAuctionLine size="28" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BidTable;

const Stage = ({ label }: { label: string }) => {
  let text = "Active";
  let backgroundColour = "bg-green-600";
  let textColour = "text-green-600";

  switch (label) {
    case "ACTIVE":
      text = "Active";
      backgroundColour = "bg-green-600";
      textColour = "text-green-600";
      break;
    case "INREVIEW":
      text = "Reviewing";
      backgroundColour = "bg-red-600";
      textColour = "text-red-600";
      break;
    case "CLOSED":
      text = "Closed";
      backgroundColour = "bg-red-600";
      textColour = "text-red-600";
      break;
    case "NODATA":
      text = "No Data";
      backgroundColour = "bg-red-600";
      textColour = "text-red-600";
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold ${textColour}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${backgroundColour}`}></span>
      {text}
    </span>
  );
};

const blankData = () => {
  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className=" px-6 py-4 font-medium text-gray-900">
            Operator
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Status
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Type
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Pickup
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Drop-off
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Pickups
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Est Mileage
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Vehicle Size
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Timings
          </th>

          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            No of Days
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        <tr className="hover:bg-gray-50">
          <th className=" flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src={`https://eu.ui-avatars.com/api/?name=No+Data&size=250`}
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">
                No Current Contracts
              </div>
              <div className="text-xs text-gray-400">Ref:</div>
            </div>
          </th>
          <td className="px-6 py-4">
            <Stage label="NODATA" />
          </td>
          <td className="px-6 py-4">NONE</td>
          <td className="px-6 py-4">😢</td>
          <td className="px-6 py-4">😢</td>
          <td className="px-6 py-4">0</td>
          <td className="px-6 py-4">0</td>
          <td className="px-6 py-4">0</td>
          <td className="px-6 py-4">0</td>
          <td className="px-6 py-4">😢</td>
          <td className="px-6 py-4">
            😢
            <div className="flex justify-end gap-4">
              <RiAuctionLine size="28" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
