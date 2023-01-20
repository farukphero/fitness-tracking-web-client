import React from 'react';

const FoodPlanModal = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="food-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative bg-white h-screen">
                        <label htmlFor="food-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-2xl font-bold text-black text-center">Food Plan</h3>
                        <p className="py-4 text-black">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodPlanModal;