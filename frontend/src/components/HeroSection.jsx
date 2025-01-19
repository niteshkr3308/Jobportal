import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        if (query.trim() !== "") {
            dispatch(setSearchedQuery(query));
            navigate("/browse");
        }
    };

    return (
        <div className="text-center">
            <div className="flex flex-col gap-5 my-10">
                <div className="relative mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-large font-bold sparkling-badge">
                    No.1 <span className='text-[#32CD32]'>JOB HUB WEBSITE</span>
                    {/* Sparkles container */}
                    <div className="sparkles">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="sparkle"></div>
                        ))}
                    </div>
                </div>
                <h1 className="text-5xl font-bold">
                    Your Future Starts Here – <br /> Search, Apply & <span className="text-[#6A38C2]">Get Hired</span>
                </h1>
                <div className="overflow-hidden whitespace-nowrap">
                    <p className="font-bold slide-text">
                        &quot;The journey to your dream job begins with the right opportunity. At{' '}
                        <span className="font-bold text-[#6A38C2] border-b-2 border-black">
                            Next<span className="text-[#F83002]">Hire</span>
                            <span className="text-[#32CD32] font-bold">Hub</span>
                        </span>
                        , we bridge the gap between ambition and achievement.&quot;
                    </p>
                </div>
                <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full"
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
