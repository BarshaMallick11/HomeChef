import React, { useEffect, useRef, useState } from 'react';
import '../Style/Profile.css';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
//import defaultPic from '../assets/HomeChef.png';



const Profile = () => {
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: localStorage.getItem('userName') || 'Your Name',
    email: localStorage.getItem('userEmail') || 'your@email.com',
    favoriteCuisine: 'Indian',
    location: '',
    profilePic: localStorage.getItem('profilePic') || 'https://i.imgur.com/6VBx3io.png',
  });

  const [editLocation, setEditLocation] = useState(false);

  // Detect current location
  useEffect(() => {
    if (!navigator.geolocation) {
      setUser(prev => ({
        ...prev,
        location: 'Geolocation not supported'
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const address = data.address;
          const place = `${address.city || address.town || address.village || ''}, ${address.state || ''}, ${address.country || ''}`;
          setUser(prev => ({
            ...prev,
            location: place
          }));
        } catch (err) {
          setUser(prev => ({
            ...prev,
            location: 'Unable to fetch location'
          }));
        }
      },
      () => {
        setUser(prev => ({
          ...prev,
          location: 'Location access denied'
        }));
      }
    );
  }, []);

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setUser(prev => {
          const updated = { ...prev, profilePic: imageUrl };
          localStorage.setItem('profilePic', imageUrl);
          return updated;
        });
      };
      reader.readAsDataURL(file); // ✅ Proper base64 encoding
    }
  };

  const handleLocationChange = (e) => {
    setUser({ ...user, location: e.target.value });
  };
    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        localStorage.removeItem('profilePic');
        navigate('/');
    };


  return (
    <div className="profile">
        <div className="top-bar">
            <div className="back-icon" onClick={() => navigate(-1)}>
                <AiOutlineArrowLeft size={22} />
            </div>
        </div>
      <div className="profile-card">
        <div className="profile-pic-wrapper">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <div className="edit-icon" onClick={handlePhotoClick}>
            <FaEdit size={16} color="#fff" />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handlePhotoChange}
            accept="image/*"
          />
        </div>
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Location:</strong>{' '}
          {editLocation ? (
            <input
              type="text"
              value={user.location}
              onChange={handleLocationChange}
              onBlur={() => setEditLocation(false)}
              autoFocus
            />
          ) : (
            <span onClick={() => setEditLocation(true)} style={{ cursor: 'pointer', color: 'blue' }}>
              {user.location || 'Click to set location'}
            </span>
          )}
        </p>
        <p><strong>Favorite Cuisine:</strong> {user.favoriteCuisine}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
