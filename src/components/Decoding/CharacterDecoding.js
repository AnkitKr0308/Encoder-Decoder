// import React, { useCallback, useState } from "react";

// function CharacterDecoding() {
//   let [decodedval, setDecodedVal] = useState("");

//   return (
//     <div className="flex flex-col w-[50vw] h-[50vh]  mt-[20vh] mb-[20vh] ml-[15vw] mr-[15vw] justify-start rounded bg-slate-300 p-4">
//       <div className=" mt-[3vh] text-center  font-bold text-xl ">
//         Character Decoding
//       </div>
//       <div className="text-center mt-4 ">
//         <label
//           className="font-semibold text-black  text-left text-lg"
//           htmlFor="inputText"
//         >
//           Enter Text to Decode
//         </label>
//       </div>
//       <div className="flex flex-wrap justify-center mt-2">
//         <input
//           type="text"
//           className="shadow h-9 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[20vw]"
//           id="DecodeText"
//           placeholder="Enter Text"
//         />
//       </div>
//       <div className="flex flex-row gap-2 justify-center mt-6">
//         <button
//           id="ascii"
//           //   onClick={converttoascii}
//           className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Convert from ASCII
//         </button>

//         <button
//           id="utf-16"
//           //   onClick={converttobase16}
//           className="bg-green-500 border border-white hover:bg-green-700   text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Convert from UTF-16
//         </button>
//       </div>
//       <div className="text-center mt-6 ">
//         <label
//           className="font-semibold text-black  text-left text-lg"
//           htmlFor="inputText"
//         >
//           Decoded Value
//         </label>
//       </div>
//       <div className="flex flex-wrap justify-center mt-">
//         <input
//           type="text"
//           className="shadow appearance-none border h-9 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[20vw]"
//           id="DecodedValue"
//           readOnly
//           value={decodedval}
//           //   ref={selectreference}
//         />
//       </div>
//     </div>
//   );
// }

// export default CharacterDecoding;
