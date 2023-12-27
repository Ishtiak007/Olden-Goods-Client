import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProductEmail = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?email=${user.email}`)
            return res.data;
        }
    })
    return [products, refetch];
};

export default useProductEmail;