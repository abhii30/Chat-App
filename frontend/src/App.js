import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { Home, Chat } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
