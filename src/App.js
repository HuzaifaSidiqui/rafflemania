import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import UserSignup from './auth/UserSignup';
// import Navbar from './utils/Navbar';
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
