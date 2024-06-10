import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://edufundhub.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
