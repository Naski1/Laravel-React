import React from "react";

const MeetingsTicketsDashboard = () => {
    return (
        <main className="bg-white rounded-3xl w-full max-w-md p-1 md:p-4">
            {/* Meetings Section */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-black text-lg font-semibold">
                        My Meetings
                    </h2>
                    <button
                        aria-label="Calendar icon"
                        className="p-2 rounded-full hover:bg-gray-200"
                    >
                        <i className="far fa-calendar-alt text-gray-600 text-lg"></i>
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Meeting 1 */}
                    <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center">
                        <div>
                            <div className="flex items-center mb-1 text-xs text-gray-500 font-medium space-x-4">
                                <span>My Meetings</span>
                                <span>App Project</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-black mr-4">6:45 PM</span>
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Google Meet logo, green background with white G letter"
                                        className="w-6 h-6"
                                        height="24"
                                        src="/img/p.png"
                                        width="24"
                                    />
                                    <span className="font-semibold text-black">Meet</span>
                                </div>
                            </div>
                        </div>
                        <i className="fas fa-arrow-right text-gray-400"></i>
                    </div>

                    {/* Meeting 2 */}
                    <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center">
                        <div>
                            <div className="flex items-center mb-1 text-xs text-gray-500 font-medium space-x-4">
                                <span>My Meetings</span>
                                <span>User Research</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-black mr-4">6:45 PM</span>
                                <div className="flex items-center space-x-2">
                                    <img
                                        alt="Zoom logo, blue background with white Z letter"
                                        className="w-6 h-6"
                                        height="24"
                                        src="/img/zom.jpg"
                                        width="24"
                                    />
                                    <span className="font-semibold text-black">Zoom</span>
                                </div>
                            </div>
                        </div>
                        <i className="fas fa-arrow-right text-gray-400"></i>
                    </div>
                </div>

                <button className="text-gray-700 font-normal text-sm flex items-center space-x-1 mb-6 hover:text-gray-900">
                    <span>See All Meetings</span>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </section>

            {/* Tickets Section */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-black text-lg font-semibold">
                        Open Tickets
                    </h2>
                    <button
                        aria-label="Filter icon"
                        className="p-2 rounded-full hover:bg-gray-200"
                    >
                        <i className="fas fa-sliders-h text-gray-600 text-lg"></i>
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Ticket 1 */}
                    <article className="border border-gray-300 rounded-xl p-4 flex space-x-4">
                        <img
                            alt="Profile picture of Jacob Martinez, man with short dark hair and beard, smiling"
                            className="w-12 h-12 rounded-full flex-shrink-0"
                            height="48"
                            src="https://storage.googleapis.com/a1aa/image/e377c935-f491-4515-50fe-264277e1e3fb.jpg"
                            width="48"
                        />
                        <div className="flex flex-col justify-center">
                            <h3 className="font-semibold text-black text-sm leading-tight">
                                Jacob Martinez
                            </h3>
                            <p className="text-gray-500 text-xs leading-tight max-w-xs">
                                I need 3 more new features on the mobile app
                                design.
                            </p>
                            <button
                                className="mt-2 text-xs bg-gray-200 text-gray-700 rounded-full px-3 py-1 w-max hover:bg-gray-300"
                                type="button"
                            >
                                Check
                                <i className="fas fa-chevron-right ml-1"></i>
                            </button>
                        </div>
                    </article>

                    {/* Ticket 2 */}
                    <article className="border border-gray-300 rounded-xl p-4 flex space-x-4">
                        <img
                            alt="Profile picture of Luke Bell, man with short hair and beard, wearing a pink shirt and blue jacket"
                            className="w-12 h-12 rounded-full flex-shrink-0"
                            height="48"
                            src="https://storage.googleapis.com/a1aa/image/d0ef519e-c191-4ab5-b513-82e586af7535.jpg"
                            width="48"
                        />
                        <div className="flex flex-col justify-center">
                            <h3 className="font-semibold text-black text-sm leading-tight">
                                Luke Bell
                            </h3>
                            <p className="text-gray-500 text-xs leading-tight max-w-xs">
                                I need 3 more new features on the mobile app
                                design.
                            </p>
                            <button
                                className="mt-2 text-xs bg-gray-200 text-gray-700 rounded-full px-3 py-1 w-max hover:bg-gray-300"
                                type="button"
                            >
                                Check
                                <i className="fas fa-chevron-right ml-1"></i>
                            </button>
                        </div>
                    </article>

                    {/* Ticket 3 */}
                    <article className="border border-gray-300 rounded-xl p-4 flex space-x-4">
                        <img
                            alt="Profile picture of Connor Mitchell, man with shaved head and beard, wearing a purple shirt and blue jacket"
                            className="w-12 h-12 rounded-full flex-shrink-0"
                            height="48"
                            src="https://storage.googleapis.com/a1aa/image/8cfdead7-6415-4f6b-1adf-e025f4a83614.jpg"
                            width="48"
                        />
                        <div className="flex flex-col justify-center">
                            <h3 className="font-semibold text-black text-sm leading-tight">
                                Connor Mitchell
                            </h3>
                            <p className="text-gray-500 text-xs leading-tight max-w-xs">
                                I need 3 more new features on the mobile app
                                design.
                            </p>
                            <button
                                className="mt-2 text-xs bg-gray-200 text-gray-700 rounded-full px-3 py-1 w-max hover:bg-gray-300"
                                type="button"
                            >
                                Check
                                <i className="fas fa-chevron-right ml-1"></i>
                            </button>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default MeetingsTicketsDashboard;