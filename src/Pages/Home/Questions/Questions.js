import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
        <div className=''>
            <p className='text-4xl font-bold  text-center mb-9'>User Questions
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
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