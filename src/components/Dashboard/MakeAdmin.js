import React from 'react';
import UserRow from './UserRow';

const MakeAdmin = () => {
    return (
        <div className="w-11/12 lg:w-full mb-40">
            <div className='w-full flex justify-center mt-0'>
                <p className='section-title text-[20px] md:text-[30px]'>Make admin</p>
            </div>
            <div class="overflow-x-scroll">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-gray-300 text-[#125f82]'>Index</th>
                            <th className='bg-gray-300 text-[#125f82]'>Name</th>
                            <th className='bg-gray-300 text-[#125f82]'>Email</th>
                            <th className="text-center bg-gray-300 text-[#125f82]">Role</th>
                            <th className="text-center bg-gray-300 text-[#125f82]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserRow></UserRow>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MakeAdmin;