import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";


import PostList from "./PostList";

import Example1 from "./Exercise3/Example1";
import Example2 from "./Exercise3/Example2";
import Example3 from "./Exercise3/Example3";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile Screen</h1>
  </div>
);

const Shop = () => {
  throw new Error('An error has occured.');
  // return <h1>Shop</h1>;
};

const App = () => (
  <>
  
  
  <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        } />

        <Route path="/profile" element={
          <ErrorBoundary>
            <Profile />
          </ErrorBoundary>
        } />

        <Route path="/shop" element={
          <ErrorBoundary>
            <Shop />
          </ErrorBoundary>
        } />
      </Routes>
    </div>
  </BrowserRouter>
  <br /><br />
  {/* ========= Exercise 2 : Display JSON Data in React JS ========= */}
  <PostList />

  {/* ========= Exercise 3 : Display JSON Data and parse it ========= */}
  <Example1 />
  <Example2 />
  <Example3 />
  </>


  

);

export default App;
