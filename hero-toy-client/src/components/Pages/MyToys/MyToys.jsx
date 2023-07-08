import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MyToys = () => {
    // state
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);

    const email = user?.email;
    useEffect(() => {
        fetch(`https://hero-toy-sever.vercel.app/mytoys?email=${encodeURIComponent(email)}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [email])

    // delete
    const handlerDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hero-toy-sever.vercel.app/toy/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                        const remaining = myToys.filter(toy => toy._id !== id);
                        setMyToys(remaining);
                    })
            }
        })
    }

    // filter
    const handlerFilterChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "Filter") {
            fetch(`https://hero-toy-sever.vercel.app/mytoys?email=${encodeURIComponent(email)}`)
                .then(res => res.json())
                .then(data => {
                    setMyToys(data)
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else if (selectedValue === "Ascending") {
            fetch(`https://hero-toy-sever.vercel.app/ascending?email=${encodeURIComponent(email)}`)
                .then(res => res.json())
                .then(data => {
                    setMyToys(data)
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (selectedValue === "Descending") {
            fetch(`https://hero-toy-sever.vercel.app/descending?email=${encodeURIComponent(email)}`)
                .then(res => res.json())
                .then(data => {
                    setMyToys(data)
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }


    return (
        <div>
            <Helmet>
                <title>HeroToy | My Toys</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="overflow-x-auto mt-5 lg:px-24">

                <select onChange={handlerFilterChange} className="select mb-2 select-sm bg-gray-200">
                    <option>Filter</option>
                    <option>Ascending </option>
                    <option>Descending</option>
                </select>
                <table className="min-w-full">
                    <thead>
                        <tr >
                            <th className="py-2 ps-3 bg-gray-200 text-left">Serial No.</th>
                            <th className="py-2 bg-gray-200 text-left">Seller Name</th>
                            <th className="py-2 bg-gray-200 text-left">Toy Name</th>
                            <th className="py-2 bg-gray-200 text-left">Sub Category</th>
                            <th className="py-2 bg-gray-200 text-left">Price</th>
                            <th className="py-2 bg-gray-200 text-left">Quantity</th>
                            <th className="py-2 bg-gray-200 text-left">Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys?.map((toy, i) => (
                            <React.Fragment key={toy._id}>
                                <tr>
                                    <td className="py-2 ps-3">{i + 1}</td>
                                    <td className="py-2">{toy.seller}</td>
                                    <td className="py-2">{toy.name}</td>
                                    <td className="py-2">{toy.subCategory}</td>
                                    <td className="py-2">{toy.price}</td>
                                    <td className="py-2">{toy.quantity}</td>
                                    <td className="py-2 flex items-center space-x-2">
                                        <Link to={`/updateToy/${toy._id}`}className="btn btn-sm btn-outline btn-warning"><FaEdit /></Link>
                                        <button onClick={() => handlerDelete(toy._id)} className="btn btn-sm btn-outline btn-error"><FaTrash /></button>

                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="8">
                                        <hr className="mt-2 border-gray-300" />
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;