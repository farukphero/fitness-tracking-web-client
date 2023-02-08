import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const NeqBlog = () => {
    const Blogs = [
        {
            id: 1,

            description: "15 MAKE-AHEAD BREAKFASTS UNDER 300 CALORIES.",
            img: "https://blog.myfitnesspal.com/wp-content/uploads/2020/02/15-Make-Ahead-Breakfasts-Under-300-Calories-6.jpg"
        },
        {
            id: 2,

            description: "The problem with food",
            img: "https://th.bing.com/th/id/OIP.OyMKShJj-BHFdixqu8VRpAHaE8?w=227&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            id: 3,

            description: "Essential Guide to getting moving",
            img: "https://th.bing.com/th/id/OIP.CupRWT-dbV9m-hTgY5V7BAHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7"
        }
    ]

    return (
        <div className='mt-10 py-10'>
            <div className='mb-8'>
                <p className='text-6xl font-bold text-center'>Recipes & Inspiration</p>
                <p className='text-center mt-3'>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    Blogs.map(blog =>

                        <div

                            className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='w-full h-[300px]' src={blog.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.description}</p>

                                <div className="card-actions justify-end">
                                    <p className='text-2xl font-bold text-orange-300'>Fitlessian blog</p>
                                    <Link to='/blogdetails' className='btn btn-ghost'><p className='mr-2'>Details </p><FaArrowRight></FaArrowRight>  </Link>
                                </div>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    );
};

export default NeqBlog;