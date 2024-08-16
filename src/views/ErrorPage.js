import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // 

    return () => clearTimeout(timer); // 
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
      <h3 className="text-red-600 text-[3rem] text-shadow-lg font-bold">ERROR 404</h3>
      <h6 className='text-red-600 text-[1.5rem] text-center' >Redirecting to the homepage...</h6>
    </div>
  );
};

export default ErrorPage;
