import React from "react"

export function Navbar() {
  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
      <span className="text-xl font-bold text-blue-600">VAri-Verified</span>
      <div className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
      </div>
    </nav>
  )
}