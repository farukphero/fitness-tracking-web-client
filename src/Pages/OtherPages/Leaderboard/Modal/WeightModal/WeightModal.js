import React from 'react';

const WeightModal = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="weight-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative bg-white h-screen">
                        <label htmlFor="weight-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>  
                        <h1 className="text-2xl font-bold text-black text-center">Have any weight goal?</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeightModal;