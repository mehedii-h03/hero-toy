import Lottie from "lottie-react";
import ironMan from '../../../../assets/ironman.json'

const Banner = () => {
    return (
        <div className="bg-[#ededec] h-[85vh] px-2 md:px-10 rounded-lg flex flex-col-reverse md:flex-row items-center justify-center lg:mx-24">
            <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-5xl font-bold mb-5 leading-tight">Collect your Multiverse Hero Now!!
                </h1>
                <p className="text-xl font-medium mb-8 ">Power up your playtime with our heroic action toy store. Marvel, Avengers, and Star Wars characters fuel endless adventures.</p>
                <button className="btn mb-5 bg-[#f09743] border-0 hover:bg-[#dc6a00]">Get Started</button>
            </div>
            <div>
                <Lottie className="w-56 md:w-full" animationData={ironMan} loop={true} />
            </div>
        </div>
    );
};

export default Banner;