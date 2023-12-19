import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";


const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <SectionTitle heading={'Products category'} subHeading={'Select Your Goods: Explore Tailored Choices by Category Now!'}></SectionTitle>
            <div className="lg:flex justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5">
                    {
                        category.map(data => <CategoryCard key={data._id} data={data}></CategoryCard>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Category;