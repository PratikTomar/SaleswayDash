import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
        </div>
    );
}

export default Loader;
