import { LockClosedIcon } from "@heroicons/react/20/solid";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import AppleLogo from "../../src/assets/apple.svg";
import Paypal from "../../src/assets/paypal.svg";
import { ReactSVG } from "react-svg";

const total = "$341.68";

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  return (
    <>
      <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
        <div className="px-4 py-6 sm:px-6 lg:hidden"></div>

        <h1 className="sr-only">Checkout</h1>

        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
        >
          <div className="mx-auto max-w-lg pt-10 border pb-10 px-8 rounded-lg">
            <div>
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
              <p className="text-gray-500 mb-6">
                Add a new payment method to your account.
              </p>
              <div className="flex justify-between mb-6">
                <div
                  className={`flex flex-col items-center py-4 px-10 border rounded-lg cursor-pointer transition ${
                    selectedMethod === "card"
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedMethod("card")}
                >
                  <div className=" mb-2">
                    <CreditCardIcon></CreditCardIcon>
                    <p className="pt-1">Card</p>
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center py-4 px-10 border rounded-lg cursor-pointer transition ${
                    selectedMethod === "paypal"
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedMethod("paypal")}
                >
                  <ReactSVG src={Paypal} className="w-6 h-6" />
                  <p>Paypal</p>
                </div>
                <div
                  className={`flex flex-col items-center py-4 px-10 border rounded-lg cursor-pointer transition ${
                    selectedMethod === "apple"
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedMethod("apple")}
                >
                  <ReactSVG src={AppleLogo} className="w-6 h-6" />
                  <p>Apple</p>
                </div>
              </div>
            </div>
            {/* <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              <span className="sr-only">Pay with Apple Pay</span>
              <svg
                className="h-5 w-auto"
                fill="currentColor"
                viewBox="0 0 50 20"
              >
                <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
              </svg>
            </button> */}

            <div className="relative mt-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-medium text-gray-500">
                  or
                </span>
              </div>
            </div>

            <form className="mt-6">
              <div className="grid grid-cols-12 gap-x-4 gap-y-6">
                <div className="col-span-full">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="name-on-card"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-8 sm:col-span-9">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-3">
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Pay {total}
              </button>

              <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
                <LockClosedIcon
                  className="mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Payment details stored in plain text
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
