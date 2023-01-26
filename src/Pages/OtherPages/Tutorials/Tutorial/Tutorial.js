
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Tutorial = () => {
    const data = useLoaderData();
    // console.log(data);
    const { data: tutorials = [], refetch } = useQuery({
        queryKey: ['tutorials'],
        queryFn: () => fetch(`http://localhost:5000/tutorials?category=${data.category}`)
            .then(res => res.json())
            .then(data => {
                // setLoading(false)
                // console.log(data)
                return data;


            })
    })

    return (
        <div className='m-12'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6'>
                
                {tutorials.map(tutorial =><div className=''>
                    <iframe className='border' height="250" width="300" key={tutorial._id} src={tutorial.link}></iframe>
                    <h1 className='text-center text-sm'>{tutorial.title}</h1>
                </div>)}
            </div>
        </div>
    );
};

export default Tutorial;