import { React, useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import CommunityPosteds from './CommunityPosteds';

const CommunityPosted = () => {
    const { user, userInfo } = useContext(AuthContext);


    const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/post');
            const data = await res.json()
            refetch()
            return data;
        }
    })





    return (
        <div>
            <div className="card-body">
                <div className="avatar offline">
                    <div className="w-16 rounded-full">
                        <img alt='' src={userInfo?.picture} />

                    </div>
                    <span className='ml-3 font-bold'>{userInfo?.firstName}{userInfo?.lastName}</span>
                </div>



            </div>
            {
                posts.map(post =>
                    <CommunityPosteds
                        key={post._id}
                        post={post}
                        refetch={refetch}
                    >

                    </CommunityPosteds>

                )
            }
        </div>
    );
};
export default CommunityPosted;