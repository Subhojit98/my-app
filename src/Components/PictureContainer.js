import React from "react";

export default function PictureContainer(props) {
  return (
    <>
      <div className="w-2/5 h-2/4 mt-14 bg-neutral-700  rounded-md shadow-2xl shadow-neutral-800 flex justify-center">
        <img
          className={`max-w-full h-full object-cover border-4 border-black rounded-md ${props.filter}`}
          src={props.image}
          alt=""
        />
      </div>
      <button
        type="button"
        className="text-sky-200 mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-Manrope"
        onClick={props.btnClick}
      >
        {props.BtnName}
      </button>
    </>
  );
}
