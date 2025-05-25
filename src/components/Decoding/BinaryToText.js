import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import base32 from "hi-base32";

function BinaryToText() {
  let [decodedval, setDecodedVal] = useState("");

  const selectref = useRef(null);

  const convertfrombase64 = () => {
    try {
      return atob(document.getElementById("DecodeText").value);
    } catch (error) {
      document.getElementById("DecodedValue").style.color = "red";
      return "Invalid Base64 string";
    }
  };

  const base64decodedvalue = useCallback(() => {
    setDecodedVal(convertfrombase64());
  }, [setDecodedVal]);

  const base32decodedvalue = () => {
    try {
      const decode32 = base32.decode(
        document.getElementById("DecodeText").value
      );
      setDecodedVal(decode32);
    } catch (error) {
      document.getElementById("DecodedValue").style.color = "red";
      setDecodedVal("Invalid base32 string");
    }
  };

  const decodeBase16 = () => {
    const hexStr = document.getElementById("DecodeText").value;
    try {
      if (!/^[0-9a-fA-F]+$/.test(hexStr) || hexStr.length % 2 !== 0) {
        throw new Error("Invalid base16 string");
      }
      const base16decode = hexStr
        .match(/.{1,2}/g)
        .map((byte) => String.fromCharCode(parseInt(byte, 16)))
        .join("");

      setDecodedVal(base16decode);
    } catch (error) {
      document.getElementById("DecodedValue").style.color = "red";
      setDecodedVal("Invalid base16 string");
    }
  };

  useEffect(() => {
    if (decodedval && selectref.current) {
      window.navigator.clipboard.writeText(decodedval);
      selectref.current?.select();
    }
  }, [decodedval]);

  return (
    <div className="flex flex-col w-[50vw] h-[50vh]  mt-[20vh] mb-[20vh] ml-[15vw] mr-[15vw] justify-start rounded bg-slate-300 p-4">
      <div className=" mt-[3vh] text-center  font-bold text-xl ">Decoding</div>
      <div className="text-center mt-4 ">
        <label
          className="font-semibold text-black  text-left text-lg"
          htmlFor="inputText"
        >
          Enter Text to Decode
        </label>
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        <input
          type="text"
          className="shadow appearance-none border h-9 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[20vw]"
          id="DecodeText"
          placeholder="Enter Text"
        />
      </div>
      <div className="flex flex-row gap-2 justify-center mt-6">
        <button
          id="convertfrombase64"
          onClick={base64decodedvalue}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert From Base64
        </button>
        <button
          id="convertfrombase32"
          onClick={base32decodedvalue}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert From Base32
        </button>
        <button
          id="convertfrombase16"
          onClick={decodeBase16}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert From Base16
        </button>
      </div>
      <div className="text-center mt-6 ">
        <label
          className="font-semibold text-black  text-left text-lg"
          htmlFor="inputText"
        >
          Decoded Value
        </label>
      </div>
      <div className="flex flex-wrap justify-center mt-2 ">
        <input
          type="text"
          className="shadow appearance-none border h-9 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[20vw]"
          id="DecodedValue"
          readOnly
          value={decodedval}
          ref={selectref}
        />
      </div>
    </div>
  );
}

export default BinaryToText;
