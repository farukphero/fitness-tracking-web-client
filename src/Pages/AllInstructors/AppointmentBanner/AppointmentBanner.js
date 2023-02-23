import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

  return (
    <header>
      <div className="hero" style={{
        // background:`url(${image})`,
        backgroundPosition:'left'
    }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt="" /> */}
          <div className="md:mr-10">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              //   footer={footer}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
