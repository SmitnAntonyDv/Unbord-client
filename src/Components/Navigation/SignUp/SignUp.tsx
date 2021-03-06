import React, { useState } from 'react';
import { SignUpData } from '../../../Types/UserTypes';
import { OnChange, OnClick } from '../../../Types/EventListenerTypes';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../Store/User/actions';
export default function SignUp() {
  const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  };
  const [verifyPassword, setVerifyPassword] = useState('');
  const [signUpData, setSignUpData] = useState<SignUpData>(initialState);
  const dispatch = useDispatch();

  const onChangeHandler = (event: OnChange) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const submitHandler = (event: OnClick) => {
    event.preventDefault();
    const { firstName, lastName, userName, email, password } = signUpData;
    if (
      !firstName ||
      !lastName ||
      !userName ||
      !email ||
      !password ||
      !verifyPassword
    ) {
      console.log('Please ensure all fields are filled out');
    } else if (password !== verifyPassword) {
      console.log('Password and password confirmation do not match');
    } else {
      dispatch(signUp(signUpData));
    }
  };

  return (
    <>
      <form>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          required
          placeholder='First Name'
          value={signUpData.firstName}
          onChange={(event) => onChangeHandler(event)}
        />
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          required
          placeholder='Last Name'
          value={signUpData.lastName}
          onChange={(event) => onChangeHandler(event)}
        />
        <label>Username</label>
        <input
          type='text'
          name='userName'
          required
          placeholder='Username'
          value={signUpData.userName}
          onChange={(event) => onChangeHandler(event)}
        />
        <label>Email</label>
        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          value={signUpData.email}
          onChange={(event) => onChangeHandler(event)}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          required
          placeholder='Password'
          value={signUpData.password}
          onChange={(event) => onChangeHandler(event)}
        />
        <label>Password Confirm</label>
        <input
          type='password'
          name='verifyPassword'
          required
          placeholder='Repeat Password'
          value={verifyPassword}
          onChange={(event) => setVerifyPassword(event.target.value.trim())}
        />
      </form>
      <button type='submit' onClick={submitHandler}>
        Submit
      </button>
      <button>X</button>
    </>
  );
}
