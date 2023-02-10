import React from 'react';
import useTitle from '../../../Hooks/useTitle/useTitle';
import { useEffect } from 'react';
import { useState } from 'react';
import CommunityFriends from './CommunityFriends';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CommunityFriend = () => {
    const { user,userInfo } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const result = data.filter(users =>  user.email !== users.email);
                setUsers(result)
                console.log(users)
            })

    }, [])
    console.log(users);

    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <div className='items-center mt-4 ml-6 mb-4 justify-start flex gap-4'>
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={userInfo?.picture} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>{userInfo?.firstName}{userInfo?.lastName}</h1>
                    </div>
                </div>

            </div>
            <div className='grid mx-auto ml-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                {
                    users.map(user =>
                        <CommunityFriends
                            key={user._id}
                            user={user}
                        >

                        </CommunityFriends>
                    )
                }
            </div>
        </div>
    );
};

export default CommunityFriend;