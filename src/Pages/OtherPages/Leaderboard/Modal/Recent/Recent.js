import React from 'react';
import { Link } from 'react-router-dom';

import { FaLongArrowAltRight } from "react-icons/fa";
import ActivitiesHistory from '../../../Logs/Activities/ActivitiesHistory/ActivityHistory/ActivityHistory';

const Recent = () => {
    return (
        <div>
            <input type="checkbox" id="recent-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-white h-screen">
                    <label htmlFor="recent-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-black text-center">Set Your Food Plan!</h3>
                    <ActivitiesHistory></ActivitiesHistory>
                    <div className='border-t border-gray-300  '>
                        <div className='mt-1 flex items-center'>
                            <p className='text-gray-500 mr-2'>Set New Goal?</p>
                            <Link to="/Logs/Activities"><button className='btn btn-ghost font-bold text-black  text-center '>Next <FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recent;