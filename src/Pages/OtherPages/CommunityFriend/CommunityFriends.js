import React, { useContext } from 'react';

import { useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CommunityFriends = ({ user }) => {
    const { userInfo } = useContext(AuthContext)
    console.log(userInfo)
    const [data, setData] = useState('')
    const [postdata, setPostData] = useState('')

    const handlAdd = async () => {
        setData('add')


        const friendData = {
            friend: data,
            rcvdata: userInfo?._id,
            name: userInfo?.firstName,
            photo: userInfo?.picture



        }
        fetch('http://localhost:5000/friend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(friendData)
        })
            .then(res => res.json())
            .then(Postdata => {
                if (Postdata.acknowledged) {
                    setPostData(Postdata)
                }
                console.log(Postdata)
            })
        console.log(friendData)
    }

    return (

        <div className="card mx-auto w-64 h-96 bg-white shadow-xl">

            <figure className="">
                <img src={user.picture} alt="" className="rounded-xl h-72 w-full" />
            </figure>

            <div className="p-3 items-center text-center">
                <h2 className="text-black font-semibold">{user?.firstName}{user?.lastName}</h2>

                {
                    postdata.acknowledged ? <> <button className='btn mt-2 mb-2 w-full bg-gradient-to-tr'>Request Send</button>  <button className="btn w-full btn-warning">Remove Friends</button></> : <><button onClick={handlAdd} className="btn mt-2 mb-2 w-full btn-primary">Add Friend</button>
                        <button className="btn w-full btn-warning">Remove Friends</button></>
                }



            </div>
        </div>

    );
};

export default CommunityFriends;