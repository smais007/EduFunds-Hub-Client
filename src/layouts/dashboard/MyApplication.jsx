/* eslint-disable react-hooks/rules-of-hooks */
import { AuthContext } from "@/context/AuthProvider";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  DocumentTextIcon,
  PencilSquareIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";

export default function MyApplication() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  if (!user) {
    return <div>Loading...</div>;
  }

  const email = user.email;

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${email}`);
      return res.data;
    },
  });

  const handleDeleteScholaship = (payment) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/payments/${payment._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  console.log(payments);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            My Application {payments.length}
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
      </div>
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
            {payments.map((payment) => (
              <tr key={payment.email}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {payment.university_name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">
                      {payment.country}
                    </dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {payment.feedback}
                    </dd>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      <button> Add Review</button>
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {payment.country}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {/* {payment.email} */}
                  {payment.feedback}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {payment.subject_category}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {payment.programme}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  ${payment.application_fee}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  ${payment.service_charge}
                </td>
                <td className="px-3 py-4 text-xs text-black font-medium ">
                  {payment.status}
                </td>
                {/* Review */}

                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" className="text-indigo-600">
                    <span className="sr-only">, {payment.name}</span>
                    <div className="flex justify-start items-center gap-1">
                      <DocumentTextIcon className="h-6">
                        <a href="/details"></a>
                      </DocumentTextIcon>
                      <PencilSquareIcon className="h-6"></PencilSquareIcon>
                      <button onClick={() => handleDeleteScholaship(payment)}>
                        <XCircleIcon className="h-6"></XCircleIcon>
                      </button>
                    </div>
                  </a>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  <button> Add review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
