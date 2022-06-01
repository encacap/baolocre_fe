const EstateHorizontalSpecial = () => {
    return (
        <div className="block overflow-hidden duration-200 rounded-md md:flex md:mb-4 md:hover:shadow-md hover:text-encacap-main">
            <a href="<%= firstEstate.url %>" className="relative block md:w-64 h-44 md:h-auto">
                <div className="absolute z-20 flex items-center py-1 pl-3 text-sm font-semibold text-white bg-black rounded-md bottom-4 right-4 opacity-70">
                    <div className="flex items-center mr-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-2 -2 24 24"
                            fill="currentColor"
                            className="w-5 mr-2"
                        >
                            <path
                                d="M2 8v10h12V8H2zm2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2zm2 0h8a2 2 0 0 1 2 2v4h2V2H6v4zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                                fill="currentColor"
                            />
                            <path
                                d="M7 6a3 3 0 1 1 6 0h-2a1 1 0 0 0-2 0H7zm1.864 13.518l2.725-4.672a1 1 0 0 1 1.6-.174l1.087 1.184 1.473-1.354-1.088-1.183a3 3 0 0 0-4.8.52L7.136 18.51l1.728 1.007zm6.512-12.969a2.994 2.994 0 0 1 3.285.77l1.088 1.183-1.473 1.354-1.087-1.184A1 1 0 0 0 16 8.457V8c0-.571-.24-1.087-.624-1.451z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="flex items-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 mr-2">
                            <path
                                d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="m11.4 9.5 2.5 1.5c.9.6.9 1.5 0 2.1l-2.5 1.5c-1 .6-1.8.1-1.8-1v-3c0-1.3.8-1.7 1.8-1.1Z"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <img
                    src="<%= firstEstate.avatar.largeThumbnail %>"
                    alt="<%= firstEstate.title %>"
                    className="relative z-0 object-cover object-center w-full h-full rounded-md md:rounded-none"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white duration-200 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12">
                        <path d="M17 4H7C4 4 2 6 2 9v6c0 3 2 5 5 5h10c3 0 5-2 5-5V9c0-3-2-5-5-5zm-3.11 9.03l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07z" />
                    </svg>
                </div>
            </a>
            <div className="flex-1 py-4 border-b-0 border-l-0 border-gray-100 rounded-r-md md:border-2 md:px-5">
                <a href="<%= firstEstate.url %>">
                    <div className="font-semibold uppercase text-encacap-main">Title</div>
                    <div className="py-1 font-semibold md:py-2">
                        <span className="">Thoả thuận</span>
                        <span className="px-2 text-gray-400">·</span>
                        <span>100</span>
                    </div>
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-4 ml-px mr-2"
                        >
                            <path
                                d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>
                        <div className="line-clamp-1">Location</div>
                    </div>
                    <div className="hidden mt-2 text-gray-500 md:line-clamp-3">Description</div>
                </a>
                <div className="flex mt-5 mb-1">
                    <a
                        href="tel:<%= firstEstate.contact.phone %>"
                        className="flex items-center justify-center flex-1 px-3 py-2 text-sm font-semibold text-center text-black duration-200 bg-gray-100 border-2 border-gray-200 rounded-md hover:bg-encacap-main hover:border-encacap-main hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 mr-4"
                        >
                            <path d="M17.45 22.75c-1.13 0-2.32-.27-3.55-.79-1.2-.51-2.41-1.21-3.59-2.06-1.17-.86-2.3-1.82-3.37-2.87-1.06-1.07-2.02-2.2-2.87-3.36-.86-1.2-1.55-2.4-2.04-3.56-.52-1.24-.78-2.44-.78-3.57 0-.78.14-1.52.41-2.21.28-.71.73-1.37 1.34-1.94.77-.76 1.65-1.14 2.59-1.14.39 0 .79.09 1.13.25.39.18.72.45.96.81L10 5.58c.21.29.37.57.48.85.13.3.2.6.2.89 0 .38-.11.75-.32 1.1a4 4 0 0 1-.67.85l-.68.71c.01.03.02.05.03.07.12.21.36.57.82 1.11.49.56.95 1.07 1.41 1.54.59.58 1.08 1.04 1.54 1.42.57.48.94.72 1.16.83l-.02.05.73-.72c.31-.31.61-.54.9-.69.55-.34 1.25-.4 1.95-.11.26.11.54.26.84.47l3.32 2.36c.37.25.64.57.8.95.15.38.22.73.22 1.08 0 .48-.11.96-.32 1.41-.21.45-.47.84-.8 1.2-.57.63-1.19 1.08-1.91 1.37-.69.28-1.44.43-2.23.43Zm-11.86-20c-.55 0-1.06.24-1.55.72-.46.43-.78.9-.98 1.41-.21.52-.31 1.07-.31 1.66 0 .93.22 1.94.66 2.98.45 1.06 1.08 2.16 1.88 3.26.8 1.1 1.71 2.17 2.71 3.18 1 .99 2.08 1.91 3.19 2.72 1.08.79 2.19 1.43 3.29 1.89 1.71.73 3.31.9 4.63.35.51-.21.96-.53 1.37-.99.23-.25.41-.52.56-.84.12-.25.18-.51.18-.77 0-.16-.03-.32-.11-.5a.757.757 0 0 0-.28-.3l-3.32-2.36c-.2-.14-.38-.24-.55-.31-.22-.09-.31-.18-.65.03-.2.1-.38.25-.58.45l-.76.75c-.39.38-.99.47-1.45.3l-.27-.12c-.41-.22-.89-.56-1.42-1.01-.48-.41-1-.89-1.63-1.51-.49-.5-.98-1.03-1.49-1.62-.47-.55-.81-1.02-1.02-1.41l-.12-.3c-.06-.23-.08-.36-.08-.5 0-.36.13-.68.38-.93l.75-.78c.2-.2.35-.39.45-.56.08-.13.11-.24.11-.34 0-.08-.03-.2-.08-.32-.07-.16-.18-.34-.32-.53L6.46 3.17a.922.922 0 0 0-.37-.31c-.16-.07-.33-.11-.5-.11Zm8.36 12.26-.16.68.27-.7c-.05-.01-.09 0-.11.02ZM18.5 9.75c-.41 0-.75-.34-.75-.75 0-.36-.36-1.11-.96-1.75-.59-.63-1.24-1-1.79-1-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.97 0 1.99.52 2.88 1.47.83.89 1.37 1.98 1.37 2.78 0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75 0-3.45-2.8-6.25-6.25-6.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75 0 .41-.34.75-.75.75Z" />
                        </svg>
                        <div>0582419433</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EstateHorizontalSpecial;