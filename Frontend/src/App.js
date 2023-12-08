import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ui from "./components/Ui";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Ui />} />
        <Route path="/form/:name" element={<Ui />} />
      </Routes>
    </Router>
  );
}

export default App;
