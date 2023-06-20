import React from 'react'
import Navbar from '../navbar/Navbar'

const Document = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex items-center justify-center h-screen w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Under Development</h1>
        </div>
      </div>
    </div>
  );
}

export default Document