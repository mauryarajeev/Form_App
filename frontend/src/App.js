// App.js
import React from 'react';
import Sidebar from './components/sideBar'; 
import Form from './components/Form'; 
import './App.css'; 

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Form />
    </div>
  );
}

export default App;
