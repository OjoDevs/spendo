import React, { useState } from 'react'

export default function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle the sign-up logic
        console.log('Form submitted:', formData)
        alert('Sign-up successful! (This is a demo alert)')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white p-6 flex items-center justify-center">
            <div className="w-full max-w-md bg-black bg-opacity-30 rounded-xl p-8 backdrop-blur-sm">
                <h1 className="text-3xl font-bold mb-6 text-center">Login to your Dashboard</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>

                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <div>

                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm">
                    New here?{' '}
                    <a href="#" className="text-blue-400 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    )
}