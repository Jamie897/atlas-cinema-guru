import React from 'react';
import PropTypes from 'prop-types';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

const Register = ({
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
    <div className="register-container">
      <h1 className="auth-header">Create a new account</h1>
      <Input
        icon={faUser}
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
        className="auth-input"
      />
      <Input
        icon={faKey}
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
        className="auth-input"
      />
      <Button
        icon={faPlus}
        label="Sign Up"
        onClick={() => console.log('Button clicked')}
        className="auth-button submit"
        type="submit"
      />
    </div>
  );
};

Register.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

export default Register;
