import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/contact"></Route>
          <Route path="/about"></Route>
          <Route path="/projects"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
