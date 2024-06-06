/* eslint-disable react/prop-types */
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ onSelect }) {
  const handleSelect = (value) => {
    if (onSelect) {
      onSelect(value);
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="">
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <button
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm w-full text-left"
                  )}
                  onClick={() => handleSelect("Member")}
                >
                  Member
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm w-full text-left"
                  )}
                  onClick={() => handleSelect("Moderator")}
                >
                  Moderator
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm w-full text-left"
                  )}
                  onClick={() => handleSelect("Admin")}
                >
                  Admin
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
