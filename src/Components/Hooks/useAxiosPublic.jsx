import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://olden-goods-backend.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;