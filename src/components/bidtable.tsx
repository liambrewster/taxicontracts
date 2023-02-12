import Link from "next/link";

function BidTable() {
  return (
    <div className="mx-10 overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
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
          <tr className="hover:bg-gray-50">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://citytaxis.com/wp-content/uploads/2019/12/Screenshot-2019-12-23-at-15.51.18.png"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">City Taxis</div>
                <div className="text-gray-400">Ref: ACV124378</div>
              </div>
            </th>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-orange-600">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600"></span>
                Ending
              </span>
            </td>
            <td className="px-6 py-4">S5</td>
            <td className="px-6 py-4">S5</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">4</td>
            <td className="px-6 py-4">
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Mon Am & Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Wed Am & Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Fri Am & Pm
                </span>
              </div>
            </td>
            <td className="px-6 py-4">3</td>
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
          <tr className="hover:bg-gray-50">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://citytaxis.com/wp-content/uploads/2019/12/Screenshot-2019-12-23-at-15.51.18.png"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">City Taxis</div>
                <div className="text-gray-400">Ref: ACV123456</div>
              </div>
            </th>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 py-4">S12</td>
            <td className="px-6 py-4">S5</td>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">9.1</td>
            <td className="px-6 py-4">4</td>
            <td className="px-6 py-4">
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Mon Am & Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Tue Am & Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Wed Am & Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Thur Am & Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Fri Am & Pm
                </span>
              </div>
            </td>
            <td className="px-6 py-4">5</td>
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
          <tr className="hover:bg-gray-50">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://citytaxis.com/wp-content/uploads/2019/12/Screenshot-2019-12-23-at-15.51.18.png"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">City Taxis</div>
                <div className="text-gray-400">Ref: AWQ23456</div>
              </div>
            </th>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                Reviewing
              </span>
            </td>
            <td className="px-6 py-4">S12</td>
            <td className="px-6 py-4">M60</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">47.2</td>
            <td className="px-6 py-4">4</td>
            <td className="px-6 py-4">One Off - Mon 29th AM</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Edite' }" href="/contracts?o=citytaxis">
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
          <tr className="hover:bg-gray-50">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://citytaxis.com/wp-content/uploads/2019/12/Screenshot-2019-12-23-at-15.51.18.png"
                  alt=""
                />
                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">City Taxis</div>
                <div className="text-gray-400">Ref: AKE8374</div>
              </div>
            </th>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 py-4">S4</td>
            <td className="px-6 py-4">S1</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">4</td>
            <td className="px-6 py-4">
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Wed Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Thur Am & Pm
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Fri Am
                </span>
              </div>
            </td>
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">
              <div className="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Edite' }" href="/contracts?o=citytaxis">
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
        </tbody>
      </table>
    </div>
  );
}

export default BidTable;
