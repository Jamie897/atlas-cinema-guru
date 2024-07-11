import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    switch (pageName) {
      case 'home':
        navigate('/home');
        break;
      case 'favorites':
        navigate('/favorites');
        break;
      case 'watchlater':
        navigate('/watchlater');
        break;
      default:
        navigate('/');
    }
  };

  useEffect(() => {
    axios.get('/api/activity')
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the activities!', error);
      });
  }, []);

  return (
    <nav className={`sidebar ${small ? 'small' : 'large'}`}>
      <ul className="navigation">
        <li onClick={() => setPage('home')} className={selected === 'home' ? 'active' : ''}>Home</li>
        <li onClick={() => setPage('favorites')} className={selected === 'favorites' ? 'active' : ''}>Favorites</li>
        <li onClick={() => setPage('watchlater')} className={selected === 'watchlater' ? 'active' : ''}>Watch Later</li>
      </ul>
      {showActivities && (
        <ul className="activities">
          {activities.slice(0, 10).map(activity => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
