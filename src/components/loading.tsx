import Link from "next/link";

function Loading() {
  return (
    <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transform text-center ">
      <strong>Loading, Please Wait...</strong>
      <div className="h-32 w-32 animate-spin items-center rounded-full border-8 border-solid border-yellow-400 border-t-transparent"></div>
    </div>
  );
}

export default Loading;
