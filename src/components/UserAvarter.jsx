import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { toast } from "sonner";
import { AuthContext } from "../context/AuthProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserAvarter() {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Logout Successfully");
      })
      .catch();
  };

  return (
    <Menu as="div" className="relative inline-block text-center md:text-left">
      <div>
        <Menu.Button>
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={
              user?.photoURL ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            alt=""
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* md:origin-top-right */}
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ">
          <div className="py-1">
            <div className="px-4 py-3">
              <p className="text-sm">Signed in as</p>
              <p className="truncate text-sm font-medium text-gray-900">
                {user?.email}
              </p>
            </div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/dashboard"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Go to Dashboard
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/update-profile"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Update Profile
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-center md:text-left text-sm"
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
