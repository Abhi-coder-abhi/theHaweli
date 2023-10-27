import React, { useState } from 'react';
import "./css/header.css"
import { useNavigate } from 'react-router-dom';
// Import the necessary Font Awesome components
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneIcon from '@mui/icons-material/Phone';

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
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",// Pushes items to both ends
    padding: "10px",
  };
  const contentContainerStyle = {
    display: 'flex',
  };
  const buttonContainerStyle = {
    display: 'flex',
  };
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
      <header className="fixed-header" >
        <div style={headerStyle}>
          <div style={contentContainerStyle}>

            <div style={{ marginLeft: "1.25vw", cursor: 'pointer', fontSize: "1.25vw", color: "#F0E68C" }} onClick={() => navigate('/rooms')}>Rooms</div>
            <div style={{ marginLeft: "1.25vw", cursor: 'pointer', fontSize: "1.25vw", color: "#F0E68C" }} onClick={() => navigate('/facilities')}>Facilities</div>
            <div style={{ marginLeft: "1.25vw", cursor: 'pointer', fontSize: "1.25vw", color: "#F0E68C" }} onClick={() => navigate('/contactus')}>Contact Us</div>
            <div style={{ marginLeft: "1.25vw", cursor: 'pointer', fontSize: "1.25vw", color: "#F0E68C" }} onClick={() => navigate('/about')}>About Us</div>
            <div style={{ marginLeft: "1.25vw", cursor: 'pointer', fontSize: "1.25vw", color: "#F0E68C" }} onClick={() => navigate('/images')}>Photos</div>
          </div>
          <div style={buttonContainerStyle}>
            <div style={{color:"gold",fomtsize:"0.8vw",marginRight: "0.75vw"}}>
            <PhoneIcon style={{ fontSize: '0.9vw', marginTop: `${11 / 16}vw`,color:"#333366",color:"gold"  }} /><a style={{ fontSize: '1vw' }}>971890521</a>
          </div>
            <button style={{ marginRight: "0.75vw", fontSize: `${18 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${10 / 16}vw ${10 / 16}vw`, cursor: 'pointer' }} onClick={openRegisterModal} disabled={loginStatus || registerStatus}>Register</button>
            {loginStatus ? (

              <span style={{ marginRight: "0.75vw", fontSize: `${24 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${10 / 16}vw ${10 / 16}vw`, cursor: 'pointer' }}>👤</span>

            ) : (
              <button
                style={{ marginRight: "1.9vw", fontSize: `${18 / 16}vw`, borderRadius: `${10 / 16}vw`, padding: `${10 / 16}vw ${10 / 16}vw`, cursor: 'pointer' }}
                onClick={openLoginModal}
                disabled={loginStatus}
              >
                Login
              </button>
            )}

           
          </div>
        </div>
        <div style={{fontSize: `${24 / 16}vw`}}>

          <div style={{ position: "absolute", top: "0.6vw", left: "50%", transform: "translateX(-50%)", textAlign: "center", color: "#F0E68C", fontSize: `${24 / 16}vw`, fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}
            onClick={() => navigate('/')}>
            <FontAwesomeIcon icon="fa-solid fa-hotel" /><a style={{ marginLeft: `${10 / 16}vw` }}>THE HAWELI</a><FontAwesomeIcon icon="fa-solid fa-hotel" style={{ marginLeft: `${10 / 16}vw` }} />
          </div>
          <div style={{ position: "absolute", top: "2.3vw", left: "50%", transform: "translateX(-50%)", textAlign: "center", color: "#F0E68C", fontSize: `${24 / 16}vw`, fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}
            onClick={() => navigate('/')}>
            Resort
          </div>
        </div>


      </header>
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content" style={{ marginLeft: "470px", marginRight: "470px", marginTop: "20px" }}>
            <form>
              <div style={{ fontSize: '25px', fontWeight: "bold" }}> User Login</div>

              <div style={{ fontSize: '20px', marginTop: "20px" }}> Email ID</div>
              <input style={{ fontSize: '18px', width: '400px', padding: "10px" }} type="text" onChange={handleLogin} name='loginemail' />

              <div style={{ fontSize: '20px', marginTop: "10px" }} type="password" > Password</div>
              <input style={{ fontSize: '18px', width: '400px', padding: "10px" }} type="password" onChange={handleLogin} name='loginpassword' />
              <div style={{ display: "flex", marginTop: "10px" }}>
                <button style={{ fontSize: "20px", cursor: 'pointer' }} onClick={handleLoginSubmit}>Submit</button>
                <button style={{ fontSize: "20px", marginLeft: "10px", cursor: 'pointer' }} onClick={closeLoginModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isRegisterModalOpen && (
        <div className="modal">
          <div className="modal-content" style={{ marginLeft: "400px", marginRight: "400px", marginTop: "20px", display: 'flex' }}>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div style={{ fontSize: '25px', fontWeight: "bold" }}> User Registration</div>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, paddingRight: '20px' }}>
                  <div style={{ fontSize: '20px', marginTop: "20px" }}> Name</div>
                  <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="text" onChange={handleChange} name='name' />


                  <div style={{ fontSize: '20px', marginTop: "10px" }}> Password</div>
                  <input style={{ fontSize: '15px', width: '100%', padding: "5px" }} type="password" onChange={handleChange} name='password' />

                  <div style={{ fontSize: '20px', marginTop: "10px" }}> Confirm Password</div>
                  <input style={{ fontSize: '15px', width: '100%', padding: "5px" }} type="password" onChange={handleChange} name='confirmPassword' />
                </div>
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '20px', marginTop: "20px" }}> Email ID</div>
                    <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="text" onChange={handleChange} name='email' />
                    <div style={{ fontSize: '20px', marginTop: "10px" }}> Phone Number</div>
                    <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="text" onChange={handleChange} name='phoneNumber' />
                    <div style={{ fontSize: '20px', marginTop: "10px" }}> Pincode</div>
                    <input style={{ fontSize: '15px', width: '100%', padding: "5px" }} type="text" onChange={handleChange} name='pincode' />
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '20px', marginTop: "10px" }}> Address</div>
              <input style={{ fontSize: '15px', width: '80%', padding: "5px", marginLeft: "10px" }} type="text" onChange={handleChange} name='address' />
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, paddingRight: '20px' }}>
                  <div style={{ fontSize: '20px', marginTop: "20px" }}> Photo</div>
                  <input style={{ fontSize: '16px', width: '100%', padding: "5px" }} type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleChange} name='image' />
                </div>
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '20px', marginTop: "20px" }}> D.O.B.</div>
                    <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="date" onChange={handleChange} name='dateOfBirth' />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button style={{ fontSize: '20px', textAlign: 'center', marginRight: '10px', cursor: 'pointer' }} onClick={handleSubmit}>
                  Submit
                </button>
                <button style={{ fontSize: '20px', textAlign: 'center', cursor: 'pointer' }} onClick={closeRegisterModal}>
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Header;
