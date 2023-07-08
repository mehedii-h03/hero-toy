import { Gallery } from "react-grid-gallery";

const ImageGallery = () => {
    
    const images = [
        {
            src: "https://static-01.daraz.com.bd/p/c6edbdcea2079cd58f4abf1de133c02e.jpg_720x720.jpg_.webp",


            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://www.coolthings.com/wp-content/uploads/2015/02/hot-toys-hulk-deluxe-2.jpg",
            tags: [
                { value: "Hulk", title: "Hulk" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },

        {
            src: "https://i0.wp.com/lylesmoviefiles.com/wp-content/uploads/2017/07/Hot-Toys-Captain-America-Civil-War-Iron-Man-figure-review-face-off-with-Captain-America.jpg?fit=1024%2C689&ssl=1",
            tags: [
                { value: "Iron Man", title: "Iron Man" },
            ],
        },
        {
            src: "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2407/5538/CAP_AMERICA_SELECT_2__99284.1681745340.jpg?c=1",
        },
        {
            src: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/04/279089289_10158574303687344_5431016159155775458_n.jpg",
        },
        {
            src: "https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/McFarlane-Toys-Dark-Knight-Returns-Armored-Batman-vs-Superman-Featured-01.jpg?fit=696%2C392&quality=80&strip=info&ssl=1",
        },
        {
            src: "https://images.hdqwalls.com/wallpapers/batman-superman-toys-jn.jpg",
        },
        {
            src: "https://www.superherohype.com/wp-content/uploads/sites/4/2023/02/hot-toys-keaton.jpg",
            tags: [
                { value: "Batman", title: "Batman" },
            ],
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0523/0955/7435/products/DSC05961_1024x1024@2x.png?v=1659112225",
        },
        {
            src: "https://static-01.daraz.com.bd/p/dc2f7df333d2a4b9d9301044a002ceb6.jpg_720x720.jpg_.webp",

        },
    ];
    return (
        <div className="lg:px-36 mt-20">
            <div className="mx-auto mt-5">
                <h1 className="text-4xl text-center font-medium mb-5">Our Gallery</h1>
                <div className="">
                    <Gallery images={images} />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;