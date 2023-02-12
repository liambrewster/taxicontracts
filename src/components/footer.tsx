import Link from "next/link";

function Footer() {
  return (
    <footer className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <Link href="/" legacyBehavior>
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 rounded-full bg-yellow-500 p-2"
              viewBox="0 0 576 512"
            >
              <path d="M352 0C369.7 0 384 14.33 384 32V64L384 64.15C422.6 66.31 456.3 91.49 469.2 128.3L504.4 228.8C527.6 238.4 544 261.3 544 288V480C544 497.7 529.7 512 512 512H480C462.3 512 448 497.7 448 480V432H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V288C32 261.3 48.36 238.4 71.61 228.8L106.8 128.3C119.7 91.49 153.4 66.31 192 64.15L192 64V32C192 14.33 206.3 0 224 0L352 0zM197.4 128C183.8 128 171.7 136.6 167.2 149.4L141.1 224H434.9L408.8 149.4C404.3 136.6 392.2 128 378.6 128H197.4zM128 352C145.7 352 160 337.7 160 320C160 302.3 145.7 288 128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352zM448 288C430.3 288 416 302.3 416 320C416 337.7 430.3 352 448 352C465.7 352 480 337.7 480 320C480 302.3 465.7 288 448 288z" />
            </svg>
            <span className="ml-3 text-xl">Taxi Contracts</span>
          </a>
        </Link>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2023 Taxi Contracts —
          <a
            href="https://twitter.com/LiamBrewster"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @LiamBrewster
          </a>
        </p>
        {/* TODO: Footer Social Links */}
        {/* <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span> */}
      </div>
    </footer>
  );
}

export default Footer;
