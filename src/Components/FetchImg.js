import React from "react";

export default function FetchImg(props) {
  return (
    <>
      <div className="w-2/5 mt-20 mb-8 flex justify-center items-center gap-4">
        <input
          type="text"
          value={props.input}
          onChange={props.changeVal}
          placeholder="Enter Your Image Url Here"
          className="w-11/12  p-4 rounded-lg outline-none font-Raleway -tracking-tighter text-lg bg-neutral-600 text-white"
        />

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-neutral-700 font-bold py-3 px-7 border-b-4 border-blue-700 shadow-xl hover:border-blue-500 rounded"
            onClick={props.getImg}
          >
            Get
          </button>
        </div>
      </div>
    </>
  );
}
