import React, { useState } from 'react';
import "./css/header.css"
import { useNavigate } from 'react-router-dom';
// Import the necessary Font Awesome components
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsApp from '@mui/icons-material/WhatsApp';

// Import the icons you want to use
import { faHotel, } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library



const Header = () => {
  library.add(faHotel);
  const entireScreenWidth = window.innerHeight / 380
  console.log(entireScreenWidth)
  const [loginStatus, setLoginStatus] = useState(false)
  const [registerStatus, setRegisterStatus] = useState(false)
  const [loginMail, setLoginMail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    image: "",
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    pincode: '',
    email: "",
    password: "",
  });
  const handleWhatsAppClick = (phoneNumber) => {
    // Format the phone number to remove any non-numeric characters
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Construct the WhatsApp URL
    const whatsappURL = `whatsapp://send?phone=${formattedPhoneNumber}`;

    // Attempt to open the WhatsApp app
    window.location.href = whatsappURL;
  };
  const handleLogin = (e) => {
    const { name, value, } = e.target;
    if (name === 'loginemail') {
      setLoginMail(value);
    } else if (name === 'loginpassword') {
      setLoginPassword(value);
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: loginMail,
      password: loginPassword,
    };

    fetch("https://tense-foal-bandanna.cyclic.app/checkLogin", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert("Login successful");
          setLoginStatus(true)
          localStorage.setItem('email', loginMail);
        } else if (response.status === 401) {
          window.alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error checking login:", error);
      });
    setLoginModalOpen(false);
  };


  const handleChange = (e) => {
    const { name, value, } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://tense-foal-bandanna.cyclic.app/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.headers.get("content-type")?.includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {

        window.alert(data.message);
        if (data.message === 'Data received and inserted successfully') {
          setRegisterStatus(true)
        }
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });
    setRegisterModalOpen(false);
  }

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };
  //<div style={{ marginLeft: "30px", cursor: 'pointer' ,color:"#F0E68C"}} onClick={() => navigate('/')} >Home</div>
  return (
    <div>
      <header className="fixed-header">
        <div className="header-container">
          <div className="header-content-container" >
            <div className="header-link" onClick={() => navigate('/rooms')}>
              Rooms
            </div>
            <div className="header-link " onClick={() => navigate('/facilities')}>
              Facilities
            </div>
            <div className="header-link " onClick={() => navigate('/contactus')}>
              Contact Us
            </div>
            <div className="header-link " onClick={() => navigate('/about')}>
              About Us
            </div>
            <div className="header-link " onClick={() => navigate('/images')}>
              Photos
            </div>
          </div>
          <div className="header-title">
            <div
              className="title"
              onClick={() => navigate('/')}
            >
              <FontAwesomeIcon icon="fa-solid fa-hotel" />
              <a style={{ marginLeft: '10px',cursor:"pointer" }}>THE HAWELI</a>
              <FontAwesomeIcon icon="fa-solid fa-hotel" style={{ marginLeft: '10px' }} />
            </div>
            <div style={{cursor:"pointer"}} className="resort" onClick={() => navigate('/')}>
              Resort
            </div>
          </div>
          <div className="button-container">
            <div className="whatsapp-container">
              <div className="whatsapp-icon" onClick={() => handleWhatsAppClick('+971890521')} ><a style={{ fontSize: "1px" }}><WhatsApp /></a></div>
              <span className="whatsapp-number" onClick={() => handleWhatsAppClick('+971890521')}>
                +91-971890521
              </span>
            </div>
            <button className="register-button" style={{backgroundColor:"gold",fontWeight:"bold"}} onClick={openRegisterModal} disabled={loginStatus || registerStatus}>
              Register
            </button>
            {loginStatus ? (
              <span className="user-icon">👤</span>
            ) : (
              <button className="login-button" style={{backgroundColor:"gold",fontWeight:"bold"}} onClick={() => openLoginModal()} disabled={loginStatus}>
                Login
              </button>
            )}
          </div>

        </div>

      </header>
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content" >
            <form>
              <div className='login-modal-header'> User Login</div>

              <div className='login-modal-lebel1'> Email ID</div>
              <input className='login-modal-input' type="text" onChange={handleLogin} name='loginemail' />

              <div className='login-modal-lebel2' type="password" > Password</div>
              <input className='login-modal-input' type="password" onChange={handleLogin} name='loginpassword' />
              <div style={{ display: "flex", marginTop: "10px" }}>
                <button style={{ fontSize: "20px", cursor: 'pointer', marginLeft: "40px",color:"gold",backgroundColor:"black" }} onClick={handleLoginSubmit}>Submit</button>
                <button style={{ fontSize: "20px", marginLeft: "10px", cursor: 'pointer' }} onClick={closeLoginModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isRegisterModalOpen && (
        <div className="modal">
          <div className="modal-content" >
            <form class="registration-modal-form-container">
              <div class="registration-modal-form-heading">User Registration</div>
              <div class="registration-modal-form-columns">
                <div class="registration-modal-left-column">
                  <div class="registration-modal-form-input">
                    <div class="registration-modal-form-label">*Name</div>
                    <input type="text" class="registration-modal-form-input" onChange={handleChange} name="name" />
                    <div >
                      <div class="registration-modal-form-label">*Password</div>
                      <input type="password" class="registration-modal-form-input" onChange={handleChange} name="password" />
                    </div>

                    <div >
                      <div class="registration-modal-form-label">*Confirm Password</div>
                      <input type="password" class="registration-modal-form-input" onChange={handleChange} name="confirmPassword" />
                    </div>
                  </div>
                </div>
                <div class="registration-modal-right-column">
                  <div class="registration-modal-form-input">
                    <div class="registration-modal-form-label">*Email ID</div>
                    <input type="text" class="registration-modal-form-input" onChange={handleChange} name="email" />
                    <div class="registration-modal-left-column">
                      <div >
                        <div class="registration-modal-form-label">*Phone Number</div>
                        <input type="text" class="registration-modal-form-input" onChange={handleChange} name="phoneNumber" />
                      </div>
                      <div >
                        <div class="registration-modal-form-label">Pincode</div>
                        <input type="text" class="registration-modal-form-input" onChange={handleChange} name="pincode" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="registration-modal-address-label">*Address</div>
              <input class="registration-modal-form-input1" type="text" onChange={handleChange} name="address" />
              <div class="registration-modal-form-columns">
                <div class="registration-modal-left-column">
                  <div >
                    <div class="registration-modal-form-label">*Photo</div>
                    <input class="registration-modal-form-input2" type="file" accept=".jpg, .jpeg, .png" onChange={handleChange} name="image" />
                  </div>
                </div>
                <div class="registration-modal-right-column">
                  <div >
                    <div class="registration-modal-form-label">*D.O.B.</div>
                    <input class="registration-modal-form-input2" type="date" onChange={handleChange} name="dateOfBirth" />
                  </div>
                </div>
              </div>
              <div class="registration-modal-form-columns">
                <button class="registration-modal-form-button" style={{color:"gold",backgroundColor:"black"}} onClick={handleSubmit}>Submit</button>
                <button class="registration-modal-form-button" onClick={closeRegisterModal}>Cancel</button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Header;
