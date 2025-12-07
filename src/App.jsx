
import React, { useState } from "react";
import "./App.css";
import { MdAddModerator, MdLiveTv, MdRemoveRedEye } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import {
  FaUsers, FaWallet, FaHistory, FaGift, FaCog, FaSignOutAlt,
  FaMegaport, FaFilter, FaShieldAlt
} from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { FaUsersRays } from "react-icons/fa6";
import { TbCoinEuro } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { SiSimpleanalytics } from "react-icons/si";

import logo from "../src/assets/logo.png";
import image from "../src/assets/image.jpg";

export default function App() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <IoMdHome /> },
    { name: "Users", icon: <FaUsersRays /> },
    { name: "Agencies", icon: <FaUsers /> },
    { name: "Coin Management", icon: <TbCoinEuro /> },
    { name: "Live Streams", icon: <MdLiveTv /> },
    { name: "Transaction History", icon: <FaHistory /> },
    { name: "PK Masters", icon: <LiaChalkboardTeacherSolid /> },
    { name: "KYC", icon: <FaMegaport /> },
    { name: "Moderation", icon: <MdAddModerator /> },
    { name: "Analytics", icon: <SiSimpleanalytics /> },
    { name: "Gifts & Assets", icon: <FaGift /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  const statsData = [
    {
      title: "Total Agencies",
      value: "3",
      change: "+3 this month",
      icon: FaUsers,
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-200",
      iconColor: "text-purple-700"
    },
    {
      title: "Total Coin Sales",
      value: "5.3M",
      change: "+3 this month",
      icon: FaWallet,
      bgColor: "bg-sky-50",
      iconBgColor: "bg-sky-200",
      iconColor: "text-sky-700"
    },
    {
      title: "Avg Commission",
      value: "10.0%",
      change: "+3 this month",
      icon: FaShieldAlt,
      bgColor: "bg-emerald-50",
      iconBgColor: "bg-emerald-200",
      iconColor: "text-emerald-700"
    },
  ];

  const headers = ["ID", "Name", "Level", "Diamonds", "Beans", "Coin Sell", "Coin Buy", "Location", "Status", "Action"];

  const rows = [
    { id: 1234, name: "Agency A", level: "Lv1", diamonds: 1000, beans: 500, coinSell: 200, coinBuy: 180, location: "Bangladesh", status: "Active" },
    { id: 23456, name: "Agency B", level: "Lv1", diamonds: 800, beans: 300, coinSell: 150, coinBuy: 120, location: "Bangladesh", status: "Active" },
    { id: 334, name: "Agency C", level: "Lv1", diamonds: 1500, beans: 700, coinSell: 300, coinBuy: 250, location: "Bangladesh", status: "Active" },
    { id: 4334, name: "Agency D", level: "Lv1", diamonds: 1000, beans: 500, coinSell: 200, coinBuy: 180, location: "Bangladesh", status: "Active" },
    { id: 5355, name: "Agency E", level: "Lv1", diamonds: 800, beans: 300, coinSell: 150, coinBuy: 120, location: "Bangladesh", status: "Active" },
    { id: 6006, name: "Agency F", level: "Lv1", diamonds: 1500, beans: 700, coinSell: 300, coinBuy: 250, location: "Bangladesh", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-[#A4C3D0] flex flex-col">
      {/* NAV */}
      <nav className="bg-[#EBF6FF] shadow-md flex items-center justify-between px-4 md:px-6 py-3 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl md:hidden p-1 rounded hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>

          <div className="flex items-center pr-0 lg:pl-5 gap-3">
            <img src={image} alt="Profile" className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover" />
            <div className="hidden sm:block">
              <p className="text-lg font-semibold text-[#7822E4]">@Mumtahina</p>
              <p className="text-xs text-gray-500">admin id : 090990</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
        
          <a href="/logout" className="flex items-center pr-0 lg:pr-5 gap-1 text-red-500 hover:text-red-700 font-semibold">
            <FaSignOutAlt className="rotate-180" /> <span className="hidden sm:inline">Logout</span>
          </a>
        </div>
      </nav>

      <div className="flex flex-1 relative">
       
       <div className="pt-6 pl-8">
         <aside
          className={`
            fixed md:static z-40 top-0 left-0 h-full md:h-auto w-64 md:w-56 bg-[#BCC5D7BF] p-5 md:rounded-r-2xl transform transition-transform duration-300 shadow-lg
            ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            <div>
              <h2 className="text-[#9657D8] font-extrabold text-lg">Pen Live</h2>
              <span className="text-sm text-[#FF6347]">Admin Panel</span>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {menuItems.map((it, i) => (
              <a
                key={i}
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-white/30 transition ${i === 0 ? "text-[#FF6347]" : ""}`}
              >
                <span className="text-lg">{it.icon}</span>
                <span className="hidden md:inline">{it.name}</span>
              </a>
            ))}
          </nav>

          
          <div className="md:hidden mt-4">
            <button onClick={() => setOpen(false)} className="px-3 py-2 bg-[#BCC5D7BF] rounded w-full">Close</button>
          </div>
        </aside>
       </div>

       
        {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/30 md:hidden z-30"></div>}

        
        <main className="flex-1 p-4 md:p-6 lg:p-8">
         <div className="bg-[#BCC5D7BF] p-4">
          
         <div className="flex justify-between">
           <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-700">Manage your app from your dashboard</p>
          </div>
            <button className="hidden md:inline-flex items-center gap-2 h-6 px-3 py-1 rounded bg-[#BCC5D7BF] border-2 border-white hover:bg-gray-200">
            <CiSaveDown2 /> <span className="text-sm">Export</span>
          </button>
         </div>

          
          <section className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {statsData.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className={`relative p-4 sm:p-5 lg:p-6 rounded-xl ${s.bgColor} shadow`}>
                    <div className={`absolute top-3 right-3 p-2 rounded-lg ${s.iconBgColor}`}>
                      <Icon className={`${s.iconColor} h-5 w-5 sm:h-6 sm:w-6`} />
                    </div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-700">{s.title}</h3>
                    <div className="mt-2 flex items-end gap-2">
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">{s.value}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-green-700 mt-1">{s.change}</p>
                  </div>
                );
              })}
            </div>
          </section>

         </div>
          
          <section className="mb-6 mt-2">
            <div className="flex flex-col justify-between sm:flex-row gap-3 text-black items-center">
              <input
                type="text"
                placeholder="Search by agency ID or name"
                className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-[#BCC5D7BF] bg-focus:outline-none"
              />
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 hover:bg-white">
                  <FaFilter /> <span className="hidden sm:inline">Filter</span>
                </button>
                <button className="px-4 py-2 rounded-lg bg-red-500 text-white">Add Agency</button>
              </div>
            </div>
          </section>

         
          <section className="mb-8">
            <div className="hidden md:block rounded-xl bg-white shadow overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead className="bg-[#BCC5D7BF]">
                  <tr>
                    {headers.map((h) => <th key={h} className="px-4 py-3 text-sm font-medium">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, idx) => (
                    <tr key={idx} className="border-2 border-amber-50 bg-[#BCC5D7BF] last:border-b-0">
                      <td className="px-4 py-3 text-sm">{r.id}</td>
                      <td className="px-4 py-3 text-sm">{r.name}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#454b59bf] text-white text-xs">
                          <FaShieldAlt className="text-xs" /> {r.level}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{r.diamonds}k</td>
                      <td className="px-4 py-3 text-sm">{r.beans}k</td>
                      <td className="px-4 py-3 text-sm">{r.coinSell}k</td>
                      <td className="px-4 py-3 text-sm">{r.coinBuy}k</td>
                      <td className="px-4 py-3 text-sm">{r.location}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 rounded bg-green-400 text-black text-xs">{r.status}</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="p-1 hover:bg-gray-100 rounded"><MdRemoveRedEye className="text-lg" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
            <div className="md:hidden space-y-3">
              {rows.map((r, i) => (
                <div key={i} className="bg-[#BCC5D7BF] rounded-xl p-4 shadow flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{r.name}</h3>
                        <span className="text-xs text-gray-500">#{r.id}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{r.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">{r.diamonds}k</div>
                      <div className="text-xs text-gray-500">Diamonds</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="text-xs bg-gray-100 px-3 py-1 rounded inline-flex items-center gap-2">
                      <FaShieldAlt className="text-xs" /> {r.level}
                    </div>
                    <div className="text-xs bg-gray-100 px-3 py-1 rounded">Beans: {r.beans}k</div>
                    <div className="text-xs bg-gray-100 px-3 py-1 rounded">Sell: {r.coinSell}k</div>
                    <div className="text-xs bg-gray-100 px-3 py-1 rounded">Buy: {r.coinBuy}k</div>
                    <div className="text-xs bg-green-200 px-3 py-1 rounded">{r.status}</div>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">
                      <MdRemoveRedEye /> View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
