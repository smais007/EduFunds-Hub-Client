import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import SectionHeader from "./SectionHeader";

export default function ScholarshipCard() {
  const axiosPublic = useAxiosPublic();
  const { data: scholarships = [] } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosPublic.get("/scholarships");
      return res.data;
    },
  });

  console.log(scholarships);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">scholarships</h2>
        <SectionHeader></SectionHeader>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {scholarships.map((scholarship) => (
            <Link
              to={`/details/${scholarship._id}`}
              key={scholarship._id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="absolute text-sm bg-gray-300 px-2 top-3 left-3 rounded-xl text-black font-medium">
                <p>{scholarship.scholarship_category}</p>
              </div>
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={scholarship.image}
                  alt={scholarship.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900 flex justify-between">
                  <p>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {scholarship.scholarship_name}
                  </p>
                  <p className="bg-gray-100 px-1 rounded-lg">
                    Rating: <span>4.7</span>
                  </p>
                </h3>
                <p className="text-xs leading-none font-medium text-gray-500">
                  {scholarship.country}
                  {scholarship.city}
                  {scholarship.region}
                </p>
                <div>
                  <p className="text-sm"> Deadline: {scholarship.deadline}</p>
                  <p className="text-sm">
                    Subject: {scholarship.subject_category}
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-base font-medium text-gray-900">
                    Application Fee: ${scholarship.application_fee}
                  </p>
                  {/* <Link
                    to={`/details/${scholarship._id}`}
                    className="bg-black cursor-pointer text-white px-2 font-bold rounded-lg"
                  >
                    Details
                  </Link> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View All Scholarship
          </button>
        </div>
      </div>
    </div>
  );
}
