import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  DocumentDuplicateIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export default function ManageScholarships() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [formData, setFormData] = useState({
    deadline: "",
    tution_fee: "",
    application_fee: "",
    service_charge: "",
  });
  const openModal = (scholarship) => {
    setSelectedScholarship(scholarship);
    setFormData({
      deadline: scholarship?.deadline || "",
      tution_fee: scholarship?.tution_fee || "",
      application_fee: scholarship?.application_fee || "",
      service_charge: scholarship?.service_charge || "",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const axiosSecure = useAxiosSecure();
  const { data: scholarships = [], refetch } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships");
      return res.data;
    },
  });

  const handleDeleteUser = (scholarship) => {
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
        axiosSecure.delete(`/scholarships/${scholarship._id}`).then((res) => {
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

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedScholarship) {
      axiosSecure
        .patch(`/scholarships/${selectedScholarship._id}`, formData)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Updated!",
              text: "Scholarship has been updated.",
              icon: "success",
            });
          }
          closeModal();
        });
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Manage Scholarships {scholarships.length}
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => openModal(null)}
            >
              Add New Scholarship
            </button>
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
                  Scholarship Name
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  University Name
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
                  Application Fee
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Programme
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {scholarships.map((scholarship) => (
                <tr key={scholarship._id}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    {scholarship.scholarship_name}
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Title</dt>
                      <dd className="mt-1 truncate text-gray-700">
                        {scholarship.university_name}
                      </dd>
                      <dt className="sr-only sm:hidden">Email</dt>
                      <dd className="mt-1 truncate text-gray-500 sm:hidden">
                        {scholarship.subject_category}
                      </dd>
                      <dd className="mt-1 truncate text-gray-500 sm:hidden">
                        Fee: $ {scholarship.application_fee}
                      </dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {scholarship.university_name}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {scholarship.subject_category}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {scholarship.application_fee}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    {scholarship.programme}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <div className="text-indigo-600 ">
                      <span className="sr-only">, {scholarship.name}</span>
                      <div className="flex gap-2 h-8">
                        <button>
                          <DocumentDuplicateIcon className="h-6"></DocumentDuplicateIcon>
                        </button>
                        <button onClick={() => openModal(scholarship)}>
                          <PencilIcon className="h-6"></PencilIcon>
                        </button>
                        <button onClick={() => handleDeleteUser(scholarship)}>
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
      <Transition
        show={isModalOpen}
        as="div"
        className="fixed inset-0 z-40 overflow-y-auto"
      >
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {selectedScholarship
                      ? "Edit Scholarship"
                      : "Add New Scholarship"}
                  </DialogTitle>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Deadline
                          </label>
                          <input
                            type="text"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Tuition Fee
                          </label>
                          <input
                            type="text"
                            name="tution_fee"
                            value={formData.tution_fee}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Application Fee
                          </label>
                          <input
                            type="text"
                            name="application_fee"
                            value={formData.application_fee}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Service Charge
                          </label>
                          <input
                            type="text"
                            name="service_charge"
                            value={formData.service_charge}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          className="mr-2 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
