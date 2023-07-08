import { useLoaderData } from "react-router-dom";
import { RiSearch2Line } from 'react-icons/ri';

import Toy from "../Toy/Toy";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllToys = () => {
    const allToys = useLoaderData();
    const [toys, SetToys] = useState(allToys);

    const handlerSearch = event => {
        event.preventDefault();
        const toyName = event.target.search.value;
        fetch(`https://hero-toy-sever.vercel.app/searchtoys?toyName=${encodeURIComponent(toyName)}`)
            .then(res => res.json())
            .then(data => {
                SetToys(data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="lg:mx-24">
            <Helmet>
                <title>HeroToy | All Toys</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="flex mt-3 items-center justify-between mb-10">
                <h4 className="text-lg">Total Toys: <span className="font-medium">{toys.length}</span></h4>
                <form onSubmit={handlerSearch} className="flex items-center">
                    <div className="flex items-center">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                        />
                        <button type="submit" className="btn btn-primary rounded-r-lg flex items-center">
                            <RiSearch2Line className="text-white" size={20} />
                        </button>
                    </div>
                </form>

            </div>

            <div className="mt-4 mx-auto gap-6 grid grid-cols-1 lg:grid-cols-2">
                {
                    toys.map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    ></Toy>)
                }
            </div>
        </div>


    );
};

export default AllToys;