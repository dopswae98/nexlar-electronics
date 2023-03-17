import React from 'react';
import { signInWithGoogle } from './firebase.utils';


const TheSignUp = () => {
  return ( 
    <div>
        <form action="">
            <input type="text" />
            <input type="text" />
            <button onClick={signInWithGoogle}>Sign in wth google</button>
        </form>
    </div>
  )
}

export default TheSignUp