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
 
import { Link } from 'react-router-dom';

import { BiLike, BiComment, BiMessage } from 'react-icons/bi'
import { React } from 'react'
import useTitle from '../../../Hooks/useTitle/useTitle';
const CommunityPosted = () => {
useTitle("CommunityFeed")
 

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