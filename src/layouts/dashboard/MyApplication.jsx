import {
  
  DocumentTextIcon,
  PencilSquareIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const people = [
  {
    name: "Dhaxfor University",
    title: "Dhaka 1212",
    email: "Your application rejected",
    role: "Pending",
  },
  {
    name: "Dhaxfor University",
    title: "Dhaka 1212",
    email: "Your application rejected",
    role: "Pending",
  },
  {
    name: "Dhaxfor University",
    title: "Dhaka 1212",
    email: "Your application rejected",
    role: "Pending",
  },
  {
    name: "Dhaxfor University",
    title: "Dhaka 1212",
    email: "Your application rejected",
    role: "Pending",
  },
  // More people...
];

export default function MyApplication() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button>
          </div>
        </div> */}
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                University
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Address
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Feedback
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Subject
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Progremme
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Application fee
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Service Charge
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Action
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Rview
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.email}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {person.name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">
                      {person.title}
                    </dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {person.email}
                    </dd>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      Add Review
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {person.title}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {person.email}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  Doctor
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  Masters
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  $100
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  $240
                </td>
                <td className="px-3 py-4 text-xs text-black font-medium ">
                  {person.role}
                </td>
                {/* Review */}

                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" className="text-indigo-600">
                    <span className="sr-only">, {person.name}</span>
                    <div className="flex justify-start items-center gap-1">
                      <DocumentTextIcon className="h-6">
                        <a href="/details"></a>
                      </DocumentTextIcon>
                      <PencilSquareIcon className="h-6"></PencilSquareIcon>
                      <XCircleIcon className="h-6"></XCircleIcon>
                    </div>
                  </a>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  Add review
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
