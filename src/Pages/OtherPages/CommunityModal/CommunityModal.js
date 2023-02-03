import React from 'react';
import CommunityFeed from '../Communityfeed/CommunityFeed';

const CommunityModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn ml-32 lg:ml-40">Post start</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <CommunityFeed></CommunityFeed>
                </div>
            </div>
        </div>
    );
};

export default CommunityModal;