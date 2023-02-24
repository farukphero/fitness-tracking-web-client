import React, { useContext, useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Contexts/AuthProvider/AuthProvider';
import WeightGoalChart from '../../../Logs/Weight/WeightGoalChart/WeightGoalChart';
// import { useQuery } from 'react-query';

const WeightModal = () => {
    const { userInfo, user, weightLoggedInfo } = useContext(AuthContext)
    const prevWeight = userInfo?.weight;
    const [weightGoal, setWeightGoal] = useState([])
    const loggedWeight = weightLoggedInfo[0]?.weight;
    const loggedDate = weightLoggedInfo[0]?.date;

    const expectedWeight = weightGoal[0]?.expectedWeight;

    const gain = parseInt(prevWeight) + parseInt(expectedWeight);
    const lose = parseInt(prevWeight) - parseInt(expectedWeight);
    console.log(gain, lose, loggedWeight);


    useEffect(() => {
        fetch(`https://fitness-tracking-web-server.vercel.app/weightGoal?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setWeightGoal(data));
    }, [user?.email]);


    return (
        <div>
            <div>
                <input type="checkbox" id="weight-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative bg-white h-screen">
                        <label htmlFor="weight-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='my-4 mx-auto'>
                            <WeightGoalChart></WeightGoalChart>
                        </div>
                        {
                            weightGoal[0]?.goalType ? <>
                                {
                                    weightGoal[0]?.goalType === "Gain" ?
                                        <>
                                            <div>
                                                <div className='flex text-gray-400 text-3xl font-bold'>
                                                    <h1 className=' mr-2'>Your Current Weight</h1><span className='text-gray-500 mr-1 border-double border-4 border-gray-400 px-1'>{loggedWeight} </span><span>Kg</span>
                                                </div>
                                                <div className='flex text-gray-500'>
                                                    <p className='mr-2'> Last logged:</p><span>{loggedDate}</span>
                                                </div>
                                                <div className='flex text-gray-500 text-3xl font-bold my-5'>
                                                    <h1 className='mr-2'>You Want To Reach</h1><span className='text-gray-500 mr-1 border-double border-4 border-gray-400 px-1'>{gain} </span><span>Kg</span>
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <div>
                                                <div className='flex text-gray-400 text-3xl font-bold'>
                                                    <h1 className=' mr-2'>Your Current Weight</h1><span className='text-gray-500 mr-1 border-double border-4 border-gray-400 px-1'>{loggedWeight} </span><span>Kg</span>
                                                </div>
                                                <div className='flex text-gray-400'>
                                                    <p className='mr-2'>last logged:</p><span>{loggedDate}</span>
                                                </div>
                                                <div className='flex  text-gray-400 text-3xl font-bold mt-5 mb-12'>
                                                    <h1 className='mr-2'>You Want To Reach</h1><span className='text-gray-500 mr-1 border-double border-4 border-gray-400 px-1'>{lose} </span><span>Kg</span>
                                                </div>
                                            </div>
                                        </>
                                }
                            </> :
                                <>
                                    <h1 className="text-2xl font-bold text-black text-center my-5">Have any weight goal?</h1>
                                </>
                        }


                        <div className='border-t border-gray-300  '>
                            <div className='mt-1 flex items-center'>
                                <p className='text-gray-500 mr-2'>Set New Goal?</p>
                                <Link to="/Logs/Weight"><button className='btn btn-ghost font-bold text-black  text-center '>Next <FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeightModal;