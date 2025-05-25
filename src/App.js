import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Encoding from "./components/Encoding/Encoding";
import Decoding from "./components/Decoding/Decoding";
import TextToBinary from "./components/Encoding/TextToBinary";
import BinaryToText from "./components/Decoding/BinaryToText";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/encode" element={<Encoding />}>
          <Route path="texttobinary" element={<TextToBinary />}></Route>
        </Route>
        <Route path="/decode" element={<Decoding />}>
          <Route path="binarytotext" element={<BinaryToText />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
