import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Home from "./pages/home/home";
import Explore from "./pages/explore/explore";
import Community from './pages/community/community';
import Login from "./pages/login/login";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Signup from "./pages/login/signup";



//build navbar next 

function App() {

  return (
    <>
      <Router>
        {/* <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/explore">Explore</Link> |{" "}
          <Link to="/communityboard">Community</Link> |{" "}
          <Link to="/login">Login</Link>
          
        </nav> */}
        <Navbar />
        <main className="bodyContent">
          <Routes>
            <Route 
            exact path="/"
            element={<Home />}
            />

            <Route 
            exact path="/explore"
            element={<Explore />} />

            <Route 
            exact path="/communityboard/:citySlug"
            element={<Community />} />

            {/* <Route
              path="/account"
              element={
                isLoggedIn ? <Account /> : <Navigate to="/login" />
              }
            /> */}
            {/* can also display username and picture here */}

            <Route 
            exact path="/login" 
            element={<Login />} />

            <Route
            exact path ="/signup"
            element={<Signup />} />

          </Routes>
        </main>

        <Footer />
      </Router>
      
    </>
  )
}

export default App
