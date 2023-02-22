import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment ,setTreatment] = useState(null)

    useEffect(()=>{
        fetch('AppointmentOptions.json')
        .then(res=> res.json())
        .then(data=> setAppointmentOptions(data))
    },[])



    return (
        <section className='my-20'>
              <div>
              {
                selectedDate ? <h1 className='text-center text-2xl'> {format(selectedDate, 'PPPP')}</h1> :<h1 className='text-center text-2xl'>One day selected</h1>
              }
              </div> 
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                 {
                    appointmentOptions.map(options=><AppointmentOption 
                    
                     key={options._id}
                     options ={options}
                     setTreatment={setTreatment}
                    
                    ></AppointmentOption>)
                 }
                  { treatment &&
                     <BookingModal
                     selectedDate={selectedDate}
                     treatment={treatment}
                     setTreatment={setTreatment}
                    ></BookingModal>
                  }
              </div>
        </section>
    );
};

export default AvailableAppointment;