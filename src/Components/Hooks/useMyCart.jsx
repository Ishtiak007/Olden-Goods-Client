import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyCart = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/buyerProduct?buyerEmail=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useMyCart;