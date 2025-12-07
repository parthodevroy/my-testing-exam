import React, { useState } from "react";
import "./App.css";
import { MdRemoveRedEye, MdSmokingRooms } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaEnvelopeOpen, FaPen, FaWallet } from "react-icons/fa";
import { FaUser, FaEnvelope, FaCog, FaUsers, FaMoneyBill, FaVideo, FaHistory, FaShieldAlt, FaChartLine, FaGift } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

import { FaSignOutAlt } from "react-icons/fa"; 

export default function App() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: "Dashboard", icon: <FaEnvelope /> },
    { name: "Users", icon: <FaUser /> },
    { name: "Agencies", icon: <FaUsers /> },
    { name: "Coin Management", icon: <FaMoneyBill /> },
    { name: "Live Streams", icon: <FaVideo /> },
    { name: "Transaction History", icon: <FaHistory /> },
    { name: "PK Masters", icon: <FaShieldAlt /> },
    { name: "KYC", icon: <FaShieldAlt /> },
    { name: "Moderation", icon: <FaShieldAlt /> },
    { name: "Analytics", icon: <FaChartLine /> },
    { name: "Gifts & Assets", icon: <FaGift /> },
    { name: "Settings", icon: <FaCog /> },
  ];
  const statsData = [
    {
      title: "Total Agencies",
      value: "3",
      change: "+3 this month",
      icon: FaUsers,
      bgColor: "bg-purple-100/50",
      iconBgColor: "bg-purple-300/80",
      iconColor: "text-purple-700"
    },
    {
      title: "Total Coin Sales",
      value: "5.3M",
      change: "+3 this month",
      icon: FaWallet,
      bgColor: "bg-blue-100/50",
      iconBgColor: "bg-blue-300/80",
      iconColor: "text-blue-700"
    },
    {
      title: "Avg Commission",
      value: "10.0%",
      change: "+3 this month",
      icon: FaChartLine,
      bgColor: "bg-green-100/50",
      iconBgColor: "bg-green-300/80",
      iconColor: "text-green-700"
    },
  ];

  return (
   
    <div className="w-full min-h-screen bg-[#86A8B3] flex flex-col relative">

    
<nav className=" bg-white p-4 lg:p-4 shadow-md z-30 w-full">
  
  <div className="flex justify-between items-center w-full max-w-full lg:px-4"> 
    

    <div className="flex items-center space-x-4">
        
        
        <button 
          onClick={() => setOpen(true)} 
          className="text-3xl lg:hidden text-gray-700"
        >
          <FiMenu />
        </button>

        
        <div className="flex items-center space-x-3 bg-white p-2"> 
          <img 
            src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=1024x1024&w=is&k=20&c=JZprgGDQ8xqa6iu0fyKJfKOlAvae0w9U-AdHeCT2kg4=" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-orange-400" 
          />
          <div className="text-left hidden sm:block"> 
            <p className="font-semibold text-purple-700 leading-none text-base">@Partho</p>
            <p className="text-xs text-gray-500 leading-none">admin id - 090990</p>
          </div>
        </div>
    </div>
   
    <a 
      href="/logout" 
      className="flex items-center space-x-1 text-red-500 font-semibold hover:text-red-700 transition p-2"
    >
      <span className="hidden sm:inline">Logout</span>
      <FaSignOutAlt className="text-lg rotate-180" />
    </a>
   
  </div>
</nav>

     
      <div className="flex flex-1 w-full relative">

        <aside
         
          className={`fixed lg:static top-0 left-0 h-full w-64 bg-[#6C8A99] p-6 flex flex-col gap-6 z-50 shadow-lg transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
       
          <div className="flex items-center gap-3">
            <FaPen className="text-white text-3xl" />

            <h2 className="text-2xl font-bold text-purple-600 leading-tight">
              Pen Live <br />
              <span className="text-red-500 text-xl">Admin Panel</span>
            </h2>
          </div>

          <nav className="flex flex-col gap-3 text-white">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                className="flex items-center gap-3 hover:text-yellow-300 transition"
                href="#"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed lg:hidden inset-0 bg-black/40 backdrop-blur-sm z-40"
          ></div>
        )}

        <main className="flex-1 w-full"> 
     
          <div className="p-5 lg:p-10">

          
            <div className="hidden lg:flex justify-between items-center p-6 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-700 mb-0">Manage your app from your dashboard</p>
              </div>

              <div>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white font-semibold rounded shadow"
                  onClick={() => console.log("Export clicked")}
                >
                  Export Data <CiSaveDown2 className="text-xl" />
                </button>
              </div>
            </div>

         
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {statsData.map((stat) => (
                <div 
                  key={stat.title} 
                  className={`relative p-6 rounded-xl shadow-md ${stat.bgColor} overflow-hidden`}
                >
                  <div className={`absolute top-4 right-4 p-3 rounded-xl ${stat.iconBgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>

                  <h3 className="text-gray-600 mb-2">{stat.title}</h3>

                  <p className="text-4xl font-extrabold text-gray-800 mb-1">
                    {stat.value}
                  </p>

                  <span className="text-green-600 text-sm font-medium">
                    {stat.change}
                  </span>
                </div>
              ))}
            </div>

           
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
              <input
                type="text"
                placeholder="Search by agency ID or name"
                className="px-4 py-2 w-full sm:w-1/2 rounded-lg border"
              />
              <div className="space-x-2 flex w-full sm:w-auto">
                <button className="flex items-center gap-1 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 w-1/2 sm:w-auto"><MdSmokingRooms />Filter</button>
                <button className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 w-1/2 sm:w-auto">
                  Add Agency
                </button>
              </div>
            </div>

           
            <div className="bg-white rounded-xl shadow overflow-x-auto">
              <table className="w-full text-left min-w-[900px]">
                <thead className="bg-gray-100">
                  <tr>
                    {[
                      "User ID",
                      "Name",
                      "Level",
                      "Diamonds",
                      "Beans",
                      "Coin Sell",
                      "Coin Buy",
                      "Location",
                      "Status",
                      "Action",
                    ].map((head) => (
                      <th key={head} className="p-3">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((row) => (
                    <tr key={row} className="border-b hover:bg-gray-50">
                      <td className="p-3">0012300</td>
                      <td className="p-3">StartHost...</td>
                      <td className="p-3 bg-gray-300">LV 1</td>
                      <td className="p-3">100M</td>
                      <td className="p-3">100K</td>
                      <td className="p-3">14K</td>
                      <td className="p-3">100K</td>
                      <td className="p-3">Bangladesh</td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-200 text-green-700 rounded">
                          active
                        </span>
                      </td>
                      <td className="p-3 cursor-pointer">
                        <MdRemoveRedEye />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}