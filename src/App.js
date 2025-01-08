import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/home" element={<Home showAlert={showAlert} />} />
          <Route path="/admin" element={<Admin showAlert={showAlert} />} />
          <Route path="/adminhome" element={<AdminHome showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
