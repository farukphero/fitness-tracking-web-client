import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogDetailsCard from './BlogDetailsCard';

const BlogDetails = () => {
    const location = useLocation();
    const blog = location.state?.from?.blog;
    console.log(blog)
    return (
        <div className='my-10 w-2/3 mx-auto'>
            <h1 className='text-3xl font-bold mb-3'>{blog.title}</h1>
            <img className='w-full mb-3' src={blog.image} alt='detailPageImage'></img>
            <p className='text-xl'>{blog.details}</p>
            {blog.elements.map(e => <BlogDetailsCard key={e.id} details={e}></BlogDetailsCard>)}
        </div>
    );
};

export default BlogDetails;