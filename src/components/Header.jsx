import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <header className="w-full py-6 bg-transparent">
<div className="container mx-auto px-6 flex justify-between items-center">
  <h1 className="text-3xl font-bold text-white">FinNewsHub</h1>
  <nav className="space-x-4">
    <Link to="/news" className="text-white hover:text-gray-200 transition">
      News
    </Link>
    <Link to="/" className="text-white hover:text-gray-200 transition">
      Home
    </Link>
    
  </nav>
</div>
</header>
    </div>
  )
}

export default Header;