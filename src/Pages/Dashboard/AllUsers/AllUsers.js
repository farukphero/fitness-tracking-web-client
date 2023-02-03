import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const AllUsers = () => {
    const { isLoading, error, data:allUsers=[],refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://fitness-tracking-web-server.vercel.app/users').then(
            (res) => res.json(),
          ),
      })
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    

      const handleAdmin = (id) => {
        fetch(`https://fitness-tracking-web-server.vercel.app/users/admin/${id}`, {
          method: "PUT",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              toast.success("Admin make Successfully");
              refetch();
            }
          });
      };

      const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
          fetch(`https://fitness-tracking-web-server.vercel.app/users/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                toast.success("Successfully Delete");
                refetch()
              }
            });
        }
      };
      return (
        <div className="h-[730px] w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className='bg-gradient-to-r from-green-700 to-green-500 text-white text-lg'>SL</th>
              <th className='bg-gradient-to-r from-green-700 to-green-500 text-white text-lg'>Users</th>
              <th className='bg-gradient-to-r from-green-700 to-green-500 text-white text-lg'>Name</th>
              <th className='bg-gradient-to-r from-green-700 to-green-500 text-white text-lg'>Email</th>
              <th className='bg-gradient-to-r from-green-700 to-green-500 text-white text-lg'>Admin </th>
              <th className='bg-gradient-to-r from-green-700 to-green-500 text-white text-lg'> <RiDeleteBin6Fill className='h-6 w-6'></RiDeleteBin6Fill> </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((allUser, idx) => 
              <tr key={allUser._id}>
                <th className='bg-gradient-to-r from-gray-600 to-green-600  text-white text-lg'>{idx + 1}</th>
                <th className='bg-gradient-to-r from-gray-600 to-green-600    text-white text-lg'> <img className='h-12 w-12 rounded' src={allUser?.picture} alt="" /> </th>
           
                <td className='bg-gradient-to-r from-gray-600 to-green-600  text-white text-lg'>{allUser.firstName} {allUser.lastName} </td>
                <td className='bg-gradient-to-r from-gray-600 to-green-600  text-white text-lg'>{allUser.email}</td>
                <td className='bg-gradient-to-r from-gray-600 to-green-600  text-white text-lg'>
                  {allUser?.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(allUser._id)}
                      className="btn btn-outline text-white btn-sm"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td className='bg-gradient-to-r from-gray-600 to-green-600 text-white text-lg'>
                  <button 
                  onClick={()=>handleDelete(allUser._id)} 
                  className="hover:btn hover:btn-outline hover:btn-sm"><RiDeleteBin6Fill className='h-6 w-6 text-white'></RiDeleteBin6Fill></button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
      )
};

export default AllUsers;