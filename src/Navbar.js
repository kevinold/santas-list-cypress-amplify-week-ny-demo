import React from "react";

const Navbar = () => (
  <header className="flex items-center border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 bg-white">
    <div className="flex justify-between w-full max-w-6xl relative mx-auto">
      <div className="flex justify-between">
        <svg
          className="pr-4 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.403 512.403"
        >
          <desc>
            Via
            https://github.com/vyorkin-play/chat-api/blob/master/chat-web/assets/svg/christmas/hat.svg
          </desc>
          <path
            d="M288.201.403a68.906 68.906 0 0 0-52.139 16.064 15.38 15.38 0 0 1-11.861 5.269 17.067 17.067 0 0 1-13.419-6.4A52.204 52.204 0 0 0 170.867.403c-40 0-128 67.051-128 138.667 0 5.891 4.776 10.667 10.667 10.667h42.667a10.663 10.663 0 0 0 7.552-3.115 62.035 62.035 0 0 1 11.648-8.427c-4.672 14.507-7.573 27.136-8.213 30.016l-20.715 62.336a235.417 235.417 0 0 0-22.272 68.523c-.003.871.104 1.738.32 2.581.96 3.819 25.152 93.419 181.013 93.419 154.155 0 199.68-87.467 201.536-91.221a10.672 10.672 0 0 0 1.131-4.779c0-185.28-103.594-298.667-160-298.667z"
            fill="#f44336"
          />
          <path
            d="M448.201 288.403a231.258 231.258 0 0 0-56.149 10.901 488.238 488.238 0 0 1-135.851 21.099 488.2 488.2 0 0 1-135.851-21.099 231.258 231.258 0 0 0-56.149-10.901c-48.363 0-64 79.061-64 117.333 0 51.371 80.107 106.667 256 106.667s256-55.296 256-106.667c0-38.272-15.637-117.333-64-117.333z"
            fill="#cfd8dc"
          />
          <path
            d="M74.868 171.07a10.667 10.667 0 1 1-7.552-18.219 239.701 239.701 0 0 1 156.885-67.115c5.891 0 10.667 4.776 10.667 10.667s-4.776 10.667-10.667 10.667A221.994 221.994 0 0 0 82.42 167.955a10.668 10.668 0 0 1-7.552 3.115z"
            fill="#d32f2f"
          />
          <circle cx="64.201" cy="192.403" r="64" fill="#ffc107" />
        </svg>
        <div className="font-bold text-lg">
          <a href="/">Santa's List</a>
        </div>
      </div>
      <div className="flex justify-between w-40 text-sm">
        <a href="/settings">Settings</a>
        <a href="/about">About</a>
        <a href="/help">Help</a>
      </div>
    </div>
  </header>
);

export default Navbar;
