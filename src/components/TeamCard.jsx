import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const TeamCard = ({ img, name, role }) => {
    return (
        <>
            <div className='flex flex-col h-[400px] w-full items-center justify-center bg-white rounded-lg p-5 '>
                <div className='rounded-full'><img className='w-[150px] h-[150px] rounded-full' src={`/images/${img}`} /></div>
                <h2 className='md:text-xl text-xl font-bold '>{name}</h2>
                <h5 className='font-semibold md:text-xl text-lg'>{role}</h5>
                <h6>Get in touch
                    through</h6>
                <div className='flex gap-2'>
                    {img === "Paulin.png" ? (
                        <>
                            <div className=' flex gap-5'>
                                <a href="https://web.facebook.com/niyobyose.paulin"> <FaFacebookSquare className='h-7 w-7 text-blue-500' /></a>
                                <a href="https://twitter.com/Paulin_Walker10"> <FaSquareXTwitter className='h-7 w-7 text-black' /></a>
                                <a href="https://www.instagram.com/paulinwalker/"> <FaInstagramSquare className='h-7 w-7 text-orange-700' /></a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className=' flex gap-5'>
                                <a href="https://web.facebook.com/ishimwe.shemu"> <FaFacebookSquare className='h-7 w-7 text-blue-500' /></a>
                                <a href="https://twitter.com/OfficialShemu"> <FaSquareXTwitter className='h-7 w-7 text-black' /></a>
                                <a href="https://www.instagram.com/ishimweshemu/"> <FaInstagramSquare className='h-7 w-7 text-orange-700' /></a>
                            </div>
                        </>
                    )}
                </div>

            </div >
        </>
    )
}


export default TeamCard