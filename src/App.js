import React, { useEffect } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen'
import { auth } from "./firebaseConfig"
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  // Event Listener for persistence (stay signed in or out)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))

      } else {
        // Logged out -> logout is reset user back to null
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        { (user) ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />}/>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;
