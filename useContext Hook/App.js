
import './App.css';
import {BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { useState, createContext } from 'react';
import { Profile } from './pages/Profile';
// import { ProviderComponent } from './pages/Provide';

export const Mycontext = createContext();

function App() {

const [username,setusername] = useState("Sabin Chang Mann")



  return (

<div className="App">
  <Mycontext.Provider value={{username,setusername}}>
   <Router>
      <div>NAV 
        <Link to="/" >Home</Link>
        <Link to="/profile">PRofile</Link>
        <Link to ="/contact">Conteccc</Link>
      </div>

      <Routes>
     <Route path="/" element = {<Home />} />
 
     <Route path="/profile" element = {<Profile />} />
    
     <Route path="/contact" element = {<Contact/>} />
     <Route path="*" elemement = {<h1>page not found</h1>}/>
     
      </Routes>
    </Router>
    </Mycontext.Provider>

    </div>
  );
}

export default App;
