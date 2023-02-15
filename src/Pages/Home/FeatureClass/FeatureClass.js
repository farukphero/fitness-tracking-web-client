import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureClass = () => {

    const [add, setAdd] = useState('')



    const clikadd = () => {
        const faq = <>
            <p className='text-black'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta qui temporibus quae ipsum rerum laborum cumque nisi similique nesciunt. Quod aspernatur perferendis neque nesciunt exercitationem placeat rerum, sed enim? Atque? </p></>
        setAdd(faq)
    }

    const Faq = [

        {
            id: 1,
            quetions: "What is fitness tracking?",
            answer: "Fitness tracking refers to the use of technology, such as wearable devices or smartphone apps, to monitor various aspects of an individual's physical activity and health, such as steps taken, calories burned, heart rate, sleep, etc."

        },
        {
            id: 2,
            quetions: "How do I access a Fitlessian?",
            answer: "You can access a fitness tracking web application by logging into the application's website on your computer or mobile device with an internet connection."
        },
        {
            id: 3,
            quetions: "Who uses Fitlessian?",
            answer: "fitlessian are used by individuals who want to monitor their physical activity and health, including athletes, fitness enthusiasts, and those who are simply looking to become more active and improve their overall health"
        },
        {
            id: 4,
            quetions: "Why you use Fitlessian?",
            answer: "Fitlessian can help you keep track of your progress, set and achieve fitness goals, motivate you to be more active, and provide insights into your overall health."
        }
    ]




    return (
        <div className='mt-8 m-10 py-10 mx-auto'>
            <p className='text-4xl font-bold text-white text-center mb-4'>Whats Your Questions</p>
            <div className="">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfdqBE5E2BUtdUp2BfKUKYpv82WfPyAZpvw&usqp=CAU" alt='' />
                    <div>
                        <div className='lg:ml-10 m-10 mt-10 grid grid-cols-1 mx-auto gap-4'>
                            {

                                Faq.map(faq => <div>

                                    <body className='bg-slate-100 w-80 rounded-xl shadow-red-500 drop-shadow-2xl '>
                                        <div className='flex justify-center'>

                                            <div className='relative p-3  text-black '>

                                                <input className='absolute peer' type="checkbox"></input>
                                                <div className='mb-3 mt-3'>

                                                    <label className='mt-3 text-2xl px-8 font-semibold text-blue-700 ml-2 tracking-[1px] mx-[20px] h-[50px] flex items-center' for="input">{faq.quetions}</label>

                                                </div>

                                                <div className=' max-h-0 overflow-hidden peer-checked:max-h-full'>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>


                                        </div>
                                    </body>

                                </div>)
                            }


                        </div>
                    </div>
                </div>
            </div>

            <div className='items-center justify-center text-center'>
                <Link to='/faq' className='btn btn-outline'>see more</Link>
            </div>

        </div>



    );
};

export default FeatureClass;