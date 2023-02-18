import React, { useContext, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../../../../Contexts/AuthProvider/AuthProvider';
import { FoodContext } from '../../../../../../Contexts/FoodProvider/FoodProvider';

const LoogedWater = ({ startDate, setStartDate }) => {
    const { logedWater, setLogedWater, totalWater, setTotalWater } = useContext(FoodContext);
    const user = useContext(AuthContext);

    const { isLoading, error, data: water, refetch } = useQuery({
        queryKey: ['loggedFood/userEmail', 'loggedWater/date'],
        queryFn: async () => {
            const res = await fetch(`https://fitness-tracking-web-server.vercel.app/loggedWater/${user?.user?.email}?date=${startDate?.toLocaleDateString()}`);
            const data = await res.json();
            return setLogedWater(data)
        }
    })
    refetch()
    // console.log(logedWater)
    useEffect(() => {
        let total = (logedWater.reduce((sum, water) => sum + water.amountWithQuantity, 0));
        setTotalWater(total);
    }, [logedWater]);

    if (isLoading) return <progress className="progress w-56"></progress>

    if (error) return 'An error has occurred: ' + error.message

    const handleDeleteWater = (water) => {
        fetch(`https://fitness-tracking-web-server.vercel.app/loggedWater/${water._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className="flex items-center justify-between w-full">
                <h2 className="font-bold text-3xl my-3 capitalize mt-24 lg:mt-5">logged Water</h2>
                <div>
                    <ReactDatePicker className="font-bold w-2/4 lg:text-2xl capitalize bg-green-800"
                        name="date"
                        defaultValue='select'
                        selected={startDate}
                        value={startDate}
                        onChange={date => setStartDate(date)}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th className="bg-gray-300 text-black text-lg">Name</th>
                            <th className="bg-gray-300 text-black text-lg">Amount</th>
                            <th className="bg-gray-300 text-black text-lg">time of intake</th>
                            <th className="bg-gray-300 text-black text-lg"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {logedWater?.map(water => <tr key={water._id}>
                            <th className="bg-white text-black">{water.water}</th>
                            <td className="bg-white text-black">{water.amountWithQuantity} ml</td>
                            <td className="bg-white text-black">{water.time}</td>
                            <td className="bg-white text-black"><button onClick={() => handleDeleteWater(water)} className="btn btn-xs text-white">X</button></td>
                        </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className="text-black bg-gray-400 text-lg">Total</th>
                            <th className="text-black bg-gray-400 text-lg">
                                {logedWater.reduce((sum, water) => sum + water.amountWithQuantity, 0)} ml
                            </th>
                            <th className="text-black bg-gray-400 text-lg"></th>
                            <th className="text-black bg-gray-400 text-lg"></th>
                        </tr>

                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default LoogedWater;