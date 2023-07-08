import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Category = ({ hero }) => {
    const { _id, name, picture, price, rating } = hero;
    return (
        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure><img className='h-[300px] object-center w-full' src={picture} /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-medium">{name}</h2>
                <p className="text-xl font-medium">{price} $</p>
                <div className="flex gap-2 item-center">
                    <Rating style={{ maxWidth: "100px" }} value={rating} readOnly />
                    <p className="text-lg">{rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/detail/${_id}`} className="btn btn-sm bg-[#f09743] border-0 hover:bg-[#dc6a00]">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;