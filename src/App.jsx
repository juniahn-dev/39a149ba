import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Calls from "./pages/Calls";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/calls" element={<Calls />} />

        <Route path="*" element={<Inbox />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
