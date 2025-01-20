// import React, { useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { COMPANY_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useDispatch } from 'react-redux'
// import { setSingleCompany } from '@/redux/companySlice'

// const CompanyCreate = () => {
//     const navigate = useNavigate();
//     const [companyName, setCompanyName] = useState();
//     const dispatch = useDispatch();
//     const registerNewCompany = async () => {
//         try {
//             const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 withCredentials:true
//             });
//             if(res?.data?.success){
//                 dispatch(setSingleCompany(res.data.company));
//                 toast.success(res.data.message);
//                 const companyId = res?.data?.company?._id;
//                 navigate(`/admin/companies/${companyId}`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-4xl mx-auto'>
//                 <div className='my-10'>
//                     <h1 className='font-bold text-2xl'>Your Company Name</h1>
//                     <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
//                 </div>

//                 <Label>Company Name</Label>
//                 <Input
//                     type="text"
//                     className="my-2"
//                     placeholder="JobHunt, Microsoft etc."
//                     onChange={(e) => setCompanyName(e.target.value)}
//                 />
//                 <div className='flex items-center gap-2 my-10'>
//                     <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
//                     <Button onClick={registerNewCompany}>Continue</Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CompanyCreate



import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        if (!companyName || companyName.trim() === "") {
            toast.error("Company name cannot be empty!");
            return;
        }
        
        // Get user token
        const userToken = localStorage.getItem("token");
        if (!userToken) {
            toast.error("Please log in to continue!");
            navigate('/login'); // Redirect to login page if no token
            return;
        }

        try {
            const res = await axios.post(
                `${COMPANY_API_END_POINT}/register`,
                { companyName },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`,
                    },
                    withCredentials: true,
                }
            );

            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.error(error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <div className="my-10">
                    <h1 className="font-bold text-2xl">Your Company Name</h1>
                    <p className="text-gray-500">
                        What would you like to give your company name? You can change this later.
                    </p>
                </div>

                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="Enter your company name (e.g., JobHunt, Microsoft)"
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className="flex items-center gap-2 my-10">
                    <Button variant="outline" onClick={() => navigate("/admin/companies")}>
                        Cancel
                    </Button>
                    <Button onClick={registerNewCompany}>Continue</Button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCreate;
