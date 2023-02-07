import React from 'react';

const Goals = () => {

    const goals = [
        {
            id: 1,
            title: "Improve",
            description: "Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.",
            img: "https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
        },
        {
            id: 2,
            title: "Signin Simplified",
            description: "Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking",
            img: "https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
        },
        {
            id: 3,
            title: "Stay Motivated",
            description: "Join the Worlds Largest Fitness Community for advice, tips, and support 24/7",
            img: "https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
        }
    ]


    return (
        <div className='mx-auto items-center justify-center mt-12 py-7  w-2/3'>

            <div className='text-center  mb-10'>
                <p className='text-5xl text-orange-400 font-bold mb-5'>The Tools for Your Goals</p>
                <p className=' text-center'>Trying to lose weight, tone up,lower your BMI,or invest in your </p>

                <p> overall health?We give you the right features to get there.</p>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    goals.map(goal => <div
                        goal={goal}
                        id={goal.id}
                        className=""
                    >
                        <div className=''>
                            <img className='bg-slate-400 rounded-full items-center justify-center p-4' src={goal.img} alt="" />
                        </div>
                        <div className='mt-6 mb-2 text-2xl font-semibold'>
                            <p>{goal.title}</p>
                        </div>
                        <div className=''>
                            <p>
                                {goal.description}
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Goals;