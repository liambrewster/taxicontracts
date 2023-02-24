import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

function OperatorSignUp() {
  // TODO: add logic to add to an existing operator
  const [joinData, setJoinData] = useState({
    operatorId: "",
    inviteCode: "",
  });
  const { operatorId, inviteCode } = joinData;
  const onJDChange = (e: { target: HTMLInputElement }) => {
    setJoinData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // TODO: add logic to create a new operator
  const [opData, setOpData] = useState({
    operatorName: "",
    operatorEmail: "",
    operatorPhone: "",
  });
  const { operatorName, operatorEmail, operatorPhone } = opData;
  const onOPChange = (e: { target: HTMLInputElement }) => {
    setOpData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Head>
        <title>Add Your Operator | Taxi Contracts Tendering</title>
        <meta name="description" content="Add Your bids ready for tender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-3 md:py-12">
          <div className="mb-1 flex w-full flex-col text-center md:mb-5">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-yellow-500">
              Add Your Operator
            </h2>
            <h1 className="title-font mb-2 text-xl font-medium text-gray-900 sm:text-5xl">
              Taxi Contracts
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              It appears you do not have an operator assigned yet, either enter
              the invite details below or alternatively create a new operator to
              begin advertising your contracts for drivers to begin bidding
            </p>
          </div>
        </div>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-3 md:py-12">
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    EXISTING Operator Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Add yourself to an existing operators account, ask the
                    operator to share with you the &quot;Operator ID&quot; &
                    associated &quot;Invite Code&quot; found in their settings
                    page.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="overflow-hidden shadow-lg sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="operatorId"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Operator ID
                        </label>
                        <input
                          type="text"
                          name="operatorId"
                          id="operatorId"
                          value={operatorId}
                          onChange={onJDChange}
                          className="mt-1 block w-full rounded-md border-gray-500 pl-3 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-lg"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="inviteCode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Invite Code
                        </label>
                        <input
                          type="text"
                          name="inviteCode"
                          id="inviteCode"
                          value={inviteCode}
                          onChange={onJDChange}
                          className="mt-1 block w-full rounded-md border-gray-300 pl-3 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    >
                      Join Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    New Operator Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter the information to create a new operator
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="operatorName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Operator Name
                          </label>
                          <input
                            type="text"
                            name="operatorName"
                            id="operatorName"
                            value={operatorName}
                            onChange={onOPChange}
                            className="mt-1 block w-full rounded-md border-gray-300 pl-3 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-lg"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="operatorEmail"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Public Facing Email Address
                          </label>
                          <input
                            type="text"
                            name="operatorEmail"
                            id="operatorEmail"
                            value={operatorEmail}
                            onChange={onOPChange}
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 pl-3 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-lg"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="operatorPhone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Public Facing Phone Number
                          </label>
                          <input
                            type="text"
                            name="operatorPhone"
                            id="operatorPhone"
                            value={operatorPhone}
                            onChange={onOPChange}
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 pl-3 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-lg"
                          />
                        </div>
                      </div>
                    </div>
                    {/* TODO: add website capture */}
                    {/* <div className="ml-6 grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Website
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                            https://
                          </span>
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                            placeholder="www.example.com"
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* TODO: add logo upload */}
                    {/* <div className="mx-6 mt-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Company Logo
                      </label>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-yellow-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:text-yellow-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                      >
                        Add New
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OperatorSignUp;
