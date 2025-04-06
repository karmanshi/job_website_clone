import React from 'react'
import Dropdown from './Dropdown'
import Searchbar from './Form/Searchbar';
import { locationDataList, experienceDataList, salaryDataList } from '../utils/dataListing';



const Filterbar = () => {
    return (
        <div className='bg-blue-600 h-16 flex items-center justify-center'>
            <div className='w-[90%] grid grid-cols-12 gap-4 items-center justify-center'>
                <div className="text-white text-center font-bold">
                    Search Job
                </div>
                <div className="col-span-4">
                    <Searchbar
                        placeholderText="Search By Keyword...." name="role_search"
                        currentValue=""
                        onChange={() => { }}
                    />
                </div>
                <div className="col-span-2">
                    <Dropdown
                        showSearch={true}
                        placeholderText={"Select Company Location"}
                        dataList={locationDataList} 
                        onChange={()=>{}}/>
                </div>
                <div className="col-span-2">
                    <Dropdown
                        placeholderText={"Select Experience"}
                        dataList={experienceDataList} 
                        onChange={()=>{}}/>
                </div>
                <div className="col-span-2">
                    <Dropdown
                        placeholderText={"Select Salary"}
                        dataList={salaryDataList} 
                        onChange={()=>{}}/>
                </div>
                <div className="col-span-1">
                    <button className="border-2 border-yellow-400 rounded-md inline-block px-4 w-full py-1 font-bold bg-yellow-400 cursor-pointer">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Filterbar