import React from "react"
import { Navbar } from "./components/Navbar"
import { Button } from "./components/ui/Button"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">VAri-Verified</h1>
        <p className="mt-4 text-gray-600">Next-gen identity verification platform</p>
        <Button className="mt-6">Get Verified</Button>
      </main>
    </div>
  )
}