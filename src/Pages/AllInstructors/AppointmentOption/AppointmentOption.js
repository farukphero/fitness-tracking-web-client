import React from 'react';

const AppointmentOption = ({options,setTreatment}) => {
    const { name, slots } = options
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">
            <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
            <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
            <div className="card-actions justify-center">
                <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal"
                    className="btn btn-primary text-white"
                    onClick={() => setTreatment(options)}
                >Book Appointment</label>
                {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}
            </div>
        </div>
    </div>
    );
};

export default AppointmentOption;