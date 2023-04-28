import React from "react";
import Logo from "./images/connection.png";
export default function Navbar(props) {

  return (
    <>
      <div className="w-full h-24 bg-purple-600 flex justify-between items-center shadow-md  shadow-neutral-700">
        <div
          className="relative w-16 h-full flex items-center mx-7 gap-3 cursor-pointer"
          style={props}
        >
          <img src={Logo} alt="" className="object-cover " />
          <h2 className="text-3xl text-sky-200 font-Dosis">{props.LogoName}</h2>
        </div>
        <div>
          <div>
            <label className="relative inline-flex items-center cursor-pointer mx-7">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={props.toggleBtn}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3.5px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-lg font-medium text-gray-900 dark:text-sky-200 font-Raleway">
                {props.themeModeText}
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
