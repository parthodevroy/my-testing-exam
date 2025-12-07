import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#86A8B3] flex">
     {/* side */}
      <aside className="w-64 bg-[#6C8A99] p-6 flex flex-col gap-4">
       
        <h2 className="text-xl font-bold mb-4">Pen Live <span className="text-red-500 text-3xl"><br /> Admin Panel</span></h2>
        <nav className="flex flex-col gap-3">
          <a className="text-yellow-300 text-white " href="#">Dashboard</a>
          <a className="hover:text-yellow-300 text-white " href="#">Users</a>
          <a className="hover:text-yellow-300 text-white " href="#">Agencies</a>
          <a className="hover:text-yellow-300 text-white " href="#">Coin Management</a>
          <a className="hover:text-yellow-300 text-white " href="#">Live Streams</a>
          <a className="hover:text-yellow-300 text-white " href="#">Transaction History</a>
          <a className="hover:text-yellow-300 text-white " href="#">PK Masters</a>
          <a className="hover:text-yellow-300 text-white " href="#">KYC</a>
          <a className="hover:text-yellow-300 text-white " href="#">Moderation</a>
          <a className="hover:text-yellow-300 text-white " href="#">Analytics</a>
          <a className="hover:text-yellow-300 text-white " href="#">Gifts & Assets</a>
          <a className="hover:text-yellow-300 text-white " href="#">Settings</a>
        </nav>
      </aside>

     {/* body */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-700 mb-6">Manage your app from your dashboard</p>

        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Agencies</h3>
            <p className="text-3xl font-bold">3</p>
            <span className="text-green-600 text-sm">+3 this month</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Coin Sales</h3>
            <p className="text-3xl font-bold">5.3M</p>
            <span className="text-green-600 text-sm">+3 this month</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Avg Commission</h3>
            <p className="text-3xl font-bold">10.0%</p>
            <span className="text-green-600 text-sm">+3 this month</span>
          </div>
        </div>

      
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search by agency ID or name"
            className="px-4 py-2 w-1/2 rounded-lg border"
          />
          <button className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500">Add Agency</button>
        </div>

       
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">User ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Level</th>
                <th className="p-3">Diamonds</th>
                <th className="p-3">Beans</th>
                <th className="p-3">Coin Sell</th>
                <th className="p-3">Coin Buy</th>
                <th className="p-3">Location</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6].map((row) => (
                <tr key={row} className="border-b hover:bg-gray-50">
                  <td className="p-3">0012300</td>
                  <td className="p-3">StartHost...</td>
                  <td className="p-3">LV 1</td>
                  <td className="p-3">100M</td>
                  <td className="p-3">100K</td>
                  <td className="p-3">14K</td>
                  <td className="p-3">100K</td>
                  <td className="p-3">Bangladesh</td>
                  <td className="p-3"><span className="px-2 py-1 bg-green-200 text-green-700 rounded">active</span></td>
                  <td className="p-3 cursor-pointer">👁️</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
