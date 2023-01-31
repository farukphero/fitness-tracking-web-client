import { React, useEffect, useState } from 'react'
import CommunityPosteds from './CommunityPosteds';

const CommunityPosted = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(posts)
            })

    }, [])


    return (
        <div>

            {
                posts.map(post =>
                    <CommunityPosteds
                        key={post._id}
                        post={post}
                    >

                    </CommunityPosteds>

                )
            }
        </div>
    );
};
export default CommunityPosted;