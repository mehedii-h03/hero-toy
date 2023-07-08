import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const RetailPartner = () => {
    // Initialize AOS library
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="mt-20 mb-10">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-medium mb-8">Our Retail Partners</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div data-aos="fade-up" className="flex justify-center items-center">
                        <img src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/unimart.jpg?resize=150%2C150&ssl=1"
                            alt="Retail Partner" className="w-32 h-32 object-contain" />
                    </div>
                    <div data-aos="fade-up" className="flex justify-center items-center">
                        <img src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/shwapno.jpg?resize=150%2C150&ssl=1"
                            alt="Retail Partner" className="w-32 h-32 object-contain" />
                    </div>
                    <div data-aos="fade-up" className="flex justify-center items-center">
                        <img src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/kids-mom.jpg?resize=150%2C150&ssl=1" alt="Retail Partner" className="w-32 h-32 object-contain" />
                    </div>
                    <div data-aos="fade-up" className="flex justify-center items-center">
                        <img src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/well-being.jpg?resize=150%2C150&ssl=1" alt="Retail Partner" className="w-32 h-32 object-contain" />
                    </div>
                    <div data-aos="fade-up" className="flex justify-center items-center">
                        <img src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/togu-mogu.jpg?resize=150%2C150&ssl=1" alt="Retail Partner" className="w-32 h-32 object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetailPartner;
