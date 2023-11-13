import React from 'react';

function ProfilePage({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-md">
                <div className="flex items-center justify-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                </div>

                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-600">Id:</label>
                    <p className="text-gray-800">{params.id}</p>
                </div>

                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-600">Email:</label>
                    <p className="text-gray-800">john.doe@example.com</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;