import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarLoader } from 'react-spinners';
import './Register.css';

const Register = () => {
  // State declarations
  const [username, setUsername] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Show/hide password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Show/hide confirm password

  // Handle input changes
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setUsernameErr('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr('');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr('');
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordErr('');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!username) {
      setUsernameErr('Username is required');
    } else if (!email) {
      setEmailErr('Email is required');
    } else if (!password) {
      setPasswordErr('Password is required');
    } else if (!confirmPassword) {
      setConfirmPasswordErr('Confirm Password is required');
    } else if (password !== confirmPassword) {
      setConfirmPasswordErr('Passwords do not match');
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        toast.success('Registration Successful', {
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
    <section className="registerSection">
      <div className="formContainer">
        <h2 className="registerTitle mt-4 mb-7">Create Account</h2>
        <form className="registerForm" onSubmit={handleSubmit}>
          <div className="inputWrapper">
            {/* username */}
            <input
              type="text"
              placeholder="Username"
              className="inputField"
              value={username}
              onChange={handleUsername}
            />
           <p className="errorText">{usernameErr}</p>
          </div>

          <div className="inputWrapper">
            {/* email */}
            <input
              type="email"
              placeholder="Email"
              className="inputField"
              value={email}
              onChange={handleEmail}
            />
           <p className="errorText">{emailErr}</p>
          </div>
              
          <div className="inputWrapper">
            {/* password */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="inputField"
              value={password}
              onChange={handlePassword}
            />
          
            <button 
              type="button" 
              className="showPasswordButton" 
              onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
            <p className="errorText">{passwordErr}</p>
          </div>

           {/* confirm password */}
          <div className="inputWrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="inputField"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
            <button 
              type="button" 
              className="showPasswordButton" 
              onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
            <p className="errorText">{confirmPasswordErr}</p>
          </div>
          
          {/* buttons */}
          <button type="submit" className="registerButton">
            {loading ? <BarLoader color="#ffffff" height={4} /> : "Register"}
          </button>
        </form>

        <div className="additionalLinks">
          <p className="logInPrompt">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
