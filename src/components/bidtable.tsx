import React, { FunctionComponent } from "react";
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
  type: string;
}

interface contractItems extends Array<contractItem> {}

function BidTable() {
  const data = "";

  const backUpArray = {
    id: "1",
    internalId: "",
    operatorId: "No Current Contracts",
    status: "nodata",
    pickup: "😢",
    destination: "😭",
    collections: 0,
    distance: 0,
    vehicleSize: 0,
    timings: "😐",
    days: "😐",
    type: "Regular",
  };
  const contracts: contractItems = [];
  if (data.length) {
    contracts.push();
  }
  if (!data.length) {
    contracts.push(backUpArray);
  }
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
          {contracts.map((contract, idx) => (
            <tr className="hover:bg-gray-50" key={idx}>
              <th className=" flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={`https://eu.ui-avatars.com/api/?name=${contract.operatorId}&size=250`}
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">
                    {contract.operatorId}
                  </div>
                  <div className="text-gray-400">
                    Ref: {contract.internalId}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <Stage label={contract.status} />
              </td>
              <td className="px-6 py-4">{contract.type}</td>
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
    case "active":
      text = "Active";
      backgroundColour = "bg-green-600";
      textColour = "text-green-600";
      break;
    case "review":
      text = "Reviewing";
      backgroundColour = "bg-red-600";
      textColour = "text-red-600";
      break;
    case "closed":
      text = "Closed";
      backgroundColour = "bg-red-600";
      textColour = "text-red-600";
      break;
    case "nodata":
      text = "No Data";
      backgroundColour = "bg-red-600";
      textColour = "text-red-600";
      break;
    case "ending":
      text = "Ending";
      backgroundColour = "bg-yellow-600";
      textColour = "text-yellow-600";
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
