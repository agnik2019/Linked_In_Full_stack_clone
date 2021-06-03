import React from 'react';

import Header from './Header'
import Sidebar from "./Sidebar"
import Login from "./Login"
import Feed from "./Feed"
import './App.css';
import Widgets from "./Widgets"


// function App() {
//   return (
//     <div className="app">
//       <Login />
//       </div>
//   );
// }


function App() {
  return (
    <div className="app">
      <Header />   
      <div className="app__body">
      <Sidebar />
       <Feed /> 
      <Widgets />
      </div> 
      </div>
  );
}

export default App;
