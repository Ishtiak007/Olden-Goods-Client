
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="min-h-[500px] h-[60vh] lg:w-[40%] mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 mt-10 md:mt-0">
            <div className="">
                <div className="w-[150px] h-[150px] ml-7 my-7 flex justify-center items-center">
                    <img
                        src={testimonial.imageUrl}
                        alt="Image"
                        className="object-cover h-full border-[3px] border-base-400 rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-center gap-5 pl-10 font-poppins">
                    <div className="flex items-center gap-4">
                        <div className="pr-4 border-r border-r-gray-500">
                            <p className="text-lg font-bold"> {testimonial.authorName}</p>
                            <p className="text-[12px] text-left">{testimonial.authorPosition}</p>
                        </div>
                    </div>
                    <p className="text-[13px] text-left">{testimonial.review}</p>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;