import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col justify-between">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="container mx-auto px-6 flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-5xl font-extrabold text-white animate-fadeInUp">
          Stay Updated with the Latest News
        </h2>
        <p className="text-lg text-gray-200 animate-fadeInUp delay-200">
          Subscribe to our newsletter and never miss an update.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center animate-fadeInUp delay-300">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-purple-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LandingPage;
