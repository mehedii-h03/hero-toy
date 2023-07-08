import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
    const { _id, name, picture, subCategory, price, seller } = toy;
    return (
        <div className="bg-white rounded-lg shadow-md w-full flex flex-col lg:flex-row">
            <div>
                <img
                    src={picture}
                    alt="Toy"
                    className=" pt-4 w-32 h-32 object-contain rounded-sm"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="font-semibold">Toy Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Sub-category:</td>
                            <td>{subCategory}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Seller Name:</td>
                            <td>{seller}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Price:</td>
                            <td>{price} $</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Available Quantity:</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4 text-right">
                    <Link to={`/detail/${_id}`} className="btn btn-sm bg-[#c66409] border-0 hover:bg-[#dc6a00]">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;