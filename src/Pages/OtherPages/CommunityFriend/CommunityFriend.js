import React from 'react';
 
import { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle/useTitle';
import CommunityFriends from './CommunityFriends';

const CommunityFriend = () => {
    useTitle("CommunityFriend")
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://fitness-tracking-web-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(users)
            })

    }, [])

  
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4'>
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