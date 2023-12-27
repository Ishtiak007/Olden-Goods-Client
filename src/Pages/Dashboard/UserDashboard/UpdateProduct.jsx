import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const { _id, name, age, date, category, shortDescription, longDescription, price, uploaderPhone, uploaderLocation } = useLoaderData();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        const imageFile1 = { image: data.image1[0] }
        const res1 = await axiosPublic.post(image_hosting_api, imageFile1, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageFile2 = { image: data.image2[0] }
        const res2 = await axiosPublic.post(image_hosting_api, imageFile2, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageFile3 = { image: data.image3[0] }
        const res3 = await axiosPublic.post(image_hosting_api, imageFile3, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageFile4 = { image: data.image4[0] }
        const res4 = await axiosPublic.post(image_hosting_api, imageFile4, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data)
        if (res1.data.success && res2.data.success && res3.data.success && res4.data.success) {
            const product = {
                image1: res1.data.data.display_url,
                image2: res2.data.data.display_url,
                image3: res3.data.data.display_url,
                image4: res4.data.data.display_url,
                name: data.name,
                age: data.age,
                date: data.date,
                category: data.category,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                price: data.price,
                uploaderPhone: data.uploaderPhone,
                uploaderLocation: data.uploaderLocation,
            }
            const productResult = await axiosSecure.patch(`/products/${_id}`, product);
            console.log(productResult.data)
            if (productResult.data.modifiedCount > 0) {
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is Updated to the Timeline route`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* .................photo related.................... */}
                    <div className="lg:flex gap-6">
                        <div className="my-4">
                            <label className="label">
                                <span className="label-text font-bold">Image 1</span>
                            </label>
                            <input
                                {...register("image1", { required: true })}
                                type="file"
                                name="image1"
                                className="file-input w-full" />
                            {errors.image1 && <span className='text-red-500'>This Image field is required</span>}
                        </div>


                        <div className="my-4">
                            <label className="label">
                                <span className="label-text font-bold">Image 2</span>
                            </label>
                            <input
                                {...register("image2", { required: true })}
                                type="file"
                                name="image2"
                                className="file-input w-full" />
                            {errors.image2 && <span className='text-red-500'>This Image field is required</span>}
                        </div>
                    </div>




                    <div className="lg:flex gap-6">
                        <div className="my-4">
                            <label className="label">
                                <span className="label-text font-bold">Image 3</span>
                            </label>
                            <input
                                {...register("image3", { required: true })}
                                type="file"
                                name="image3"
                                className="file-input w-full" />
                            {errors.image3 && <span className='text-red-500'>This Image field is required</span>}
                        </div>


                        <div className="my-4">
                            <label className="label">
                                <span className="label-text font-bold">Image 4</span>
                            </label>
                            <input
                                {...register("image4", { required: true })}
                                type="file"
                                name="image4"
                                className="file-input w-full" />
                            {errors.image4 && <span className='text-red-500'>This Image field is required</span>}
                        </div>
                    </div>









                    {/* Name and Age */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <input
                                defaultValue={name}
                                {...register("name", { required: true })}
                                name="name"
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full " />
                            {errors.name && <span className='text-red-500'>This Product Name field is required</span>}
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Product Using time priod</span>
                            </label>
                            <input
                                defaultValue={age}
                                {...register("age", { required: true })}
                                name="age"
                                type="number"
                                placeholder="Product Using time priod"
                                className="input input-bordered w-full " />
                            {errors.petAge && <span className='text-red-500'>This Product Using time priod field is required</span>}
                        </div>
                    </div>





                    {/* Date and Category */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Product Adding Date</span>
                            </label>
                            <input
                                defaultValue={date}
                                {...register("date", { required: true })}
                                name="date"
                                type="date"
                                placeholder="Adding Date"
                                className="input input-bordered w-full " />
                            {errors.date && <span className='text-red-500'>This Adding Date field is required</span>}
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Your Product Category</span>
                            </label>
                            <select
                                defaultValue={category}
                                {...register("category", { required: true })}
                                name="category"
                                className="select select-bordered w-full">
                                <option value={'homeAndLiving'}>Home And Living</option>
                                <option value={'electronics'}>Electronics</option>
                                <option value={'hobbiesSports'}>Hobbies And Sports</option>
                                <option value={'vehicles'}>Vehicles</option>
                                <option value={'mensFashion'}>Men Fashion</option>
                                <option value={'womensFashion'}>Women Fashion</option>
                                <option value={'kids'}>Kids</option>
                                <option value={'education'}>Education</option>
                                <option value={'pets'}>Pets</option>
                            </select>
                            {errors.category && <span className='text-red-500'>This Category field is required</span>}
                        </div>
                    </div>



                    {/* Price and Phonenumber */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Provide Product Price</span>
                            </label>
                            <input
                                defaultValue={price}
                                {...register("price", { required: true })}
                                name="price"
                                type="text"
                                placeholder="Product Price"
                                className="input input-bordered w-full " />
                            {errors.price && <span className='text-red-500'>This price field is required</span>}
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Your Phone Number</span>
                            </label>
                            <input
                                defaultValue={uploaderPhone}
                                {...register("uploaderPhone", { required: true })}
                                name="uploaderPhone"
                                type="number"
                                placeholder="Your Phone Number"
                                className="input input-bordered w-full " />
                            {errors.uploaderPhone && <span className='text-red-500'>This phone number field is required</span>}
                        </div>
                    </div>




                    {/* ShortDescription and Location */}
                    <div className="lg:flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Your Location</span>
                            </label>
                            <input
                                defaultValue={uploaderLocation}
                                {...register("uploaderLocation", { required: true })}
                                name="uploaderLocation"
                                type="text"
                                placeholder="Your Location"
                                className="input input-bordered w-full " />
                            {errors.uploaderLocation && <span className='text-red-500'>This Location field is required</span>}
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-bold">Short Description </span>
                            </label>
                            <textarea
                                defaultValue={shortDescription}
                                {...register("shortDescription", { required: true })}
                                name="shortDescription"
                                className="textarea textarea-bordered h-24"
                                placeholder="Short Description about Product (20 words recommended)"></textarea>
                            {errors.shortDescription && <span className='text-red-500'>This Short Description field is required</span>}
                        </div>
                    </div>




                    {/* long description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Long Description</span>
                        </label>
                        <textarea
                            defaultValue={longDescription}
                            {...register("longDescription", { required: true })}
                            name="longDescription"
                            className="textarea textarea-bordered h-24"
                            placeholder="Long Description about this product (180 words recommended)"></textarea>
                        {errors.longDescription && <span className='text-red-500'>This Long Description field is required</span>}
                    </div>



                    <div className="text-center">
                        <button type="submit" className="buttonProject3 my-5">Update Your Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;