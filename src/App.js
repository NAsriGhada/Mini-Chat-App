import React, { useContext } from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { AuthContext } from './context/authContext';

function App() {
  const {currentUser} = useContext(AuthContext)

  const LoggedInUser = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <LoggedInUser>
            <Home />
          </LoggedInUser>
          }/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
