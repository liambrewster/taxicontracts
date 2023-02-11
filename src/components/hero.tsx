import React, { useState } from "react";
import Link from "next/link";

function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-8xl"
              data-aos="zoom-y-out"
            >
              Make your earnings{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-green-300 bg-clip-text text-transparent">
                plentiful
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Enhance Your Taxi Earnings Through our Bid and Win Contract
                Tendering System
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <Link href="/contracts" legacyBehavior>
                  <div>
                    <a
                      className="btn mb-4 w-full rounded bg-yellow-500 p-3 text-white hover:bg-yellow-700 sm:mb-0 sm:w-auto"
                      href="#0"
                    >
                      View Available Contracts
                    </a>
                  </div>
                </Link>
                <Link href="/how" legacyBehavior>
                  <div>
                    <a
                      className="btn w-full rounded bg-gray-900 p-3 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
                      href="#0"
                    >
                      Learn more
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative mb-8 flex justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src="https://via.placeholder.com/768x432.png?text=Add+Youtube+Explainer+Video+Here"
                  width="768"
                  height="432"
                  alt="Hero"
                />
              </div>
              <button
                className="group absolute top-full flex -translate-y-1/2 transform items-center rounded-full bg-white p-4 font-medium shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                {/* TODO: add modal video back in */}
                <svg
                  className="h-6 w-6 flex-shrink-0 fill-current text-gray-400 group-hover:text-blue-600"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
