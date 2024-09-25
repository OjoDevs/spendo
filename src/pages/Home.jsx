import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-600 text-white background-gradient">
        <header className="bg-transparent py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <svg
                  className="w-8 h-8 animate-spin-slow bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
              <h1 className="text-3xl font-bold text-white animate-text-glow">
                SpendWise
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                  <span>Features</span>
                  <FaChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="py-1">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Expense Tracking
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Budget Planning
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="hover:text-green-400 transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white bg-gradient-to-r from-blue-500 to-purple-800 hover:bg-gradient-to-l border border-white px-4 py-2 rounded-md">
                Login
              </button>
              <a href="/SignUp"><button className="bg-gradient-to-r from-blue-500 to-purple-800 hover:bg-gradient-to-l text-white border border-white px-4 py-2 rounded-md">
                Sign Up
              </button></a>
            </div>
            <button
                className="md:hidden bg-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </header>

        {isMenuOpen && (
            <div className="md:hidden bg-blue-800 py-4">
              <div className="container mx-auto px-4">
                <a
                    href="#"
                    className="block py-2 hover:text-green-400 transition-colors"
                >
                  Features
                </a>
                <a
                    href="#"
                    className="block py-2 hover:text-green-400 transition-colors"
                >
                  Pricing
                </a>
                <a
                    href="#"
                    className="block py-2 hover:text-green-400 transition-colors"
                >
                  Resources
                </a>
                <a
                    href="#"
                    className="block py-2 hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
                <button className="w-full text-left mt-4 bg-transparent text-white hover:text-green-400 border border-white px-4 py-2 rounded-md">
                  Login
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:bg-gradient-to-l text-white mt-2 px-4 py-2 rounded-md">
                  Try It Free
                </button>
              </div>
            </div>
        )}

        <main className="flex-grow">
          <section className="py-20">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-text-glow">
                  Financial management made easy
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Track expenses, plan budgets, and grow your wealth with AI-powered insights.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

                  <form className="flex w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="flex-grow border-2 border-blue-400 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                    <button
                        className="bg-gradient-to-r from-blue-500 to-purple-800 hover:bg-gradient-to-l text-white text-lg px-8 py-3 rounded-md shadow-lg transform hover:scale-105 transition-transform ml-4">
                      Sign Up Today!
                    </button>
                  </form>
                </div>
                <p className="mt-4 text-blue-200">
                  No credit card required. Free for 30 days.
                  £4.99 a month after that. No hidden sh*t.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden">
                  <img
                      src="/dashboard-image.png"
                      alt="SpendWise Dashboard"
                      className="w-full h-auto transform hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Why Users Love SpendWise
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className=" bg-black bg-opacity-30 text-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                  <p>
                    Intuitive interface that makes financial management a breeze.
                  </p>
                </div>
                <div className="bg-black bg-opacity-30 text-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-2">
                    AI-Powered Insights
                  </h3>
                  <p>
                    Get personalized recommendations to optimize your finances.
                  </p>
                </div>
                <div className="bg-black bg-opacity-30 text-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-semibold mb-2">
                    Secure & Reliable
                  </h3>
                  <p>
                    Bank-level security ensures your financial data is always
                    protected.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-blue-900 py-8">
          <div className="container mx-auto px-4 text-center text-blue-200">
            <p>© 2024 SpendWise. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>{" "}|{" "}
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
        </footer>
      </div>
  );
}
