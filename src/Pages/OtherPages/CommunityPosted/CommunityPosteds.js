import React, { useContext, useState } from 'react';

import { BiComment, BiLike, BiMessage } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import GetComment from './GetComment';

import { useQuery } from 'react-query';
const CommunityPosteds = ({ post, refetch }) => {
    refetch()

    const { liking, _id } = post
    const { user, userInfo } = useContext(AuthContext);

    const { data: commentget = [] } = useQuery({
        queryKey: ['post/comment', post?._id],
        queryFn: async () => {
            const res = await fetch(`https://fitness-tracking-web-server.vercel.app/post/comment/${post?._id}`);
            const data = await res.json()

            return data;
        }

    })
    const [like, setLike] = useState(liking + 1 || 1)

    const addlike = () => {
        setLike(like + 1)
        const liked = {
            like,
            username: userInfo?.firstName
        }
        setLike(like + 1)

        fetch(`https://fitness-tracking-web-server.vercel.app/post/${post?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(liked)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    console.log(data)
                }

            })


    }

    const Addcomment = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value
        const commentsData = {
            comment: comment,
            commentuser: userInfo?.firstName,
            commentId: post._id,
            photo: userInfo?.picture

        }

        fetch(`https://fitness-tracking-web-server.vercel.app/post/comment/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)

                }


            })

        refetch()

    }




    // refetch()

    // if (!commentget || loading) return "Loading..."

    return (

        <div>



            <div className="mb-4 card mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="avatar offline">
                        <div className="w-16 rounded-full">
                            <img alt='' src={post.userimage} />

                        </div>
                        <span className='ml-3 font-bold'>{post.firstName}</span>
                    </div>

                    <p>{post?.post}</p>

                </div>


                <figure><img className='w-full' src={post?.image} alt="" /></figure>
                <div className='p-5'>
                    <div>
                        <span className='flex items-center'>

                            <BiLike></BiLike>{liking}</span>
                    </div>
                    <hr />

                    <div className='grid grid-cols-3 sm:mx-auto'>
                        <div>
                            <Link onClick={addlike} className='btn btn-ghost'><BiLike></BiLike>Like</Link>
                        </div>
                        <div>
                            <Link className='btn btn-ghost '><BiComment></BiComment> Comment</Link>
                        </div>
                        <div>
                            <Link className='btn btn-ghost '><BiMessage></BiMessage>Message</Link>
                        </div>
                    </div>

                    <hr />

                    <div className="avatar items-center offline">
                        <div className="w-14 mr-3 h-1/2 rounded-full">
                            <img alt='' src={userInfo?.picture} />

                        </div>



                        <form onSubmit={Addcomment} className='mt-5'>
                            <label for="chat" class="sr-only">Your message</label>
                            <div class="flex items-center py-2 mx-auto rounded-lg bg-gray-50 dark:bg-gray-700">


                                <textarea id="chat" name='comment' rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                                <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                    <span class="sr-only">Send message</span>
                                </button>
                            </div>
                        </form>
                    </div>


                    {

                        commentget.map(comments =>
                            <GetComment
                                comments={comments}
                                key={comments._id}
                                refetch={refetch}
                            ></GetComment>

                        )
                    }


                    {/* <div className=" p-3 shadow-gray-800 rounded-2xl items-center offline">

                    {
                        commentget?.comment ? <div className='avatar mr-3'>

                            <div className="avatar w-7 h-1/2 rounded-full">
                                <img alt='' src="https://placeimg.com/192/192/people" />

                            </div>
                            <div className='mr-4'>
                                <h1>{commentget.commentuser}</h1>
                            </div>
                            <div>
                                <h1> {commentget?.comment}</h1>
                            </div>

                        </div> : <></>
                    }

                </div> */}


                </div>

            </div>
        </div>
    );
};

export default CommunityPosteds;