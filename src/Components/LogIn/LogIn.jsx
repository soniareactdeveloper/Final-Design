import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarLoader } from 'react-spinners';
import './LogIn.css';

const LogIn = () => {
  // State declarations
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Show/hide password

  // Handle email input change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr('');
  };

  // Handle password input change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr('');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr('Email is required');
    } else if (!password) {
      setPasswordErr('Password is required');
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        toast.success('LogIn Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }, 2000);
    }
  };

  return (
    <section className="logInSection">
      <div className="formContainer">
        <h2 className="loginTitle">Welcome Back!</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputWrapper">
            {/* email */}
            <input
              type="email"
              placeholder="Email"
              className="inputField"
              onChange={handleEmail}
            />
            <p className="errorText">{emailErr}</p>
          </div>
          {/* password */}
          <div className="inputWrapper">
            <input
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              className="inputField"
              value={password}
              onChange={handlePassword}
            />
            {/* button */}
            <button 
              type="button" 
              className="showPasswordButton" 
              onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
            {passwordErr && <p className="errorText">{passwordErr}</p>}
          </div>

          <button type="submit" className="loginButton">
            {loading ? <BarLoader color="#ffffff" height={4} /> : "Log In"}
          </button>
        </form>

        <div className="additionalLinks">
          <p className="signUpPrompt">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
          <p><Link to="/forgot">Forgot Password?</Link></p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default LogIn;
