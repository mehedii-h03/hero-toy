import { useEffect, useState } from "react";
import ImageGallery from "../../ImageGallery/ImageGallery";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Trending from "../Trending/Trending";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
import RetailPartner from "../../RetailPartner/RetailPartner";

const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch('https://hero-toy-sever.vercel.app/trending')
            .then(res => res.json())
            .then(data => setTrending(data))
            .then(() => {
                AOS.init();
            });
    }, []);

    return (
        <div>
            <Helmet>
                <title>HeroToy</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Categories></Categories>
            </div>
            <ImageGallery></ImageGallery>
            <div className="mt-20" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <h1 className="text-center text-4xl font-medium mb-3">Trending</h1>
                <p className="text-lg text-center text-gray-500">Top Trending Products of the Month. The Most Popular and In-Demand Items Right Now</p>
                <div className="text-left lg:px-24 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        trending.map(singleData => (
                            <Trending
                                key={singleData._id}
                                singleData={singleData}
                        ></Trending>
                        ))
                    }
                </div>
                <RetailPartner></RetailPartner>
            </div>
        </div>
    );
};

export default Home;
