
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const googleprovider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleprovider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error)
      })
  }
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }

  return (
    <div className="App">
      {
        user.email ? <button onClick={handleGoogleSignOut}>Sign Out</button> :
          <button onClick={handleGoogleSignIn}>Google Sign In</button>

      }
      <h4>Name:{user.displayName}</h4>
      <p>Email:{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
