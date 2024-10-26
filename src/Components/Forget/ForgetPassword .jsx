import { useState } from 'react';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import './ForgetPassword.css';

const ForgetPassword = () => {
  // State declarations
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setEmailErr('Email is required');
    } else {
      setLoading(true);

      // Simulate an API call
      setTimeout(() => {
        setLoading(false);
        toast.success('Reset link sent to your email', {
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
    <section className="forgetPasswordSection">
      <div className="formContainer">
        <h2 className="loginTitle">Forgot Password?</h2>
        <form className="forgetPasswordForm" onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <input
              type="email"
              placeholder="Enter your email"
              className="inputField"
              value={email}
              onChange={handleEmail}
            />
           <p className="errorText">{emailErr}</p>
          </div>

          <button type="submit" className="submitButton">
            {loading ? <BarLoader color="#ffffff" height={4} /> : "Send Reset Link"}
          </button>
        </form>

        <div className="additionalLinks">
          <p>
            Remember your password? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ForgetPassword;
