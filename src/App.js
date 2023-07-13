import React from 'react'
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark theme has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light theme has been enabled", "success");
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/"
              element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Charater Counter" mode={mode} />}
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Charater Counter"  mode={mode}/> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
