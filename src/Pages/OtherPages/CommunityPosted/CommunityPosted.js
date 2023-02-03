 
import { React, useEffect, useState } from 'react'
import useTitle from '../../../Hooks/useTitle/useTitle';
import CommunityPosteds from './CommunityPosteds';
 

const CommunityPosted = () => {
  useTitle("CommunityFeed");

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://fitness-tracking-web-server.vercel.app/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(posts);
      });
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      {posts.map((post) => (
        <CommunityPosteds key={post._id} post={post}></CommunityPosteds>
      ))}
    </div>
  );
};
export default CommunityPosted;
