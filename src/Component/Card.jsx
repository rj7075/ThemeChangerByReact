import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">   
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Ranjeet Yadav Theme Changer Project
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
