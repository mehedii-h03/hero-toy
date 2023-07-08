import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Toaster, toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    const { _id, name, subCategory, quantity, rating, price, picture, description } = toy;
    const handlerEditToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const picture = form.picture.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const description = form.description.value;

        const updateToy = {
            name, subCategory, price, quantity, rating, picture, seller, email, description
        }
        console.log(updateToy);
        fetch(`https://hero-toy-sever.vercel.app/updateToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Successfully updated a toy')
                }
            })

        form.reset();
    }
    return (
        <div>
            <Helmet>
                <title>HeroToy | Update Toy</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="flex mx-auto bg-white rounded-lg shadow-md flex-col justify-center items-center py-4 px-6 lg:px-0 w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-6">Add Toy</h1>
                <form onSubmit={handlerEditToy} className="w-full max-w-sm">
                    <div className="flex gap-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Toy Name
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="toyName" defaultValue={name} type="text" placeholder="Enter toy name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Sub Category
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="subCategory" defaultValue={subCategory} type="text" placeholder="Enter sub category" required />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Price
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="price" type="text" defaultValue={price} placeholder="Price" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Quantity
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="quantity" defaultValue={quantity} type="number" placeholder="Enter quantity of toy" />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Rating
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="rating" defaultValue={rating} type="text" placeholder="Rating" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Toy photo URL
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" id="photo" name="picture" defaultValue={picture} type="text" placeholder="Photo URL" />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Seller Name
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="seller" type="text" defaultValue={user && user.displayName} readOnly required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >
                                Seller Email
                            </label>
                            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="email" type="email" defaultValue={user && user.email} readOnly />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" >
                            Description
                        </label>
                        <textarea className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" name="description" rows="4" defaultValue={description} placeholder="Enter description"></textarea>
                    </div>

                    <input className="btn w-full mb-2 mx-auto bg-[#f09743] border-0 hover:bg-[#dc6a00]" type="submit" value="Update" />
                </form>
                <Toaster />
            </div>
        </div>
    );
};

export default UpdateToy;