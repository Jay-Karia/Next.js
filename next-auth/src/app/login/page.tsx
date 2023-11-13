"use client";
import React, {useEffect, useState} from 'react';
import Link from "next/link"
import {useRouter} from "next/navigation"
import axios from "axios";
import {toast} from "react-hot-toast";

function LoginPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false)
    const [buttonAllow, setButtonAllow] = useState(false)

    const handleChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (buttonAllow) {
            // logging in
            try {
                setLoading(true)
                const res = await axios.post("/api/users/login", {body: formData})
                alert(res.data.msg)

                if (res.data.success === true)
                    router.push("/profile")

            } catch (error: any) {
                console.log("Login Error", error)
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        } else {
            alert("Please fill in all the fields")
        }
    };

    useEffect(() => {
        if (formData.email.length > 0 && formData.password.length > 0) {
            setButtonAllow(true)
        } else {
            setButtonAllow(false)
        }
    }, [formData]);

    return (
        <div
            className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <div className="max-w-md w-full p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-md flex">
                <div className="w-full">
                    <h1 className="text-3xl mb-6 font-bold text-center text-gray-800">Login</h1>

                    <form className="w-full">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-800 mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-3 border text-black border-white rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>

                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-800 mb-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="p-3 border text-black border-white rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        {loading ? (
                            <button
                                type="button"
                                className="w-full bg-blue-500 text-white font-semibold p-3 rounded-md"
                                disabled={true}
                            >
                                <div className={"flex justify-center"}>
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"/>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                    </svg>
                                </div>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md"
                            >
                                Login
                            </button>
                        )}
                    </form>

                    <div className="mt-4 text-center flex items-center justify-center space-x-2">
                        <p className="text-gray-800">Already have an account?</p>
                        <Link href="../signup">
                            <p className="text-blue-500 hover:underline">Sign Up</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;