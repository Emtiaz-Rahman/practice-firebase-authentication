
import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";


const auth = getAuth();
function App() {
  const handleGoogleSignIn = () => {
    console.log('click')
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
