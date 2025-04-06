import React from "react";
import { FaBriefcase, FaMoneyBillWave, FaClock, FaMapMarkerAlt, FaRegEnvelope, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import {jobDataList} from "../utils/dataListing";

const JobCard = () => {
  return (
    <div className="p-4 space-y-6">
      {jobDataList.map((job, index) => (
        <div key={index} className="max-w-3xl mx-auto bg-white border rounded-2xl shadow-sm overflow-hidden p-4">
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
            <button className="w-full md:w-[30%] bg-[#09072f] text-white font-semibold p-2 rounded-md md:rounded-l-none md:rounded-r-md ml-2">
              APPLY
            </button>
          </div>

          {/* Posted Time */}
          <p className="text-right text-xs text-gray-500 mt-2">{job.posted}</p>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
