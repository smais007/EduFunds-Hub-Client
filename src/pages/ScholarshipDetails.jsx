import ReviewSlider from "@/components/ReviewSlider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

export default function ScholarshipDetails() {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: scholarship,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/scholarships/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading scholarship details</div>;
  return (
    <div className=" container mx-auto px-4 sm:px-6 lg:px-36">
      <div className="">
        <div className="flex items-center gap-1 md:gap-3 pb-8">
          <div>
            <img
              className="inline-block h-12 w-12 md:h-16 md:w-16 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              {scholarship.university_name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:leading-none">
              {scholarship.city}, {scholarship.region}, {scholarship.country}.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-0">
          <div className="relative rounded-xl">
            <img
              className="w-full h-[400px] object-cover  rounded-xl"
              src={scholarship.image}
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80  rounded-xl">
              <div className="text-white flex flex-col justify-end h-full p-4">
                <p className="text-lg font-bold">
                  {scholarship.scholarship_name}
                </p>
                <p>
                  The songs gently so a a not yore fiery the, the said the flung
                  dreams much, sculptured still my more.
                </p>
              </div>
            </div>
          </div>
          {/* Important information */}
          <div className="w-full">
            <div className="grid md:grid-cols-5 grid-cols-1 justify-between my-10 py-5 rounded-3xl bg-gray-200 mx-auto">
              <div className="flex  items-center gap-3 ">
                <BookOpenIcon className="h-10 w-10"></BookOpenIcon>
                <div>
                  <p className="text-gray-500 text-sm">Subject</p>
                  <p className="font-bold text-gray-900 leading-none">
                    {" "}
                    {scholarship.subject_category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AcademicCapIcon className="h-10 w-10"></AcademicCapIcon>
                <div>
                  <p className="text-gray-500 text-sm">Programme</p>
                  <p className="font-bold text-gray-900 leading-none">
                    {scholarship.programme}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StarIcon className="h-10 w-10"></StarIcon>
                <div>
                  <p className="text-gray-500 text-sm">Scholarship Type</p>
                  <p className="font-bold text-gray-900 leading-none">
                    {scholarship.scholarship_category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CurrencyDollarIcon className="h-10 w-10"></CurrencyDollarIcon>
                <div>
                  <p className="text-gray-500 text-sm">Application Fee</p>
                  <p className="font-bold text-gray-900 leading-none">
                    {" "}
                    $ {scholarship.application_fee}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <ClockIcon className="h-10 w-10"></ClockIcon>
                <div>
                  <p className="text-gray-500 text-sm">Deadline</p>
                  <p className="font-bold text-gray-900 leading-none">
                    {" "}
                    {scholarship.deadline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Description
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Eligibility Criteria
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="pb-6">
                  <ul>Academic Performance: </ul>
                  <li>Minimum GPA 3.00 out of 5.00 in HSC.</li>
                  <li>Minimum GPA 3.00 out of 5.00 in SSC.</li>
                </div>
                <div>
                  <ul>Field of Study:</ul>
                  <li>Science</li>
                </div>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                English Language Profeciency
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <li>IELTS Score 6.5</li>
                <li>Dualingo score 100+ </li>
                <li>SATE Eam score 1200</li>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Documents
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <li>Passport</li>
                <li> SSC & HSC Certificate</li>
                <li>Bank Statement</li>
                <li>Transcrip</li>
                <li>Letters of Recommendation</li>
                <li>Additional Documentation</li>
              </dd>
            </div>

            <hr className="divide-y divide-gray-100 rounded-md border border-gray-200" />
            <div className="pt-10 flex justify-end">
              <Link
                to={`/details/${scholarship._id}/payment`}
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
              >
                Apply Now
              </Link>
            </div>
          </dl>
        </div>
      </div>
      {/* Slider revie */}
      <div className="mt-20">
        <div>
          <h1 className="text-2xl font-bold text-center pb-12">
            Pepole who reviwed this Universitys scholarship
          </h1>
        </div>
        <ReviewSlider></ReviewSlider>
      </div>
    </div>
  );
}
