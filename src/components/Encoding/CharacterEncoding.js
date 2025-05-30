import React, { useCallback, useEffect, useRef, useState } from "react";

function CharacterEncoding() {
  let [encodedval, setEncodedVal] = useState("");
  const selectreference = useRef(null);

  const converttoascii = useCallback(() => {
    const str = document.getElementById("EncodeText").value;
    const value = str.split("").map((char) => char.charCodeAt(0));
    setEncodedVal(value);
  }, [setEncodedVal]);

  const encodeutf8 = useCallback(() => {
    const str = document.getElementById("EncodeText").value;
    const encoder = new TextEncoder();
    const cnvrt2utf8 = encoder.encode(str);
    setEncodedVal(cnvrt2utf8);
  }, [setEncodedVal]);

  const encodeutf16 = useCallback(() => {
    const str = document.getElementById("EncodeText").value;
    const encoder = new TextEncoder("utf-16le");
    const cnvrt2utf16 = encoder.encode(str);
    setEncodedVal(cnvrt2utf16);
  }, [setEncodedVal]);

  useEffect(() => {
    if (encodedval && selectreference.current) {
      selectreference.current?.select();
      window.navigator.clipboard.writeText(encodedval);
    }
  }, [encodedval]);

  return (
    <div className="flex flex-col w-[50vw] h-[50vh]  mt-[20vh] mb-[20vh] ml-[15vw] mr-[15vw] justify-start rounded bg-slate-300 p-4">
      <div className=" mt-[3vh] text-center  font-bold text-xl ">
        Character Encoding
      </div>
      <div className="text-center mt-4 ">
        <label
          className="font-semibold text-black  text-left text-lg"
          htmlFor="inputText"
        >
          Enter Text to Encode
        </label>
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        <input
          type="text"
          className="shadow h-9 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[20vw]"
          id="EncodeText"
          placeholder="Enter Text"
        />
      </div>
      <div className="flex flex-row gap-2 justify-center mt-6">
        <button
          id="ascii"
          onClick={converttoascii}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert to ASCII
        </button>
        <button
          id="utf-8"
          onClick={encodeutf8}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert to UTF-8
        </button>
        <button
          id="utf-16"
          onClick={encodeutf16}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert To UTF-16
        </button>
      </div>
      <div className="text-center mt-6 ">
        <label
          className="font-semibold text-black  text-left text-lg"
          htmlFor="inputText"
        >
          Encoded Value
        </label>
      </div>
      <div className="flex flex-wrap justify-center mt-">
        <input
          type="text"
          className="shadow appearance-none border h-9 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[20vw]"
          id="EncodedValue"
          readOnly
          value={encodedval}
          ref={selectreference}
        />
      </div>
    </div>
  );
}

export default CharacterEncoding;
