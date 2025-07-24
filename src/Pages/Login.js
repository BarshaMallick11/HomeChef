import React, {useState} from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';


const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and SignUp
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', storedUser.name);
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && password) {
      const newUser = { name, email, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      alert('Sign up successful! You can now log in.');
      setIsLogin(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={isLogin ? handleLogin : handleSignUp}>
        <h2>{isLogin ? 'Login to HomeChef ' : 'Create an Account'}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>

        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

