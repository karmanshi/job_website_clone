import React, { useEffect, useState } from 'react'
import { FaBriefcase, FaMoneyBillWave, FaClock, FaMapMarkerAlt, FaRegEnvelope, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { JobCountList, jobDataList } from "../utils/dataListing";
const JobListing = () => {
    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(false)
    const [currPage, setCurrPage] = useState(0)
    const [totalRecords, setTotalRecords] = useState(1000)
    const [totalPage, setTotalPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        setLoading(true)
        const totalRecordCount=jobDataList.length
        const totalData = totalRecords
        const totalPageCount = totalData % pageSize
        let maxPageCount = 0
        if (totalPageCount === 0) {
            maxPageCount = totalData / pageSize
        } else {
            maxPageCount = parseInt(totalData / pageSize) + 1
        }
        setMaxPage(maxPageCount)
        setTotalPage(maxPageCount)
        setTotalRecords(totalRecordCount)
        console.log("Total Records: ", jobDataList)
        console.log("Total Records: ", currPage*pageSize, (currPage + 1) * pageSize)
        console.log("Total Records: ", jobDataList.slice(currPage*pageSize, (currPage + 1) * pageSize))
        setDataList(jobDataList.slice(currPage * pageSize, (currPage + 1) * pageSize))
    }, [pageSize, currPage])

    return (
        <div className='bg-white w-full max-h-[80vh] rounded-md shadow-md flex flex-col justify-between'>
            <div className='h-[10%] items-center border-2 border-gray-200 rounded-t-md px-4 grid grid-cols-3 gap-2'>
                <div className='col-span-2'>
                    Showing {currPage * pageSize} to {(currPage + 1) * pageSize} of {totalRecords} entries
                </div>
                <div className='flex justify-end items-center gap-x-2'>
                    <button className='border-2 border-gray-400 rounded-md px-2 py-1 hover:bg-gray-200' onClick={() => setCurrPage(currPage - 1)} disabled={currPage === 0}>Previous</button>
                    <button className='border-2 border-gray-400 rounded-md px-2 py-1 hover:bg-gray-200' onClick={() => setCurrPage(currPage + 1)} disabled={currPage + 1 === maxPage}>Next</button>

                </div>
            </div>
            <div className='h-[80%] scroll-y overflow-y-auto border-x-2 border-x-gray-200 px-4 py-2 grid gap-2'>
                {dataList.map((job, index) => (
                    <div key={index} className="mx-auto w-full min-h-[35vh] bg-white border rounded-2xl shadow-sm overflow-hidden p-4">
                        {/* Top badge */}
                        <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                                <div className="w-14 h-14 bg-white border rounded-full flex items-center justify-center">
                                    <img src={job.logo} alt="logo" className="rounded-full w-10 h-10" />
                                </div>
                                <div>
                                    <h2 className="font-semibold text-sm">{job.title}</h2>
                                    <p className="text-sm text-gray-600">{job.company}</p>
                                </div>
                            </div>
                            <span className="bg-[#09072f] text-white text-xs px-3 py-1 rounded-tr-2xl rounded-bl-2xl">{job.badge}</span>
                        </div>

                        {/* Details row */}
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1 text-purple-600">
                                <FaBriefcase /> {job.experience}
                            </span>
                            <span className="flex items-center gap-1">
                                <FaMoneyBillWave /> {job.salary}
                            </span>
                            <span className="flex items-center gap-1 text-purple-600">
                                <FaClock /> {job.jobType}
                            </span>
                            <span className="flex items-center gap-1">
                                <FaMapMarkerAlt /> {job.location}
                            </span>
                        </div>

                        {/* Skills */}
                        <div className="mt-3 text-sm">
                            <span className="font-semibold">Key Skills: </span>
                            <span className="text-gray-800">
                                {job.skills.join(", ")}
                            </span>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex w-full md:w-[70%]">
                                <button className="flex-1 bg-teal-500 text-white p-2 rounded-l-md flex justify-center">
                                    <FaRegEnvelope />
                                </button>
                                <button className="flex-1 bg-teal-500 text-white p-2 flex justify-center border-x border-white">
                                    <FaShareAlt />
                                </button>
                                <button className="flex-1 bg-teal-500 text-white p-2 flex justify-center rounded-r-md">
                                    <FaRegBookmark />
                                </button>
                            </div>
                            <button className="w-full md:w-[30%] bg-[#09072f] text-white font-semibold p-2 rounded-md ml-2">
                                APPLY
                            </button>
                        </div>

                        {/* Posted Time */}
                        <p className="text-right text-xs text-gray-500 mt-2">{job.posted}</p>
                    </div>
                ))}
            </div>
            <div className='h-[10%] items-center border-2 border-gray-200 rounded-b-md px-4 grid gap-2'>
                <div>
                    Display
                    <input
                        type='text'
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                        className='mx-1 border-2 border-gray-400 rounded-md text-center w-10' />
                    records per page
                </div>
            </div>
        </div>
    )
}

export default JobListing