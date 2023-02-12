import React from "react";
import Image from "next/image";
import Veezu from "../images/veezu.svg";
import DG from "../images/DG.svg";
import TakeMe from "../images/takeme.svg";
import AAA from "../images/aaa-logo.svg";
import City from "../images/citylogo.svg";

function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="pointer-events-none invisible absolute left-1/2 bottom-0 -mb-32 -translate-x-1/2 transform md:visible"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-10 md:py-12">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-16">
            <h2 className="mb-4 text-5xl font-extrabold">
              Trusted by some of the top taxi companies in the country
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              check out some of the companies we work with:
            </p>
          </div>
          {/* TODO: update to taxi company logos */}
          {/* Items */}
          <div className="mx-auto grid max-w-sm grid-cols-4 gap-2 md:max-w-4xl md:grid-cols-5">
            {/* Item */}
            <div className="col-span-2 flex items-center justify-center py-2 md:col-auto">
              <Image
                width={124}
                height={24}
                objectFit="cover"
                src={Veezu}
                alt="Veezu"
              />
            </div>

            {/* Item */}
            <div className="col-span-2 flex items-center justify-center py-2 md:col-auto">
              <Image
                width={124}
                height={24}
                objectFit="cover"
                src={DG}
                alt="Addison Lee"
              />
            </div>

            {/* Item */}
            <div className="col-span-2 flex items-center justify-center py-2 md:col-auto">
              <Image
                width={124}
                height={24}
                objectFit="cover"
                src={TakeMe}
                alt="TakeMe"
              />
            </div>

            {/* Item */}
            <div className="col-span-2 flex items-center justify-center py-2 md:col-auto">
              <Image
                width={124}
                height={24}
                objectFit="cover"
                src={AAA}
                alt="AAA"
              />
            </div>

            {/* Item */}
            <div className="col-span-2 col-start-2 col-end-4 flex items-center justify-center py-2 md:col-auto">
              <Image
                width={124}
                height={24}
                objectFit="cover"
                src={City}
                alt="City"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="mx-auto mt-20 max-w-3xl" data-aos="zoom-y-out">
            <div className="relative flex items-start rounded border-2 border-gray-200 bg-white">
              {/* Testimonial */}
              <div className="mx-4 px-12 py-8 pt-20 text-center md:mx-0">
                <div className="absolute top-0 left-1/2 -mt-8 -translate-x-1/2 transform">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 h-16 w-16 fill-current text-yellow-500"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img
                    className="relative rounded-full"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="mb-4 text-xl font-medium">
                  “ As a taxi driver, finding reliable and profitable job
                  opportunities was always a struggle until I discovered the
                  Contract Tendering Software. The user-friendly interface and
                  the ability to bid on a wide range of contracts has completely
                  transformed my workload. I can now pick and choose the jobs
                  that best fit my schedule and earning potential. Thanks to
                  this software, my income has increased, and I have a lot more
                  control over my work. I highly recommend the Contract
                  Tendering Software to any taxi driver looking to improve their
                  livelihood. “
                </blockquote>
                <cite className="mb-1 block text-lg font-bold not-italic">
                  John Doe
                </cite>
                <div className="text-gray-600">
                  <span>Sheffield Taxi Driver</span>{" "}
                  <a className="text-blue-600 hover:underline" href="#0">
                    @JohnDoe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
