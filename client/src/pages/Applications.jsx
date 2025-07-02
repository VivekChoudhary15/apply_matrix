/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import Footer from '../components/Footer'
import moment from 'moment';

const statusClass = status => {
  if (status === "Pending")
    return "inline-block min-w-[90px] text-center px-3 pyf-1 rounded-lg font-medium text-blue-700 bg-blue-100";
  if (status === "Accepted")
    return "inline-block min-w-[90px] text-center px-3 py-1 rounded-lg font-medium text-green-700 bg-green-100";
  if (status === "Rejected")
    return "inline-block min-w-[90px] text-center px-3 py-1 rounded-lg font-medium text-red-700 bg-red-100";
  return "";
};

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
    <Navbar/>
    <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto'>
      <h2 className='text-xl font-semibold mb-4 mt-5'>Your Resume</h2>
      <div className='flex gap-2 mb-6 mt-3'>
        {
          isEdit ? (
            <div>
              <label className='flex items-center' htmlFor="resumeUpload">
                <p className='bg-blue-400 text-blue-800 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
                <input id='resumeUpload' onChange={(e) => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                <img src={assets.profile_upload_icon} alt="" />
                <button onClick={ e => setIsEdit(false)} className='px-4 py-2 bg-green-100 text-black border border-green-400 rounded-md hover:bg-blue-700 transition-colors ml-5'>
                  Save
                </button>
              </label>
            </div>
          ) : (
            <div className='flex items-center gap-3'>
              <a 
                href=""
                className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium'
              >
                resume
              </a>
              <button 
                onClick={() => setIsEdit(true)}
                className='inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium'
              >
                Edit
              </button>
            </div>
          )
        }
      </div>
      <h2 className='text-2xl font-semibold '> Jobs Applied </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-2 border-blue-500 rounded-xl overflow-hidden bg-white mt-3">
          <thead>
            <tr className="bg-white">
              <th className="py-4 px-6 text-left font-semibold text-base">Company</th>
              <th className="py-4 px-6 text-left font-semibold text-base">Job Title</th>
              <th className="py-4 px-6 text-left font-semibold text-base">Location</th>
              <th className="py-4 px-6 text-left font-semibold text-base">Date</th>
              <th className="py-4 px-6 text-left font-semibold text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-blue-50 transition-colors"
              >
                <td className='flex items-center gap-2 py-4 px-6'>
                  <img className='w-10 h-10 rounded-full' src={job.logo} alt="" />
                  {job.company}
                </td>
                <td className="py-4 px-6">{job.title}</td>
                <td className="py-4 px-6">{job.location}</td>
                <td className="py-4 px-6">{job.date}</td>
                <td className="py-4 px-6">
                  <span className={statusClass(job.status)}>{job.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Applications