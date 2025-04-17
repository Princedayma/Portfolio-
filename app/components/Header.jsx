"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-3 left-0 w-full z-50 bg-white bg-opacity-70 text-black dark:bg-black dark:bg-opacity-70 dark:text-white grid grid-cols-12 items-center  py-4 px-6 gap-4 backdrop-blur-sm shadow-md">
      {/* Left Section (Avatar + Logo) */}
      <div className="col-span-6 flex items-center gap-3">
        {/* Avatar */}
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  width="32"
  height="32"
  className="text-black dark:text-white"
>
  <path
    fill="currentColor"
    d="M31.943359 0c-8.839 0-16.341671 3.0848125-22.5136715 9.2578125-6.285 6.4000005-9.4296875 13.9811875-9.4296875 22.7421875 0 8.762 3.1510313 16.284312 9.4570312 22.570312 6.3039998 6.286 13.7993278 9.429688 22.4863278 9.429688 8.836 0 16.47511-3.181922 22.91211-9.544922 6.096-6.019 9.144531-13.501078 9.144531-22.455078 0-8.953-3.096109-16.524844-9.287109-22.7148438-6.19-6.1899999-13.781532-9.2851562-22.769532-9.2851562zm.085938 5.7714844c7.256 0 13.436969 2.55225 18.542969 7.6562496 5.103 5.067 7.65625 11.256313 7.65625 18.570313 0 7.352-2.513969 13.46675-7.542969 18.34375-5.258 5.221-11.466906 7.828125-18.628906 7.828125s-13.332672-2.589484-18.513672-7.771484c-5.1810002-5.178001-7.7714846-11.310485-7.7714846-18.396485s2.6100781-13.276266 7.8300776-18.572265c5.027001-5.1040005 11.170735-7.6582036 18.427735-7.6582036zm-15.058594 17.2011716v17.712891.001953h4.458985v-5.714844h3.484374c1.409001 0 2.628251-.200609 3.65625-.599609 1.029-.4 1.800454-.913969 2.314454-1.542969.514-.63.876937-1.257719 1.085937-1.886719.209-.63.314453-1.284703.314453-1.970703 0-4.001-2.171672-6-6.513672-6zm16.513672 0v17.712891h6.859375c2.818 0 5.026906-.722922 6.628906-2.169922 1.597-1.446 2.396485-3.6775 2.396485-6.6875 0-3.009-.798485-5.237547-2.396485-6.685547-1.602-1.447-3.810906-2.169922-6.628906-2.169922zm-12.113281 3.310547h3.658203c1.905 0 2.857422.8975 2.857422 2.6875 0 .763-.2295 1.401063-.6875 1.914063-.458.514-1.142641.771484-2.056641.771484h-3.771484v-5.371094zm16.515625.402344 2.513672.001953c1.6 0 2.752031.467391 3.457031 1.400391.705.934 1.05664 2.180187 1.05664 3.742187 0 1.563-.35164 2.809188-1.05664 3.742188-.705.935-1.838391 1.40039-3.400391 1.40039h-2.570312z"
  />
</svg>
        <h2>
          <Link href="/">
          </Link>
        </h2>
      </div>

      {/* Right Section (Navigation and Theme Toggle) */}
      <nav className="col-span-6 flex justify-end items-center gap-6">
        <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">
          About
        </Link>
        <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">
          Projects
        </Link>
        <Link href="/Hobby" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">
          Hobby
        </Link>
        <Link href="https://drive.google.com/file/d/1ZVO4dXjh9Az3GxNMvNskJlH7KWIdmSB2/view?usp=drive_link" className="text-gray-700 dark:text-gray-200 hover:text-blue-400">
          Resume
        </Link>
       
        <ThemeToggle />
      </nav>
    </header>
  );
}
