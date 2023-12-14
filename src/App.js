import './App.css';
import * as React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Initial from './Components/Initial';
import Home from './Components/Home';
function App() {
  return (
    <div>
      <Initial />
    <BrowserRouter>   
    <Routes>
     <Route path='/' element={<Home/>} />
    </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App;
