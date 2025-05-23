
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/login';
import Home from './pages/home/homepage';
import Contact from './pages/contact/contact';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;