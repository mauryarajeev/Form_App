// App.js
import React from 'react';
import Sidebar from './components/sideBar'; // Update the import path
import Form from './components/Form'; // Update the import path
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Form />
    </div>
  );
}

export default App;
