import React, { useState } from 'react';
import "./css/header.css"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    photo: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    pincode: '',
  });

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Save the formData object or perform any other action you need
  };
  const handleSubmit=()=>{

  }
  console.log("a",formData);
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Pushes items to both ends
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

  return (
    <div>
      <header className="fixed-header" style={headerStyle}>
        <div style={contentContainerStyle}>
          <div style={{ marginLeft: "30px", cursor: 'pointer' }} onClick={() => navigate('/')}>Home</div>
          <div style={{ marginLeft: "20px", cursor: 'pointer' }} onClick={() => navigate('/rooms')}>Rooms</div>
          <div style={{ marginLeft: "20px", cursor: 'pointer' }}>Facilities</div>
          <div style={{ marginLeft: "20px", cursor: 'pointer' }}>Contact us</div>
          <div style={{ marginLeft: "20px", cursor: 'pointer' }}>About</div>
        </div>
        <div style={buttonContainerStyle}>
          <button style={{ marginRight: "10px", fontSize: '18px', borderRadius: '10px', padding: '10px 20px', cursor: 'pointer' }} onClick={openLoginModal}>Login</button>
          <button style={{ marginRight: "30px", fontSize: '18px', borderRadius: '10px', padding: '10px 20px', cursor: 'pointer' }} onClick={openRegisterModal}>Register</button>
        </div>
      </header>
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content" style={{ marginLeft: "470px", marginRight: "470px", marginTop: "20px" }}>
            <form>
              <div style={{ fontSize: '25px', fontWeight: "bold" }}> User Login</div>

              <div style={{ fontSize: '20px', marginTop: "20px" }}> Email ID</div>
              <input style={{ fontSize: '18px', width: '400px', padding: "10px" }} type="text" />

              <div style={{ fontSize: '20px', marginTop: "10px" }}> Password</div>
              <input style={{ fontSize: '18px', width: '400px', padding: "10px" }} type="password" />
              <div style={{ display: "flex", marginTop: "10px" }}>
                <button style={{ fontSize: "20px" }}>Submit</button>
                <button style={{ fontSize: "20px", marginLeft: "10px" }} onClick={closeLoginModal}>Cancel</button>
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
                  <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="text" onChange={handleChange} name='name'/>

                  <div style={{ fontSize: '20px', marginTop: "10px" }}> Password</div>
                  <input style={{ fontSize: '15px', width: '100%', padding: "5px" }} type="password" onChange={handleChange} name='password'/>

                  <div style={{ fontSize: '18px', marginTop: "10px" }}> Confirm Password</div>
                  <input style={{ fontSize: '15px', width: '100%', padding: "5px" }} type="password" onChange={handleChange}  name='conformPassword'/>
                </div>
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                  <div style={{ fontSize: '20px', marginTop: "20px" }}> Email ID</div>
                  <input style={{ fontSize: '18px', width: '100%', padding: "5px" }} type="text" onChange={handleChange} name='id' />

                  <div style={{ fontSize: '20px', marginTop: "10px" }}> Photo</div>
                  <input style={{ fontSize: '15px', width: '100%', padding: "5px" }} type="text" onChange={handleChange}  name='image'/>
                  <div style={{ fontSize: '20px', marginTop: "10px" }}> Phone Number</div>
                  <input style={{ fontSize: '15px', width: '100%', padding: "5px" }} type="text" onChange={handleChange} name='number'/>
                </div>
              </div>
              <div style={{ fontSize: '20px', marginTop: "10px" }}> Address</div>
              <input style={{ fontSize: '15px', width: '80%', padding: "5px", marginLeft: "10px" }} type="text" onChange={handleChange} name='address'/>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, paddingRight: '20px' }}>
                  <div style={{ fontSize: '20px', marginTop: "20px", marginLeft: "10px" }}> Date of Birth</div>
                  <input style={{ fontSize: '16px', width: '235px', padding: "5px", marginLeft: "10px" }} type="date" onChange={handleChange} name='dob' />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '20px', marginTop: "20px", paddingLeft: '20px' }}> Pincode</div>
                  <input style={{ fontSize: '18px', width: '235px', padding: "5px", marginLeft: "12px" }} type="text"  onChange={handleChange} name='code'/>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, paddingRight: '10px' }}>
                  <button style={{ fontSize: '20px', textAlign: 'center', marginTop: "15px", cursor: 'pointer' }} onClick={handleSubmit}>Submit</button>
                </div>
                <div >
                  <button style={{ fontSize: '20px', textAlign: 'center', marginTop: "15px", cursor: 'pointer' }} onClick={closeRegisterModal}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Header;
