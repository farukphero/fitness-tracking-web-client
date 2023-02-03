import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaLayerGroup, FaSearch, FaUserFriends, FaFacebookMessenger, FaHome } from "react-icons/fa";
import CommunityModal from '../../Pages/OtherPages/CommunityModal/CommunityModal';



const CommunityLaout = () => {
    return (
        <div className=''>
            <div className=''>
                <div className="bg-gradient-to-r from-gray-800 via-blue-600 to-gray-800 p-10">
                    <h1 className="text-sky-50 p-2 font-bold text-center text-5xl">Community</h1>
                    <p className="text-black mb-2 text-center">What do you mean</p>
                    {/* <img className="" src="https://i.ibb.co/mtb0P27/images-3.jpg" alt="" /> */}
                    <div className="flex w-full items-center">

                        <input type="text" placeholder="Search" className="input input-bordered input-secondary w-full bg-gray-300" />

                        <div className="p-2">
                            <button className="btn btn-outline"><FaSearch></FaSearch></button>
                        </div>
                    </div>

                </div>

                <nav>
                    <div className='grid grid-cols-4 lg:grid-cols-4 gap-3 mt-2 mb-3'>

                        <Link to={"/Community"} className="btn  btn-outline btn-info"> <p className='text-white font-semibold text-3xl'> <FaHome></FaHome></p></Link>
                        <Link to={"/Community/friend"} className="btn btn-outline btn-success"><p className='text-white font-semibold text-3xl'><FaUserFriends></FaUserFriends> </p></Link>
                        <Link to={"/Community/group"} className="btn btn-outline btn-warning"><p className='text-white font-semibold text-3xl'> <FaLayerGroup></FaLayerGroup>  </p></Link>
                        <Link to={"/Community/chat"} className="btn btn-outline btn-warning"><p className='text-white font-semibold text-3xl'> <FaFacebookMessenger></FaFacebookMessenger>  </p></Link>


                    </div>
                </nav>
                <div>
                    <div className='ml-8'>
                        <button><CommunityModal>post</CommunityModal> </button>
                    </div>
                </div>

                <Outlet></Outlet>
            </div>

        </div>

    );
};

export default CommunityLaout;