import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

function Decoding() {
  const navigate = useNavigate();

  const showBinaryToText = () => {
    navigate("binarytotext");
  };

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-normal">
          <div className="flex flex-col justify-top w-[20vw] h-[90vh] bg-green-400">
            <label
              htmlFor="encryptoption"
              className="font-bold text-black ml-8 mt-8 text-lg "
            >
              Decoding
            </label>
            <div>
              <div className="text-white mx-2 my-3 px-1 py-2 text-center font-bold flex flex-wrap justify-start ml-8">
                <button
                  onClick={showBinaryToText}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Binary to Text
                </button>
              </div>
              <div className="text-white mx-2 my-3 px-1 py-2 ml-8 text-center font-bold flex flex-wrap justify-start">
                <button
                  // onClick={showScreen}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Character Decoding
                </button>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Decoding;
