import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Navbar() {
  // let [showEncryption, setShowEncryption] = useState(false);
  // let [showDecryption, setShowDecryption] = useState(false);

  const navigate = useNavigate();

  const showEncrypt = () => {
    // setShowEncryption(true);
    // setShowDecryption(false);
    navigate("/encode");
  };

  const showDecrypt = () => {
    // setShowDecryption(true);
    // setShowEncryption(false);
    navigate("/decode");
  };

  return (
    <>
      <div id="navbar">
        <nav className="bg-gray-800 flex flex-row gap-20 content-center justify-center h-[10vh] w-full">
          <button
            button
            type="button"
            className="mt-3 mb-3 px-2 py-2 bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white border border-white hover:border-transparent rounded w-72"
            onClick={showEncrypt}
          >
            Encrypt
          </button>

          <button
            button
            type="button"
            onClick={showDecrypt}
            className="mt-3 mb-3 px-2 py-2 bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white border border-white hover:border-transparent rounded w-72"
          >
            Decrypt
          </button>
        </nav>
      </div>
      {/* {showEncryption} */}
      <Outlet />

      {/* {showDecryption && (
        <div className="flex justify-start">
          <Decoding />
        </div>
      )} */}
    </>
  );
}

export default Navbar;
