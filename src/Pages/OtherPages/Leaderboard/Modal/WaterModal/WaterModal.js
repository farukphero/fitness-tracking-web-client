import React from 'react';
import { FaBeer } from 'react-icons/fa';

const WaterModal = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="water-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative bg-white h-screen">
                        <label htmlFor="water-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                       
                        <div>
                            <FaBeer></FaBeer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaterModal;