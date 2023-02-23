import React, { useEffect, useState } from 'react';
import GotQuetions from './GotQuetions';




const Questions = () => {

    const [qusetions, setQuestions] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/question')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    console.log(qusetions)
    return (
        <section className='mt-20'>
            <div className='lg:-mt-72 md:-mt-96 lg:-ml-16'>
            <p className='text-4xl font-semibold  text-center mb-9'>User Questions
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    qusetions.map(quetion =>
                        <GotQuetions
                            quetion={quetion}
                            key={quetion._id}
                        ></GotQuetions>
                    )
                }
            </div>
        </div>
        </section>
    );
};

export default Questions;