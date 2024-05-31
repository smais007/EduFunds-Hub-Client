import { useContext, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
// import { Tooltip } from "react-tooltip";
import UserAvarter from "./UserAvarter";
import { toast } from "sonner";

// import Logo from "/alt.png";
import { AuthContext } from "../context/AuthProvider";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Scholarship", href: "/scholarship" },
  { name: "Review", href: "/review" },

  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Logout Successfully");
      })
      .catch();
  };

  return (
    <header className="bg-white">
      {/* Blur effect */}

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center gap-3">
          <a href="#" className="-m-1.5 p-1.5">
            {/* <img className="h-8 w-auto" src={Logo} alt="" /> */}
          </a>
          <div className="hidden md:block">
            <h1 className="bg-gradient-to-r from-blue-600 to-fuchsia-400 bg-clip-text text-transparent   md:text-2xl font-bold leading-none">
              <a href="/">EduScol</a>
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.name === "Review" && !user ? null : (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  location.pathname === item.href
                    ? "text-indigo-600" // Apply active style if the current path matches the href
                    : "text-gray-900"
                }`}
              >
                {item.name}
              </a>
            )
          )}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-3">
          {user ? (
            <div className="flex items-center gap-4">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <UserAvarter></UserAvarter>
              </a>
              {/* <Tooltip id="my-tooltip" /> */}
            </div>
          ) : (
            <>
              <a
                href="/login"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </a>
            </>
          )}
        </div>

        <div className="flex">
          <div>
            {theme === "light" && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 sun text-indigo-600 cursor-pointer"
                  onClick={themeSwitch}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>
            )}
            {theme === "dark" && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 moon cursor-pointer text-indigo-500"
                  onClick={themeSwitch}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/*
        className="w-6 h-6 moon cursor-pointer text-indigo-600"
                onClick={themeSwitch}
         */}

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900  dark:text-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://i.ibb.co/r3qbjTX/logo.png"
                alt=""
              />
            </a>
            {user ? (
              <button
                href="/"
                onClick={handleSignOut}
                className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign out
              </button>
            ) : (
              <>
                <a
                  href="/login"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white   shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </a>
              </>
            )}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10  dark:divide-gray-50">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  (item.name === "Recommendations For Me" ||
                    item.name === "My Queries" ||
                    item.name === "My recommendations") &&
                  !user ? null : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
              {!user && (
                <div className="py-6">
                  {/* <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Log in
                  </a> */}
                  <a
                    href="/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900  dark:text-white  hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Sign up
                  </a>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
