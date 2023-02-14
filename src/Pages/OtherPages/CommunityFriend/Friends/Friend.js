// import React, { useContext } from "react";
// import { useQuery } from "react-query";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

// const Friend = () => {
//   // const { user } = useContext(AuthContext);
//   // const { data: friends = [], refetch } = useQuery({
//   //   queryKey: ["tutorials"],
//   //   queryFn: () =>
//   //     fetch(``)
//   //       .then((res) => res.json())
//   //       .then((data) => {
//   //         // setLoading(false)
//   //         // console.log(data)
//   //         refetch()
//   //         return data;
//   //       }),
//   // });

//   const friends = useLoaderData()
//   console.log(friends)
//   return (
//     <div>
//          <div className="drawer drawer-mobile">
//   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content flex flex-col items-center justify-center">
//     {/* <!-- Page content here --> */}
//     <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
//     <button>Send</button>
//     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
//   </div> 
//   <div className="drawer-side">
//     <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
//     <ul className="menu p-4 w-80 bg-gray-400 flex gap-2">
//       {/* <!-- Sidebar content here --> */}
//       <img className="h-8 w-8 rounded-full" src={friends.picture} alt="" />
//       <li>{friends.firstName} {friends.lastName} </li>
      
//     </ul>
  
//   </div>
// </div>
//     </div>
//   );
// };

// export default Friend;
