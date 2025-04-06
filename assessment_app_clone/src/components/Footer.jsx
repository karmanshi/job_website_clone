import React from 'react'
import startuplogo from '../assets/startuplogo.png'
import { socialMediaLinks, JobCountList, footerConditionItems } from '../utils/dataListing'

const Footer = () => {

    return (
        <>
            <div className='h-[40vh] flex justify-center items-center bg-gray-200'>
                <div className='w-[90%] grid grid-cols-12 gap-10'>
                    <div className='col-span-7 text-justify'>
                        <div className='font-bold'>Disclaimer</div>
                        <div className=''>
                            All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.
                        </div>
                    </div>
                    <div className='col-span-5 flex flex-col justify-center items-center'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='font-bold text-center'>Recognized By</div>
                                <div className='w-40 mt-2'>
                                    <img src={startuplogo} alt='startuplogo' />
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className='font-bold text-center'>Follow Us at</div>
                                <div className='flex justify-center items-center gap-4 mt-2'>
                                    {
                                        socialMediaLinks.map((item, index) => {
                                            return <a href={item.accountLink} target='_blank' rel="noreferrer" key={index}>
                                                <img src={item.imageLink} alt={item.title} className='w-10 h-10' />
                                            </a>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 gap-3 mt-5 border-2 border-white rounded-md px-5 py-2'>
                            {
                                JobCountList.map((item, index) => {
                                    return <div key={index} className='col-span-2 px-3'>
                                        <div className='font-bold text-center'>{item.name}</div>
                                        <div className='text-center'>{item.count}</div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[10vh] bg-white flex justify-center items-center gap-10'>
                {
                    footerConditionItems.map((item, index) => {
                        return <a href={item.link} key={index} className='mx-2 text-center cursor-pointer hover:text-blue-600 transition-all duration-300'>
                            {item.title}
                        </a>

                    })
                }
            </div>
            <div className='flex justify-center items-center mb-3'>
                © All Rights Reserved @ 2025 Jobtech Ventures Private Limited.
            </div>
        </>
    )
}

export default Footer