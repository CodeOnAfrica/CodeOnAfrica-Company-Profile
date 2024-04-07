import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
     <h1 className='text-center md:text-9xl font-bold text-blue-500'>404</h1>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for could not be found.</p>
      <Link to="/" className="text-blue-500 hover:underline border border-blue-500 rounded-lg px-4 py-2 font-medium">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
