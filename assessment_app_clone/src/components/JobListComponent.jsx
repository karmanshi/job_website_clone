import React from 'react'
import Searchbar from './Form/Searchbar'
import Dropdown from './Dropdown'
import { countryDataList, jobTypeDataList, recentJobUpdate, RecommendedJobUpdates, workForceDataList, workLocationDataList } from '../utils/dataListing'
import Listings from './Listings'

const SideFilters = () => {
    return (
        <div className="flex flex-col justify-start">
            <div className='font-bold text-lg'>Filters</div>
            <div className="flex flex-col mt-4 bg-gray-200 p-4 rounded-md gap-4">
                <Searchbar
                    labelText='Role'
                    placeholderText='Search By Role...'
                    name='role_search'
                    currentValue=''
                    onChange={() => { }}
                />
                <Searchbar
                    labelText='Company'
                    placeholderText='Search By Company Name...'
                    name='role_search'
                    currentValue=''
                    onChange={() => { }}
                />
                <Dropdown
                    showSearch={true}
                    labelText="Job Type"
                    placeholderText={"Select Job Type...."}
                    dataList={jobTypeDataList}
                    onChange={() => { }} />
                <Dropdown
                    showSearch={true}
                    labelText="Country"
                    placeholderText={"Select Country...."}
                    dataList={countryDataList}
                    onChange={() => { }} />
                <Dropdown
                    labelText="Work Location"
                    placeholderText={"Select Work Location...."}
                    dataList={workLocationDataList}
                    onChange={() => { }} />
                <Dropdown
                    labelText="Company Size"
                    placeholderText={"Select Workforce...."}
                    dataList={workForceDataList}
                    onChange={() => { }} />
            </div>
        </div>
    )
}


const JobListComponent = () => {
    return (
        <div className="flex justify-center items-center my-3">
            <div className="grid grid-cols-12 items-center h-[80vh] w-[90%] gap-x-4">
                <div className="col-span-3 h-[90%] flex justify-center">
                    <SideFilters />
                </div>
                <div className="col-span-7 h-[90%] flex justify-center">
                    <Listings />
                </div>
                <div className="col-span-2 h-[90%] flex flex-col justify-center">
                    <div className="flex flex-col justify-start w-full h-full bg-gray-200 p-4 rounded-md gap-4">
                        <div>
                            <div className='font-bold text-lg mb-1'>Recommended Jobs</div>
                            <div className='flex flex-col gap-2'>
                                {RecommendedJobUpdates?.map((item, index)=>{
                                    return <div className='bg-white p-2 rounded-md shadow-md' key={index}>{item.title}</div>
                                })}
                            </div>
                        </div>
                        <div >
                            <div className='font-bold text-lg mb-1'>Recent Updates</div>
                            <div className='flex flex-col gap-2'>
                                {
                                    recentJobUpdate?.map((item, index)=>{
                                        return <div className='bg-white p-2 rounded-md shadow-md text-sm'>{item}</div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobListComponent