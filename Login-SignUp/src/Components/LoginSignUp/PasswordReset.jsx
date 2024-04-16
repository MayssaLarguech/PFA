import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/Config';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox!');
      setError(null);
    } catch (error) {
      // If successful, you can redirect the user to another pagegit
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Reset Password</h1>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form>
        {message && <div className="message">{message}</div>}
        {error && <div className="error">{error}</div>}
        <div className="member">
          Remember your password? <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
