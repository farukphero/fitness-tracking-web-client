import { useQuery } from 'react-query';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Tutorial.css"
import useTitle from '../../../Hooks/useTitle/useTitle';

const Tutorials = () => {
    useTitle("Tutorials")
    const { data: categories = [],  } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
    })
    console.log(categories)
    // if (isLoading) return <h1>Loading.....</h1>
    return (
        <div>
            <div className='py-20 banner'>
                <h1 className='text-center text-2xl font-bold'>Lead A Healthy Life.</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
                {
                    categories.map(category => <div>
                        <div className=''>
                            <img className='h-48 w-full' src={category.image} alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <div>
                               <p>{category.category}</p>
                            </div>
                            <div className='mt-1'>
                            <Link to={`/singleCategory/${category._id}`}><FaArrowRight></FaArrowRight></Link>
                                
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Tutorials;