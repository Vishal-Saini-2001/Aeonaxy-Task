import { useState } from 'react';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './Context';
import Comp3 from './components/Comp3';
import Comp4 from './components/Comp4';
import Comp5 from './components/Comp5';
import Comp6 from './components/Comp6';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay:100
});

function App() {

  const [vale, setValue] = useState("Hello from context");

  const [bar, setBar] = useState({
    width:"0%"
  })

  return (
    <Context.Provider value={{bar, setBar, vale, setValue}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Comp1/>}></Route>
          <Route exact path='/comp2' element={<Comp2/>}></Route>
          <Route exact path='/comp3' element={<Comp3/>}></Route>
          <Route exact path='/comp4' element={<Comp4/>}></Route>
          <Route exact path='/comp5' element={<Comp5/>}></Route>
          <Route exact path='/comp6' element={<Comp6/>}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
