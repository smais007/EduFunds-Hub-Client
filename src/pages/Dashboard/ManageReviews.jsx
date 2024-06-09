import useAxiosSecure from "@/hooks/useAxiosSecure";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";

export default function ManageReviews() {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h1>{reviews.length}</h1>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={review.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {review.university}
                  </a>
                  <p className="text-sm italic text-gray-500">
                    {review.scholarshipName}
                  </p>
                </h3>
                <p className="text-sm text-gray-500">{review.description}</p>

                <div className="flex flex-1 flex-col justify-end">
                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-3 ">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src={review?.userAva}
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {review.userName}
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-sm italic text-gray-500 font-semibold">
                            Rating: {review.rating}
                          </p>
                          <p className="text-xs text-gray-500">
                            {" "}
                            | Date:{" "}
                            {new Date(review.postedDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button>
                        <TrashIcon className="h-6 text-red-500"></TrashIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
