import React, { FunctionComponent } from "react";
import Link from "next/link";

function BidTable() {
  const contracts = [
    {
      operator: "City Taxis",
      ref: "ABC1235",
      stage: "Ending",
      stagecolour: "orange",
      pickup: "S12",
      dropoff: "S5",
      pickups: 2,
      mileage: 9.2,
      vehicle: 4,
      timing: "AM & PM",
      days: "Mon, Wed, Fri",
    },
    {
      operator: "City Taxis",
      ref: "ABC234252",
      stage: "Active",
      stagecolour: "green",
      pickup: "S4",
      dropoff: "S5",
      pickups: 1,
      mileage: 3.2,
      vehicle: 4,
      timing: "AM",
      days: "Mon, Wed, Fri",
    },
    {
      operator: "City Taxis",
      ref: "AQW234252",
      stage: "Reviewing",
      stagecolour: "red",
      pickup: "S5",
      dropoff: "S5",
      pickups: 2,
      mileage: 2.2,
      vehicle: 4,
      timing: "AM & PM",
      days: "Mon, Tue, Wed, Thur, Fri",
    },
    {
      operator: "City Taxis",
      ref: "AEEW23452",
      stage: "Active",
      stagecolour: "green",
      pickup: "S10",
      dropoff: "S6",
      pickups: 1,
      mileage: 4.2,
      vehicle: 4,
      timing: "PM",
      days: "Mon, Tue, Wed, Thur, Fri",
    },
    {
      operator: "City Taxis",
      ref: "AEKK232132",
      stage: "Ending",
      stagecolour: "orange",
      pickup: "S10",
      dropoff: "S4",
      pickups: 2,
      mileage: 7.2,
      vehicle: 4,
      timing: "AM",
      days: "Mon, Tue",
    },
    {
      operator: "City Taxis",
      ref: "AASDK277732",
      stage: "Reviewing",
      stagecolour: "red",
      pickup: "S7",
      dropoff: "S4",
      pickups: 4,
      mileage: 9.2,
      vehicle: 7,
      timing: "AM & PM",
      days: "Mon, Tue, Thu",
    },
  ];
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
                    src="https://citytaxis.com/wp-content/uploads/2019/12/Screenshot-2019-12-23-at-15.51.18.png"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">
                    {contract.operator}
                  </div>
                  <div className="text-gray-400">Ref: {contract.ref}</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-${contract.stagecolour}-600`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-${contract.stagecolour}-600`}
                  ></span>
                  {contract.stage}
                </span>
              </td>
              <td className="px-6 py-4">{contract.pickup}</td>
              <td className="px-6 py-4">{contract.dropoff}</td>
              <td className="px-6 py-4">{contract.pickups}</td>
              <td className="px-6 py-4">{contract.mileage}</td>
              <td className="px-6 py-4">{contract.vehicle}</td>
              <td className="px-6 py-4">{contract.timing}</td>
              <td className="px-6 py-4">{contract.days}</td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </a>
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
