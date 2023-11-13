"use client";
import React, {useState} from 'react';
import Link from "next/link"
import {useRouter} from "next/router"
import axios from "axios"

function SignUpPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    })

    const handleChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {

    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="max-w-md w-full p-6 bg-white shadow-lg rounded-md">
                <h1 className="text-3xl mb-6 font-bold text-center text-gray-800">
                    Sign Up
                </h1>
                <label className="block mb-2 text-sm font-semibold text-gray-600" htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
                />

                <label className="block mb-2 text-sm font-semibold text-gray-600" htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
                />

                <label className="block mb-2 text-sm font-semibold text-gray-600" htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring focus:border-blue-500"
                />

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Sign Up
                </button>
                <div className="mt-4 text-center flex items-center justify-center space-x-2">
                    <p className="text-gray-600">Already have an account?</p>
                    <Link href="../login">
                        <p className="text-blue-500 hover:underline">Login</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignUpPage;