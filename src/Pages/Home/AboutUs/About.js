import React from 'react';
import AboutCarousel from './AboutCarousel';

const About = () => {
    return (
        <div className=' bg-gray-700 text-white'>
            <div className='container mx-auto'>
            <h3 className='text-4xl font-semibold text-center py-10'>About Our Website</h3>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center'>
                <div className=''>
                    <AboutCarousel />
                </div>
                <div className=''>
                    <p className='lg:text-xl p-5 h-3/4'><span>You can monitor and improve your daily life, activities, and health using this website.</span>
                    <br/>
                       <span> You set goals for your diet, sleep, and exercise using the same platform. We track your progress and will update you regularly on your progress.</span>
                       <br/>
                        <span>Finally, we will show you the percentage of your goal achieved after the deadline.</span>
                        <br/>
                        <span>We hope this site will significantly assist you in maintaining your health and daily activities.</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;