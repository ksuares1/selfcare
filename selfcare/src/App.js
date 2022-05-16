import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
// import Nav from './components/Navbar';




function App() {
  return (
<div>

<Router>
  <div>
    {/* <Nav/>
    <br>
    </br> */}
    <div>
    <Routes>
         <Route  path="/" element={<Home/>} />
         </Routes>

    </div>
  </div>
</Router>
   </div>
    
    
  );
}

export default App;
