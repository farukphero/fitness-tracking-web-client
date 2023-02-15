import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import QuestionsModel from './QuestionsModel';

const GotQuetions = ({ quetion }) => {
    const { ask, _id, user, Name } = quetion;


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [add, setAdd] = useState("");

    const handlask = (data) => {
        const askDetails = {
            ask: data.msg,
            user: user?.email,
            Name: data?.name,
            Email: data?.email,
        };

        fetch("https://fitness-tracking-web-server.vercel.app/questions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(askDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (

        <div className="card w-80 bg-base-100 shadow-xl image-full">

            <div className="card-body">
                <h2 className="card-title">{Name}</h2>
                <p>{ask}</p>
                <div className="card-actions justify-end">

                    <QuestionsModel></QuestionsModel>

                </div>
            </div>
        </div>
    );
};

export default GotQuetions;