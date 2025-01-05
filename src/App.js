import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/adminhome" element={<AdminHome/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
