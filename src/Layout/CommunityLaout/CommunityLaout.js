// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import { FaLayerGroup, FaSearch, FaUserFriends } from "react-icons/fa";
// import CommunityModal from "../../Pages/OtherPages/CommunityModal/CommunityModal";
// import CommunityPost from "../../Pages/OtherPages/CommunityPost/CommunityPost";
// import CommunityPosted from "../../Pages/OtherPages/CommunityPosted/CommunityPosted";
// import {
//   FaDashcube,
//   FaSignOutAlt,
//   FaUser,
//   FaFacebookMessenger,
//   FaHome,
// } from "react-icons/fa";
// import { FeatureGroup } from "react-leaflet";

// const CommunityLaout = () => {
//   return (
//     <div >
//       <div>
//         {/* <div className="bg-gradient-to-r from-green-800 via-green-500 to-green-800 p-3"> */}
//           {/* <h1 className="text-sky-50 font-bold text-center text-5xl">
//             Community
//           </h1> */}
//           {/* <p className="text-black mb-2 text-center">What do you mean</p> */}
//           {/* <img className="" src="https://i.ibb.co/mtb0P27/images-3.jpg" alt="" /> */}
//           {/* <div className="flex w-10/12 mx-auto items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               className="input input-bordered input-secondary w-full bg-gray-300"
//             />

//             <div className="p-2">
//               <button className="btn btn-outline">
//                 <FaSearch></FaSearch>
//               </button>
//             </div>
//           </div> */}
//         {/* </div> */}
//         {/* ------------------------------------------------------------ */}

//         <div className="drawer drawer-mobile">
//           <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content flex flex-col items-center justify-center">
//             <Outlet></Outlet>
//             {/* <!-- Page content here --> */}
//             <label
//               htmlFor="my-drawer-2"
//               className="btn btn-primary drawer-button lg:hidden"
//             >
//               Open drawer
//             </label>
//           </div>
//           <div className="drawer-side">
//             <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//             <ul className="menu p-4 w-80 bg-base-100 text-base-content">
//               {/* <!-- Sidebar content here --> */}
//               <Link
//                 to={"/Community/AllUsers"}
//                 className="btn btn-outline btn-success"
//               >
              
//                  <Link to="/Community/AllUsers" className="flex gap-2"><FaUserFriends></FaUserFriends> Add New Friend</Link> 
              
//               </Link>
//               <Link
//                 to={"/Community/group"}
//                 className="btn btn-outline btn-warning mt-2"
//               >
//                 <p className="text-white font-semibold text-xl flex gap-2">
//                   <FaLayerGroup></FaLayerGroup> All Friends
//                 </p>
//               </Link>
//               {/* <Link
//                 to={"/Community/group"}
//                 className="btn btn-outline btn-warning my-2"
//               >
//                 <p className="text-white font-semibold text-3xl">
//                   <FaLayerGroup></FaLayerGroup>
//                 </p>
//               </Link> */}
//             </ul>
//           </div>
//         </div>

//         {/* -------------------------------------------------- */}

//         {/* <div className="w-10/12 mx-auto">
//           <div className="grid grid-cols-3 lg:grid-cols-3 gap-3 mt-2 mb-3 mx-10">
//             <Link to={"/Community"} className="btn  btn-outline btn-info">
//               <p className="text-white font-semibold text-3xl">
//                 <FaHome></FaHome>
//               </p>
//             </Link>
           
           
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-2 mb-3 mx-10">
              
//             </div>
//           </div>
//         </div> */}
//         {/* <div className="ml-4">
//           <button>
//             <CommunityModal>post</CommunityModal>{" "}
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };
// // edite

// export default CommunityLaout;
