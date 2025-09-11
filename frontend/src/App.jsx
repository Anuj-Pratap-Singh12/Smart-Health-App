
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import Dashboard from './components/screens/Dashboard';
import Form from './components/screens/Form';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
        
        <div>
          <Routes>
            <Route exact path = '/' element = {<Home/>}/>
            <Route exact path = '/Login' element={<Login/>} />
            <Route exact path = '/SignUp' element={<SignUp/>}/>
            <Route exact path = '/Dashboard' element={<Dashboard/>}/>
            <Route exact path = '/Form' element={<Form/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
