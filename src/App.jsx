import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Community from './pages/community/community';
import Login from "./pages/login/login";

//build navbar next 

function App() {

  return (
    <>
      <h1>URBAN LENS</h1>
      <Router>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/explore">Explore</Link> |{" "}
          <Link to="/communityboard">Community</Link> |{" "}
          <Link to="/login">Login</Link>
          
        </nav>
        <Routes>
          <Route 
          exact path="/"
          element={<Home />}
          />

          <Route 
          exact path="/explore"
          element={<Explore />} />

          <Route 
          exact path="/communityboard"
          element={<Community />} />

          <Route 
          exact path="/login" 
          element={<Login />} />

        </Routes>
      </Router>
      
    </>
  )
}

export default App
