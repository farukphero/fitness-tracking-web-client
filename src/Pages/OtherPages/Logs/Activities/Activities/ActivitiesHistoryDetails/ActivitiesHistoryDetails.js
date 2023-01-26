import React from 'react';
import LogsNavbar from '../../../../../Shared/LogsNavbar/LogsNavbar';
import DateProvider from '../../DateProvider/DateProvider';
import RouteAndDate from '../../Route&Date/Route&Date';

const ActivitiesHistoryDetails = () => {
    return (
        <div>
            <LogsNavbar></LogsNavbar>
            <div className='bg-gray-600 h-12 w-full'>
        <h1>RUN</h1>
        <DateProvider></DateProvider>
        {/* <RouteAndDate></RouteAndDate> */}
            </div>
            <div>
                <h1>Exercise Details</h1>
            </div>
        </div>
    );
};

export default ActivitiesHistoryDetails;