import { React, useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import CommunityPosteds from './CommunityPosteds';

const CommunityPosted = () => {
    const { user, userInfo } = useContext(AuthContext);


    const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('https://fitness-tracking-web-server.vercel.app/post');
            const data = await res.json()

            return data;
        }
    })





    return (
        <div>

            <div className="avatar ml-8 mt-2">
                <div className="w-16 rounded-full">
                    <img alt='' src={userInfo?.picture} />

                </div>
                <span className='ml-3 font-bold'>{userInfo?.firstName}{userInfo?.lastName}</span>




            </div>
            <div className=''>


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
        </div>
    );
};
export default CommunityPosted;