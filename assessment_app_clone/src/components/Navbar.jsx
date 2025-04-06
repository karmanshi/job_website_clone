import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';


const PlainLinkItem = ({text, url}) => {
    return (
        <Link to={url}>
            <div className="rounded-md inline-block px-4 py-2 bg-white font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer mx-1">
                {text}
            </div>
        </Link>
    )
}

const PlainYellowLinkItem = ({text, url}) => {
    return (
        <Link to={url}>
            <div className="border-2 border-gray-300 rounded-md inline-block px-4 py-2 bg-white font-bold hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 cursor-pointer mx-1">
                {text}
            </div>
        </Link>
    )
}


const YellowBlueLinkItem = ({text, url}) => {
    return (
        <Link to={url}>
            <div className="border-2 border-yellow-400 rounded-md inline-block px-4 py-2 bg-yellow-400 font-bold hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 cursor-pointer mx-1">
                {text}
            </div>
        </Link>
    )
}


const Navbar = () => {
    const nav_menu=[
        {text: "Jobs", url: "/jobs", type: "first"},
        {text: "Active Employers", url: "/active-employers", type: "first"},
        {text: "Job Blogs", url: "/job-blogs", type: "first"},
        {text: "Pricing", url: "/pricing", type: "first"},
        {text: "Jobseeker Login", url: "/jobseeker-login", type: "second"},
        {text: "Employer Login", url: "/employer-login", type: "third"},
    ]

    return (
        <div className="grid grid-cols-3 bg-white p-4 gap-4">
            <div className="w-full">
                <div className="flex items-center w-48 ml-4">
                    <Link to="/">
                        <img src={logo} alt="logo image" className='w-full' />
                    </Link>
                </div>
            </div>

            <div className="w-full col-span-2 flex place-items-center justify-end">
                {
                    nav_menu.map((item, index) => {
                        if(item.type === "first"){
                            return <PlainLinkItem key={index} text={item.text} url={item.url} />
                        }else if(item.type === "second"){
                            return <PlainYellowLinkItem key={index} text={item.text} url={item.url} />
                        }else{
                            return <YellowBlueLinkItem key={index} text={item.text} url={item.url} />
                        }
                    })
                }
                
            </div>

        </div>
    )
}

export default Navbar