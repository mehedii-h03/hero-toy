import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const toy = useLoaderData();
    const { name, subCategory, quantity, rating, price, picture, description } = toy;
    console.log(toy);
    return (
        <div className="h-[90vh] lg:px-24 bg-gray-100 flex items-center justify-center">
            <div className="mx-auto w-full bg-white shadow-md rounded-md p-8 flex flex-col lg:flex-row items-start lg:items-center">
                <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
                    <img
                        src={picture}
                        alt="Product"
                        className="w-full h-auto object-cover rounded-md"
                        style={{ maxHeight: "60vh" }}
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold mb-4">{name}</h1>
                    <p className="text-gray-500 text-lg mb-2">{subCategory}</p>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <span className="text-gray-500 mr-2">Quantity:</span> {quantity}
                        </div>
                        <div className="flex gap-1 items-center mb-2">
                            <Rating style={{ maxWidth: "100px" }} value={rating} readOnly />
                            <p className="text-gray-500 text-sm">{rating}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-gray-500 mr-2">Price:</p> {price}$
                        </div>
                    </div>
                    <p className="text-gray-500 text-lg mb-4">Details : {description}</p>
                </div>
            </div>
        </div>

    );
};

export default Details;