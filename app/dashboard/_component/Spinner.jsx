// Spinner.jsx
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-16 h-16 border-8 border-t-8 border-purple-500 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
