import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MyRoutes from './components/routing/MyRoutes'
import './index.css'



function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

export default App;
