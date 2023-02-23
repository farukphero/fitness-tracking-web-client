import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import GotQuetions from './GotQuetions';




const Questions = () => {

    const [qusetions, setQuestions] = useState([])

    useEffect(() => {

        fetch('https://fitness-tracking-web-server.vercel.app/question')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    console.log(qusetions)
    return (
        <div className='m-5'>
            <p className='text-4xl font-semibold  text-center mb-9'>User Questions
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-2'>
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
    );
};

export default Questions;