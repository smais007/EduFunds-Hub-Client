import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import "../assets/css/review.css";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const ReviewSlider = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return (
    <div className="pb-10">

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          520: { slidesPerView: 2 },
          950: { slidesPerView: 3 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
        <>
        <SwiperSlide>
          <div>

              <div
                key={reviews._id}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <div className="relative flex flex-col items-center py-6 px-4">
                  <span className="absolute inset-0 bg-blue-500 rounded-t-2xl"></span>
                  <div className="relative w-36 h-36 rounded-full bg-white p-2">
                    <img
                      src={review.userAva}
                      alt=""
                      className="w-full h-full rounded-full object-cover border-4 border-blue-500"
                    />
                  </div>
                </div>
                <div className="text-center py-4 px-6">
                  <h2 className="text-xl font-medium text-gray-800">
                    {review.userName}
                  </h2>
                  <p className="text-gray-600 text-sm my-2">{review.review}</p>
                  <button className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-blue-600 transition-all duration-300">
                    View More
                  </button>
                </div>
              </div>

          </div>
        </SwiperSlide>
        </>
        ))}
      </Swiper>


    </div>
  );
};

export default ReviewSlider;
