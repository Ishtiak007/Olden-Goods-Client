import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const TestimonialCard = ({ rating, review, authorName, authorPosition, imageUrl }) => {
    return (
        <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
            <img src={imageUrl} alt="" />
            <div className="mt-2 text-xs text-Teal">{authorName}</div>
            <div className="text-sm mt-2 font-bold">{authorPosition}</div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-Solitude p-1 rounded-full">
                        <AiOutlineUser className="text-Teal" />
                    </div>
                    <div className="text-sm font-bold">{review}</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-Solitude p-1 rounded-full">
                        <AiOutlineStar className="text-yellow" />
                    </div>
                    <div className="text-sm font-bold">{rating}</div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;