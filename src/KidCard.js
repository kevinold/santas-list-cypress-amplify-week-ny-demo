import React from "react";

const KidCard = ({ kid, setSelectedKid, isSelected }) => {
  return (
    <li
      className={`flex bg-white w-full border-b border-gray-200 p-6 justify-between ${
        isSelected ? "bg-gray-200" : ""
      }`}
      onClick={() => setSelectedKid(kid.id)}
    >
      <div className="flex md:w-full h-16 mx-auto items-center">
        <img
          src="https://images.unsplash.com/photo-1553907725-c3d2e2ccc00e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80&fit=facearea&facepad=2&w=144&h=144"
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <p className="text-lg font-semibold ml-6">
          <span className="text-gray-900">{kid.name}</span>
          <span className="text-gray-600"> </span>
          <span className="text-gray-900"></span>
        </p>
      </div>
      <div className="flex h-16 mx-auto items-center">
        <div className="text-md text-gray-700">
          <svg
            className="h-6 w-6 stroke-current text-gray-600"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill="#64748b"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default KidCard;
