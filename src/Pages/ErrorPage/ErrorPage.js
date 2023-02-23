import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page" className='h-96 flex justify-center align-middle items-center'>
        <div>
        <h1 className='text-5xl text-red-500'>Oops!</h1>
        <p className='mt-3 text-xl text-white'>Sorry, an unexpected error has occurred.</p>
        <p className='text-6xl lg:text-5xl text-white'>
          <i>{error.statusText || error.message}</i>
        </p>
        </div>
      </div>
    );
};

export default ErrorPage;