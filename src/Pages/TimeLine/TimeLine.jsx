
import TimelineCard from "./TimelineCard";
import useProducts from "../../Components/Hooks/useProducts";
import { useState } from "react";


const TimeLine = () => {
    const [selectedCategory, setSelectedCategory] = useState("default");
    const [products] = useProducts();

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProducts = selectedCategory === "default"
        ? products
        : products.filter(item => item.category === selectedCategory);
    return (
        <div>
            <div className="grid flex-grow h-[400px] card bg-purple-400 bg-opacity-20 rounded-box place-items-center">
                <form className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text text-base font-bold">Pick Your Product Category</span>
                    </label>
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        name="category"
                        className="select select-bordered w-full buttonProject3"
                    >
                        <option value={'default'} disabled>select a value</option>
                        <option value={'homeAndLiving'}>Home And Living</option>
                        <option value={'electronics'}>Electronics</option>
                        <option value={'hobbiesSports'}>Hobbies And Sports</option>
                        <option value={'vehicles'}>Vehicles</option>
                        <option value={'mensFashion'}>Mens Fashion</option>
                        <option value={'womensFashion'}>Womens Fashion</option>
                        <option value={'kids'}>kids</option>
                        <option value={'education'}>Education</option>
                        <option value={'pets'}>Pets</option>
                    </select>
                </form>
            </div>
            <div className="flex justify-center gap-4 p-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {filteredProducts.map(item => <TimelineCard key={item._id} item={item}></TimelineCard>)}
                </div>
            </div>
        </div>
    );
};

export default TimeLine;