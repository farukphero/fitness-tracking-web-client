 
// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
// import CommunityPosted from '../CommunityPosted/CommunityPosted';


// const CommunityPost = () => {
//     // const { user, loading } = useContext(AuthContext)
//     // console.log(user)
//     // const imageHostkeyk = process.env.REACT_APP_IMG_KEY
//     // const { register, formState: { errors }, handleSubmit } = useForm()
//     // const PostButton = data => {
 
// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
// import useTitle from '../../../Hooks/useTitle/useTitle';
// import CommunityPosted from '../CommunityPosted/CommunityPosted';


// const CommunityPost = () => {
//     useTitle("CommunityPost")
//     const { user, loading } = useContext(AuthContext)
//     console.log(user)
//     const imageHostkeyk = process.env.REACT_APP_IMG_KEY
//     const { register, formState: { errors }, handleSubmit } = useForm()
//     const PostButton = data => {
 

//     //     console.log(data)
//     //     const image = data.img[0]

//     //     const formData = new FormData()
//     //     formData.append('image', image)
//     //     const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`
//     //     fetch(url, {
//     //         method: 'POST',
//     //         body: formData


//     //     })
//     //         .then(res => res.json())
//     //         .then(imgData => {
//     //             console.log(imgData)
//     //             if (imgData.success) {

//     //                 console.log(imgData.data.url)

//     //             }

//     // const postData = {
//     //     post: data.post,
//     //     image: imgData.data.url,
//     //     username: user?.displayName,
//     //     email: user?.email

//     // }
//     // fetch('https://chat-six-ashen.vercel.app/post', {
//     //     method: 'POST',
//     //     headers: {
//     //         'content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify(postData)
//     // })
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         if (data.acknowledged) {
//     //             navigate('/media')
//     //             toast.success('Your post adedd on media')
//     //         }
//     //         console.log(data)


//     //     })
//     // console.log(postData)
//     //         })





//     // }
//     return (
//         <div className="p-10">
//             <div className='items-center justify-start flex gap-4'>
//                 <div className="avatar">
//                     <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

//                     </div>
//                 </div>
//                 <div>
//                     <h1>Sadekin Chowdhury</h1>
//                 </div>
//             </div>
//             <div>
//                 <div>
//                     {/* <div className=''>
//                         <div className="avatar offline">
//                             <div className="w-10 rounded-full">
//                                 <img alt='' src="https://placeimg.com/192/192/people" />

//                             </div>
//                             <span className='ml-3 font-bold'> {user?.displayName}</span>
//                         </div>
//                     </div> */}


//                     <form onSubmit={handleSubmit(PostButton)}>
//                         <div>
//                             <textarea className='w-full outline rounded-2xl' type='text' {...register("post", {

//                             })} placeholder='Write you article....' id="" cols="30" rows="10">

//                             </textarea>
//                         </div>

//                         <div className="form-control w-full max-w-xs">
//                             <input type="file" {...register("img", {

//                             })} placeholder='img add' className="input input-bordered mb-2 w-full max-w-xs" />
//                         </div>
//                         <div>
//                             <input className='btn btn-accent' type="submit" />
//                         </div>
//                     </form>


//                 </div>

//             </div>

//         </div>
//     );
// };

// export default CommunityPost;