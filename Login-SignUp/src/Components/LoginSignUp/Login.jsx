import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the signInWithEmailAndPassword function
import { auth } from '../../firebase/Config'; // Import the auth instance from your Config.js file
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If successful, you can redirect the user to another page
      navigate("/home")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
        <div className="member">
        <Link to="/reset-password">Forgot Password?</Link>
        </div>
        <div className="member">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </div>
        
      </div>
    </>
  );
};

export default Login;
