import './App.css';
import Home from './Components/Home/Home';

import {Routes,Route} from 'react-router-dom'
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='contacts' element={<Contacts/>} />
      
     </Routes>
    </div>
  );
}

export default App;
