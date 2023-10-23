import React from 'react';

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                        magnam voluptatum cupiditate veritatis in, accusamus quisquam.
                    </p>
                    <dl className="mt-9 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    {/* Heroicon name: globe-alt */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19l-7-4m0 0L9 5l7 4m-7-4v14"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    Website Design
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sint harum rerum voluptatem quo recusandae magni placeat
                                    saepe molestiae, sed excepturi cumque corporis perferendis
                                    hic.
                                </dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    {/* Heroicon name: scale */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    Branding
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sint harum rerum voluptatem quo recusandae magni placeat
                                    saepe molestiae, sed excepturi cumque corporis perferendis
                                    hic.
                                </dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    {/* Heroicon name: lightning-bolt */}
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    Marketing
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sint harum rerum voluptatem quo recusandae magni placeat
                                    saepe molestiae, sed excepturi cumque corporis perferendis
                                    hic.
                                </dd>
                            </div>
                        </div>

                        {/* More services... */}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
