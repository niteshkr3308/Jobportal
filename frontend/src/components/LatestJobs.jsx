import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="text-4xl font-bold">
                <span className="text-[#6A38C2]">Top-Picked </span>
                <span className="text-[#F83002]"> & </span>
                <span className="text-[#32CD32] font-bold">Latest Job Openings</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    allJobs.length <= 0 
                        ? <span className="col-span-full text-center">No Job Available</span> 
                        : allJobs?.slice(0, 6).map((job) => (
                            <div 
                                key={job._id} 
                                className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-900 
                                           transition transform duration-300 
                                           hover:scale-105 hover:shadow-lg 
                                           hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <LatestJobCards job={job} />
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default LatestJobs;
