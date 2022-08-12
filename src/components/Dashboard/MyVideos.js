import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcLike } from 'react-icons/fc';
import auth from '../../firebase.init';

const MyVideos = () => {
    const [user] = useAuthState(auth);

    const url = `https://infinite-island-65121.herokuapp.com/userUploadVideo?email=${user?.email}`
    const { data } = useQuery(['userUploadVideo'], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    )

    return (
        <div>
            <div className='w-full flex justify-center mt-0'>
                <p className='section-title text-green-500 text-[15px] md:text-[25px]'>All of my videos</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:gap-1 gap-4 mb-4'>
                {
                    data?.map(movie =>
                        <div className='bg-black rounded-md h-auto'>
                            <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={movie._id}>
                                <img className='w-full' src={movie.imgLink} alt="" />
                            </div>
                            <div>
                                <p className='test-xs md:text-xs lg:text-xs text-white'><span className='font-bold text-green-500 pl-2'>Description: </span>{movie?.description}</p>
                                <p><FcLike className='my-2 ml-2 inline-block' />1.8M <span className='text-sm'> ({movie?.duration}min)</span></p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyVideos;