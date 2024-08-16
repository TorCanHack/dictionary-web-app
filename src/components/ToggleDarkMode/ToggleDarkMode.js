import React, {useState, useEffect} from "react";

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDark = () => {
        if(darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        }
        setDarkMode(!darkMode)
    };

    
        
  return (
    <div className="flex items-center space-x-2 md:ml-3">
      {/* Toggle Switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={toggleDark}
        />
        <div className="w-12 h-6 bg-gray-200 rounded-full dark:bg-purple-600"></div>
        <div
          className={`dot absolute left-1 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            darkMode ? 'translate-x-6' : ''
          }`}
        ></div>
      </label>
      {/* Moon Icon */}
      <svg
        className="w-6 h-6 text-gray-600 dark:text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        />
      </svg>
    </div>
  );
};

export default ToggleDarkMode;