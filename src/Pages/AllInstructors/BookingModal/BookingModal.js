import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PPPP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking, date, slot, name, phone, email);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h3 className="text-lg font-bold"> {name}</h3>
          <div className="form-control">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered"
            />
           
          </div>
          <div className="card flex-shrink-0 w-full ">
            <form onSubmit={handleBooking} className="card-body">
              <div className="form-control">
              <select name="slot" className="select select-bordered w-full mt-5">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-white"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
