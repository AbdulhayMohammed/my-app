// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react'
// import Header from './Componenet/header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeroSection from './Componenet/HeroSection'
import NewSection from './Componenet/NewSection'
// import SectionThree from './Componenet/SectionThree';
// import Head from './Componenet/HeadSection'
function App() {
  return (
    <div>


      {/* < Header/> */}
      {/* <Head/> */}
      {/* <HeroSection/> */}
      <NewSection/> 
     {/* <SectionThree/> */}
      

 {/* <Router>
     <Routes> 
     <Route path="/slide/:index" element={<NewSection />} /> 
      </Routes>
  </Router>   */}
 </div> 
  ) 
}
 export default App;


