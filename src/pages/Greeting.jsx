import React from 'react';
import { useParams } from 'react-router-dom';

function Greeting() {
    const { id } = useParams(); // Get the random ID from the URL
    const image = localStorage.getItem(`greetingImage-${id}`); // Retrieve the image from local storage
    const message = localStorage.getItem(`greetingMessage-${id}`); // Retrieve the message from local storage

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
            <h1 className="text-4xl font-bold text-orange-500 mb-5">Happy Diwali!</h1>
            {image ? (
                <img src={image} alt="Uploaded Greeting" className="w-full max-w-md rounded-lg shadow-md mb-5" />
            ) : (
                <p className="text-red-500">No image found!</p>
            )}
            {message ? (
                <p className="text-xl text-red-600 italic">{message}</p>
            ) : (
                <p className="text-red-500">No message found!</p>
            )}
        </div>
    );
}

export default Greeting;
