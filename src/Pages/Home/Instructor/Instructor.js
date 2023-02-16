// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// const Instructor = () => {
//     const [add, setAdd] = useState()

//     const [instructor, setInstructor] = useState([])
//     useEffect(() => {

//         fetch('http://localhost:5000/instructor')
//             .then(res => res.json())
//             .then(data => setInstructor(data))
//     }, [])
//     // console.log(instructor)
//     return (
//         <div className="w-2/3 mt-9 m-10 mx-auto">

//             <h1 className="text-3xl font-bold text-center mb-7">All Instructor</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {

//                     instructor.map(insta =>
//                         <div
//                             insta={insta}
//                             id={insta._id}
//                         >

//                             <div className="card  shadow-2xl">
//                                 <figure><img className="w-36 rounded-full" src={insta.img} alt="" /></figure>
//                                 <div className="card-body grid grid-cols-1 lg:grid-cols-2 ">
//                                     <div>
//                                         <p>{insta.name}</p>
//                                     </div>
//                                     <div className="">
//                                         <Link to={`/instructor/${insta?._id}`} className="btn  shadow-2xl bg-gradient-to-t">Details</Link>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                     )
//                 }

//             </div>
//         </div>


//     )

// }
// export default Instructor;