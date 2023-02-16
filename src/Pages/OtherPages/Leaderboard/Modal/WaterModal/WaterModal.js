import React from 'react';
import { Link } from 'react-router-dom';
import LoogedWater from '../../../Logs/Food/LeftSideLog/LoogedWater/LoogedWater';
import { FaLongArrowAltRight } from "react-icons/fa";
const WaterModal = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="water-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative bg-white h-screen">
                        <label htmlFor="water-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h1 className="text-2xl font-bold text-black text-center">Must Drink 8 Liter Daily</h1>
                        <LoogedWater></LoogedWater>
                        <div className='mt-1 flex items-center'>
                            <p className='text-gray-500 mr-2'>Set New Goal?</p>
                            <Link to="/Logs/Food"><button className='btn btn-ghost font-bold text-black  text-center '>Next <FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterModal;