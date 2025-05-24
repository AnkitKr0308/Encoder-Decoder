import React from "react";

function Decoding() {
  return (
    <>
      <div className="flex flex-wrap justify-normal">
        <div className="flex flex-col justify-top min-w-80 h-[90vh] bg-green-400">
          <label
            htmlFor="decryptoption"
            className="font-bold text-black ml-4 mt-8 text-lg "
          >
            Decryption
          </label>
          <div>
            <div className="text-white mx-2 my-3 px-1 py-2 text-center font-bold">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Convert from base 64
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  content-center ml-96 ">
          <div className="w-full min-w-xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              ©2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Decoding;
