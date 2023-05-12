import React from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen'
import { auth } from "./firebaseConfig"

function App() {
  const user = null;

  // // Event Listener
  // useEffect{() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       // Logged in
  //     } else {
  //       // Logged out
  //     }
  //   })
  // }, []}

  return (
    <div className="app">
      <Router>
        {! user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;
