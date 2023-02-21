import Link from "next/link";
import { BsPlus, BsGearFill } from "react-icons/bs";
import {
  FaHome,
  FaRegPaperPlane,
  FaRegClock,
  FaRegCheckCircle,
  FaUserCog,
  FaRegQuestionCircle,
  FaChartLine,
} from "react-icons/fa";

const DashboardSideBar = () => {
  // TODO: Make mobile have a bottom bar not side bar
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-16 flex-col bg-[#cdd0d2] shadow-lg">
      <Link href="/dashboard">
        <div className="group relative mx-auto mt-2 mb-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-500 text-yellow-400 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-yellow-500 hover:text-white">
          <FaHome size="28" />
          <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-700 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
            Dashboard
          </span>
        </div>
      </Link>
      <Divider />
      <Link href="/contracts/new">
        <div className="group relative mx-auto mt-2 mb-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-500 text-yellow-400 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-yellow-500 hover:text-white">
          <BsPlus size="32" />
          <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
            Add Contract
          </span>
        </div>
      </Link>
      <Link href="/dashboard?status=pending">
        <div className="group relative mx-auto mt-2 mb-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-500 text-yellow-400 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-yellow-500 hover:text-white">
          <FaRegClock size="20" />
          <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
            In Progress Contracts
          </span>
        </div>
      </Link>
      <Link href="/dashboard?status=completed">
        <div className="group relative mx-auto mt-2 mb-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-500 text-yellow-400 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-yellow-500 hover:text-white">
          <FaRegCheckCircle size="20" />
          <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
            Complete Contracts
          </span>
        </div>
      </Link>
      <Divider />

      <Link href="/profile">
        <div className="group relative mx-auto mt-2 mb-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-500 text-yellow-400 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-yellow-500 hover:text-white">
          <FaUserCog size="22" />
          <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
            Profile Settings
          </span>
        </div>
      </Link>
      <Link href="/support">
        <div className="group relative mx-auto mt-2 mb-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-500 text-yellow-400 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-yellow-500 hover:text-white">
          <FaRegQuestionCircle size="22" />
          <span className="absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
            Support
          </span>
        </div>
      </Link>
    </div>
  );
};

const Divider = () => (
  <hr className="mx-2 my-auto rounded-full border border-gray-200 bg-gray-200 dark:border-gray-800" />
);

export default DashboardSideBar;
