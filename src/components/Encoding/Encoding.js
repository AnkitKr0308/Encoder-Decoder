// import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

function Encoding() {
  const navigate = useNavigate();
  // let [showtexttobinary, setshowtexttobinary] = useState(false);

  const showtexttobinaryscreen = () => {
    // setshowtexttobinary(true);
    navigate("texttobinary");
  };

  return (
    <div>
      <div className="flex flex-wrap justify-normal">
        <div className="flex flex-col justify-top w-[20vw] h-[90vh] bg-green-400">
          <label
            htmlFor="encryptoption"
            className="font-bold text-black ml-8 mt-8 text-lg "
          >
            Encoding
          </label>
          <div>
            <div className="text-white mx-2 my-3 px-1 py-2 text-center font-bold flex flex-wrap justify-start ml-8">
              <button
                onClick={showtexttobinaryscreen}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Text To Binary
              </button>
            </div>
            <div className="text-white mx-2 my-3 px-1 py-2 ml-8 text-center font-bold flex flex-wrap justify-start">
              <button
                // onClick={showScreen}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Character Encoding
              </button>
            </div>
          </div>
        </div>
        <Outlet />
        {/* <div className="flex flex-wrap  content-center ml-96 ">
          <div className="w-full min-w-xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="TextToEncrypt"
                >
                  Enter text to encrypt
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="TextToEncrypt"
                  type="text"
                  placeholder="Enter Text"
                />
              </div>
              <div className="flex items-center justify-end mb-2 mt-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Encrypt
                </button>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="encryptedValue"
                >
                  Encrypted Value
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="encryptedValue"
                  type="text"
                  placeholder=""
                  readOnly
                />
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Encoding;
