import React, { useState } from 'react';
import { SignUpData } from '../../../Types/UserTypes';

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

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  console.log('signupData', signUpData);
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
        <label>Verify your password</label>
        <input
          type='password'
          name='verifyPassword'
          required
          placeholder='Repeat Password'
          value={verifyPassword}
          onChange={(event) => setVerifyPassword(event.target.value)}
        />
      </form>
      <button type='submit'>Submit</button>
      <button>X</button>
    </>
  );
}
