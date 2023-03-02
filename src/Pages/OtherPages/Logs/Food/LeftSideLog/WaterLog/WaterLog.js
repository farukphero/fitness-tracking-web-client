import React, { useContext } from 'react';
import ReactDatePicker from 'react-datepicker';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../../../Contexts/AuthProvider/AuthProvider';

const WaterLog = ({ startDate, setStartDate }) => {

    const user = useContext(AuthContext)

    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth();
    // const day = currentDate.getDate();

    // const currentDateOnly = new Date(year, month, day);
    // const [startDate, setStartDate] = useState(currentDateOnly);


    const handleWaterLog = (event) => {
        event.preventDefault()
        const water = event.target.water.value;
        const amount = event.target.amount.value
        let amountWithQuantity = event.target.amount.value + event.target.unit.value;
        // const unit = event.target.unit.value;
        const time = event.target.time.value;
        if (amountWithQuantity.includes('glass') && parseFloat(amount) > 0) {
            amountWithQuantity = amount * 240
        }
        else if (amountWithQuantity.includes('liter') && parseFloat(amount) > 0) {
            amountWithQuantity = amount * 1000
        }
        else if(parseFloat(amount) <= 0){
            return toast.error('please input a positive value')
        }
  
        console.log(amountWithQuantity)
        const waterInfo = { water, amountWithQuantity, time, email: user?.user?.email, date: startDate.toLocaleDateString() }
        fetch('https://fitness-tracking-web-server.vercel.app/loggedWater', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(waterInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    // refetch()
                }
            })
    }



    return (
        <div className="card-body border rounded-md mt-5">
            <div className="flex items-center justify-between w-full">
                <h2 className="font-bold lg:text-4xl capitalize">Water Log</h2>
                <div>
                    <ReactDatePicker className="font-bold w-2/4 lg:text-2xl capitalize bg-green-800"
                        name="date"
                        defaultValue='select'
                        selected={startDate}
                        // value={startDate}
                        onChange={date => setStartDate(date)}
                    />
                </div>
            </div>

            <form onSubmit={handleWaterLog}>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold capitalize text-2xl">
                                what did you eat?
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input bg-gray-500 input-bordered focus:outline-none"
                            name="water"
                            value='Water'
                        />
                    </div>
                    <div>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-3">
                    <div>

                        <div className="form-control basis-2/3">
                            <label className="label">
                                <span className="label-text text-white font-semibold lg:text-2xl capitalize">
                                    how much?
                                </span>
                            </label>
                            <div className='flex gap-3'>
                                <input
                                    type="number"
                                    className="input bg-gray-500 input-bordered focus:outline-none"
                                    name="amount"
                                    defaultValue={0}
                                />
                                <select
                                    name="unit" className="select select-bordered">
                                    <option>glass</option>
                                    <option>liter</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="form-control">

                        <label className="label w-2/3">
                            <span className="label-text font-semibold capitalize text-white lg:text-2xl">
                                when?
                            </span>
                        </label> <select
                            name="time" className="select select-bordered">

                            <option disabled selected>
                                Anytime
                            </option>
                            <option>Breakfast</option>
                            <option>Morning Snack</option>
                            <option>Launch</option>
                            <option>Afternoon Snack</option>
                            <option>Dinner</option>
                            <option>After Dinner</option>
                        </select>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-secondary hover:bg-secondary text-black w-full border-2  border-green-600 rounded-md">Log</button>
                </div>
            </form>
        </div>

    );
};

export default WaterLog;