import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Calls from "./pages/Calls";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inbox />} />

          <Route path="*" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
