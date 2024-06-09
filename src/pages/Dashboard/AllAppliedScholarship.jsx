import StatusDD from "@/components/StatusDD";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  ChatBubbleOvalLeftIcon,
  DocumentDuplicateIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function AllAppliedScholarship() {
  const axiosSecure = useAxiosSecure();
  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  // Status Updateing
  const handleSelect = async (status, universityId) => {
    try {
      const response = await axiosSecure.patch(
        `/payments/status/${universityId}`,
        {
          status,
        }
      );
      if (response.status === 200) {
        refetch();
        toast.success(
          `Role updated to ${status} for user with ID ${universityId}`
        );
        // Optionally, refetch users to reflect the change
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Manage All Applied Scholarship {applications.length}
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
                Univesity Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Scholarship Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Scl Category
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Sub Category
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Programme
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Fee
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Charge
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Status
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {applications.map((application) => (
              <tr key={application.email}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {application.university_name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">
                      {application.scholarship_name}
                    </dd>
                    <dd className="mt-1 truncate text-gray-700">
                      {application.title}
                    </dd>
                    <dd className="mt-1 truncate text-gray-700">
                      {application.subject_category}
                    </dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {application.programme}
                    </dd>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      $ {application.tution_fee}
                    </dd>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      $ {application.service_charge}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {application.scholarship_name}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {application.scholarship_category}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {application.subject_category}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {application.programme}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  $ {application.tution_fee}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  $ {application.service_charge}
                </td>

                <td className="px-3 py-4 text-sm text-gray-500">
                  {application.status}
                  <StatusDD
                    onSelect={(status) => handleSelect(status, application._id)}
                  ></StatusDD>
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <div className="text-indigo-600 ">
                    <span className="sr-only">, {application.name}</span>
                    <div className="flex gap-2 h-8">
                      <button>
                        <DocumentDuplicateIcon className="h-6"></DocumentDuplicateIcon>
                      </button>
                      <button>
                        <ChatBubbleOvalLeftIcon className="h-6"></ChatBubbleOvalLeftIcon>
                      </button>
                      <button>
                        <TrashIcon className="h-6"></TrashIcon>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
