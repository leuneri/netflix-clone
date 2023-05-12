import React, { useRef } from 'react'
import './SignUpScreen.css'
import  '../firebase'

function SignUpScreen() {


  const emailRef = useRef(null)
  const passwordRef = useRef(null)

    // Prevent from going back to main page when reload
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        ).then(() => {
          // console.log(authUser)
        }).catch(error => {
          alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
    }

  return (
    <div className='signUpScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={signIn}>Sign In</button>
            <h4>
                <span className="signUpScreen_gray">New to Netflix? </span>
                  <span className='signUpScreen_link' onClick={register}>Sign up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen