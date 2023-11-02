import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() =>{
      setAlert(null);
    },1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#053377';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title='E-learning' aboutELearning='About E-learning' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <div className='container my-3'>
        <About />
      </div> */}

      <div className='container my-3'>
        <TextForm heading='Enter the text to analyze' showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
