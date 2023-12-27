import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useBuyerRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: whoRequest = [], refetch } = useQuery({
        queryKey: ['buyerProduct', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/buyerProduct?email=${user.email}`)
            return res.data;
        }
    })
    return [whoRequest, refetch]
};

export default useBuyerRequest;