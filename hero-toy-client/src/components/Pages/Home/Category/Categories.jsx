import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import Category from './Category';

const Categories = () => {
    const [marvelData, setMarvelData] = useState([]);
    const [starWarsData, setStarWarsData] = useState([]);
    const [transformerData, setTransformerData] = useState([]);

    useEffect(() => {
        fetch('https://hero-toy-sever.vercel.app/categories/marvel')
            .then(res => res.json())
            .then(data => setMarvelData(data))
    }, [])

    useEffect(() => {
        fetch('https://hero-toy-sever.vercel.app/categories/star')
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [])

    useEffect(() => {
        fetch('https://hero-toy-sever.vercel.app/categories/transformer')
            .then(res => res.json())
            .then(data => setTransformerData(data))
    }, [])

    return (
        <div className='lg:px-24 mt-20'>
            <h2 className='text-4xl font-medium text-center mb-10'>Shop By Category</h2>
            <Tabs className='text-center mt-5 px-4'>
                <TabList>
                    <Tab>Transformer</Tab>
                    <Tab>Star Wars</Tab>
                    <Tab>Marvel</Tab>
                </TabList>

                {/* Tba panel 1 */}
                <TabPanel>
                    <div className='text-left mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            transformerData &&
                            transformerData.map(hero => <Category
                                key={hero._id}
                                hero={hero}
                            ></Category>)
                        }
                    </div>
                </TabPanel>
                {/* Tba panel 2 */}
                <TabPanel>
                    <div className='text-left mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            starWarsData &&
                            starWarsData.map(hero => <Category
                                key={hero._id}
                                hero={hero}
                            ></Category>)
                        }
                    </div>
                </TabPanel>
                {/* Tba panel 3 */}
                <TabPanel>
                    <div className='text-left mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            marvelData &&
                            marvelData.map(hero => <Category
                                key={hero._id}
                                hero={hero}
                            ></Category>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;