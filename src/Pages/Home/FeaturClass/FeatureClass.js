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
        <div className='mt-8 p-10'>
            <p className='text-4xl font-bold text-white text-center mb-4'>Whats Your Questions</p>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfdqBE5E2BUtdUp2BfKUKYpv82WfPyAZpvw&usqp=CAU" alt='' />
                    <div>
                        <div className='ml-10  mt-10 w-full grid grid-cols-1 mx-auto gap-4'>
                            {

                                Faq.map(faq => <div>

                                    <body className='bg-slate-100 w-96 rounded-xl shadow-red-500 drop-shadow-2xl '>
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
// import { set } from 'date-fns';
// import React from 'react';
// import { useState } from 'react';


// const FeatureClass = () => {
//     const [currentStep, setCurrentStep] = useState();


//     const [burn, setBurn] = useState('')

//     const calculate = () => {
//         const duration = 30; // in minutes
//         const met = 8.0; // for running
//         const weight = 70;
//         setBurn((duration, met, weight) / 24)
//         if (burn < 1) {
//             setBurn(5)
//         }
//     }

//     const feture =
//         [
//             {
//                 id: 1,
//                 name: `Heavy weight classes`,
//                 img: `https://i.ibb.co/gFPDvyP/icon3.png`,
//             },
//             {
//                 id: 2,
//                 name: `Heavy weight classes`,
//                 img: `https://i.ibb.co/gFPDvyP/icon3.png`,
//             },
//             {
//                 id: 3,
//                 name: `Heavy weight classes`,
//                 img: `https://i.ibb.co/gFPDvyP/icon3.png`,
//             }
//         ]

//     const steps = [
//         { id: 1, title: 'Set fitness goals', description: 'Determine what you want to achieve' },
//         { id: 2, title: 'Track nutrition', description: 'Keep track of what you eat' },
//         { id: 3, title: 'Track workouts', description: 'Record your exercises and progress' },
//     ];

//     return (
//         <div className='mx-auto'>
//             <div className='text-center mt-7 text-3xl font-semibold '>
//                 <button onClick={calculate} className='btn btn-secondary'>clicke</button>
//                 <p className='text-2xl font-bold mt-4'>{burn}</p>
//                 <p className='text-xl'>Checkout our fitness classes</p>
//             </div>

//             <div className=' grid grid-cols-3 gap-1 p-10 '>

//                 {
//                     feture.map(fet => <div
//                         fet={fet}
//                         key={fet.id}
//                         className='w-2/6'
//                     >

//                         <div className=''>

//                             <div className="card p-5 w-96 bg-base-100 shadow-xl">
//                                 <div className="card-body">
//                                     <h2 className="card-title">Shoes!</h2>
//                                     <p>{fet.name}</p>
//                                 </div>
//                                 <figure><img src={fet.img} alt="Shoes" /></figure>
//                             </div>
//                         </div>


//                     </div>)
//                 }
//             </div>
//             <div className="container mx-auto">
//                 <h1 className="text-2xl font-bold mb-5">Fitness Flowchart</h1>
//                 <div className="flex justify-between">
//                     {steps.map((step) => (
//                         <div
//                             key={step.id}
//                             className={`bg-white p-5 rounded-lg shadow-lg ${currentStep === step.id ? 'bg-indigo-500' : ''}`}
//                             onClick={() => setCurrentStep(step.id)}
//                         >
//                             <h2 className="text-lg font-bold">Step {step.id}</h2>
//                             <p className="text-gray-700">{step.title}</p>
//                             <p className="text-gray-500">{step.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeatureClass;

