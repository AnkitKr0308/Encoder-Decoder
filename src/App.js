import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Encoding from "./components/Encoding/Encoding";
import Decoding from "./components/Decoding/Decoding";
import TextToBinary from "./components/Encoding/TextToBinary";
import BinaryToText from "./components/Decoding/BinaryToText";
import CharacterEncoding from "./components/Encoding/CharacterEncoding";
import CharacterDecoding from "./components/Decoding/CharacterDecoding";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/encode" element={<Encoding />}>
          <Route path="texttobinary" element={<TextToBinary />}></Route>
          <Route
            path="characterencoding"
            element={<CharacterEncoding />}
          ></Route>
        </Route>
        <Route path="/decode" element={<Decoding />}>
          <Route path="binarytotext" element={<BinaryToText />}></Route>
          <Route
            path="characterdecoding"
            element={<CharacterDecoding />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
