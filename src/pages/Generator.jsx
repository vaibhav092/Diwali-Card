import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Generator() {
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (image) {
            const randomId = Math.floor(Math.random() * 10000);
            localStorage.setItem(`greetingImage-${randomId}`, image);
            localStorage.setItem(`greetingMessage-${randomId}`, message);
            navigate(`/greeting/${randomId}`);
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <div>
                <div className='text-4xl text-orange-500 font font-medium mt-5'>
                    Diwali Greeting Generator
                </div>
                <div>
                    <p className="mt-5 text-xl text-red-400">
                        Upload your photo to create a personalized greeting
                    </p>
                </div>
                <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                    <label htmlFor="file-input" className="block text-sm font-medium text-gray-700 mb-2">
                        Choose a file
                    </label>
                    <div className="flex items-center justify-center w-full">
                        <label
                            htmlFor="file-input"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input
                                id="file-input"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </label>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter a custom message"
                        className="mt-4 w-full p-2 border border-gray-300 rounded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="mt-4 w-full bg-orange-500 text-white p-2 rounded" onClick={handleSubmit}>
                        Generate Greeting
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Generator;
