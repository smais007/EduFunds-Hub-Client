import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://edufundhub.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
