import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import CommunityModal from '../../Pages/OtherPages/CommunityModal/CommunityModal';
import CommunityPost from '../../Pages/OtherPages/CommunityPost/CommunityPost';
import CommunityPosted from '../../Pages/OtherPages/CommunityPosted/CommunityPosted';



const CommunityLaout = () => {
    return (
        <div className=''>
            <div className=''>
                <div className="bg-sky-500 p-10">
                    <h1 className="text-sky-50 p-2 font-bold text-center text-5xl">Community</h1>
                    <p className="text-black mb-2 text-center">What do you mean</p>
                    {/* <img className="" src="https://i.ibb.co/mtb0P27/images-3.jpg" alt="" /> */}
                    <div className="flex w-full items-center">

                        <input type="text" placeholder="Search" className="input input-bordered input-secondary w-full " />

                        <div className="p-2">
                            <button className="btn btn-outline"><FaSearch></FaSearch></button>
                        </div>
                    </div>

                </div>
                <div>

                </div>
                <nav>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-2 mb-3 mx-10'>
                        <Link to={"/Community"} className="btn  btn-outline btn-info"> <p className='text-white font-semibold text-3xl'>Feed</p></Link>
                        <Link to={"/Community/friend"} className="btn btn-outline btn-success"><p className='text-white font-semibold text-3xl'>Freind</p></Link>
                        <Link to={"/Community/grupe"} className="btn btn-outline btn-warning"><p className='text-white font-semibold text-3xl'>Grupe</p></Link>



                    </div>
                </nav>
                <div className='ml-4'>
                    <button><CommunityModal>post</CommunityModal> </button>
                </div>

                <Outlet></Outlet>
            </div>

        </div>

    );
};

export default CommunityLaout;