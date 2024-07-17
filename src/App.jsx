import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox";
import { RecoilRoot } from "recoil";
import Phone from "pages/phone";
import User from "pages/user";
import Gear from "pages/gear";
import Record from "pages/record";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/user" element={<User />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/record" element={<Record />} />

          <Route path="*" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
