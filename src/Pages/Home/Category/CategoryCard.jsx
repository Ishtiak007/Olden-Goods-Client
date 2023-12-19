
import { Link } from 'react-router-dom';

const CategoryCard = ({ data }) => {
    const { image, title, categoryName } = data;
    return (
        <Link to='/timeline'>
            <div className="card lg:w-96 md:w-96 bg-base-100 shadow-xl">
                <div className="card-body lg:h-32">
                    <h2 className="card-title uppercase">{categoryName}</h2>
                    <p>{title}</p>
                </div>
                <figure><img src={image} className="h-32 w-32 p-4" alt="Image" /></figure>
            </div>
        </Link>
    );
};

export default CategoryCard;