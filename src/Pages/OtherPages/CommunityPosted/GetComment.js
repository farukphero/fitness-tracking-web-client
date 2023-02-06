import React, { useState } from 'react';

const GetComment = ({ comments, refetch }) => {
    refetch()
    const { commentuser, comment, photo } = comments;

    return (
        <div className="flex gap-4">
            <div className='top-1/3 bg-base-100 flex py-5'>
                <div className='ml-3'>
                    <img className='w-16 h-16 rounded-full' src={photo} alt="" /> <p className='ml-3 font-semibold text-xl'></p>
                    <br />

                </div>



            </div>
            <div className="bg-slate-100 h-1/2 p-3 mt-2 rounded-2xl">
                <p className='text-2xl text-black font-semibold'> {commentuser}</p>
                <p className='text-black'>{comment}</p>

            </div>

        </div>
    );
};

export default GetComment;