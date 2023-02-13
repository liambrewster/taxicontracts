import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign up to Taxi Contracts Tendering</title>
        <meta name="description" content="Operator Signup to the system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-3 md:py-8">
          <div className="mb-1 flex w-full flex-col text-center md:mb-5">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-yellow-500">
              Sign Up Below
            </h2>
            <h1 className="title-font mb-2 text-xl font-medium text-gray-900 sm:text-5xl">
              Taxi Operator Sign up
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Want to submit your tenders to find the right driver to cover your
              work, use the form below to get signed up and submit
            </p>
          </div>
        </div>
      </section>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
          <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
            <input
              type="text"
              className="mb-4 block w-full rounded border border-gray-100 p-3"
              name="firstname"
              placeholder="First Name"
            />
            <input
              type="text"
              className="mb-4 block w-full rounded border border-gray-100 p-3"
              name="lastname"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="mb-4 block w-full rounded border border-gray-100 p-3"
              name="operator"
              placeholder="Taxi Company Name"
            />

            <input
              type="text"
              className="mb-4 block w-full rounded border border-gray-100 p-3"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="mb-4 block w-full rounded border border-gray-100 p-3"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="mb-4 block w-full rounded border border-gray-100 p-3"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="my-1 w-full rounded bg-yellow-500 py-3 text-center text-black hover:bg-yellow-700 focus:outline-none"
            >
              Create Account
            </button>

            <div className="mt-4 text-center text-sm text-gray-600">
              By signing up, you agree to the
              <Link
                className="ml-1 border-b border-gray-600 text-gray-600 no-underline"
                href="#"
              >
                Terms of Service
              </Link>{" "}
              and
              <Link
                className="ml-1 border-b border-gray-600 text-gray-600 no-underline"
                href="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="mt-6 text-gray-600">
            Already have an account?
            <Link
              className="text-blue ml-1 border-b border-blue-500 no-underline"
              href="/login"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
