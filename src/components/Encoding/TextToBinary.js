import React, { useCallback, useState, useRef, useEffect } from "react";
import base32 from "hi-base32";

function TextToBinary() {
  let [encodedval, setEncodedVal] = useState("");

  const selectreference = useRef(null);

  const encodetoBase64 = () => {
    return btoa(document.getElementById("EncodeText").value);
  };

  const converttobase64 = useCallback(() => {
    setEncodedVal(encodetoBase64());
  }, []);

  const encodetoBase32 = () => {
    const base32value = base32.encode(
      document.getElementById("EncodeText").value
    );
    setEncodedVal(base32value);
  };

  const encodetoBase16 = () => {
    const base16encoded = Array.from(
      document.getElementById("EncodeText").value
    )
      .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");
    setEncodedVal(base16encoded.toUpperCase());
  };

  const converttobase16 = () => {
    encodetoBase16();
  };

  useEffect(() => {
    if (encodedval && selectreference.current) {
      selectreference.current?.select();
      window.navigator.clipboard.writeText(encodedval);
    }
  }, [encodedval]);

  return (
    <div className="flex flex-col w-[50vw] h-[50vh]  mt-[20vh] mb-[20vh] ml-[15vw] mr-[15vw] justify-start rounded bg-slate-300 p-4">
      <div className=" mt-[3vh] text-center  font-bold text-xl ">Encoding</div>
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
          id="converttobase64"
          onClick={converttobase64}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert To Base64
        </button>
        <button
          id="converttobase32"
          onClick={encodetoBase32}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert To Base32
        </button>
        <button
          id="converttobase16"
          onClick={converttobase16}
          className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert To Base16
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

export default TextToBinary;
