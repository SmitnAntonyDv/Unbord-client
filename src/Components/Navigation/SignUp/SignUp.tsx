/*input field items:
- first Name
- last Name
- username [unique constrain - BE]
- Email [unique constrain - BE]
- Password 
- verify password

*/

import React from 'react';
import { SignUpData } from '../../../Types/UserTypes';

export default function SignUp() {
  return (
    <>
      <form>
        <label>First Name</label>
        <input type='text' required placeholder='First Name' />
        <label>Last Name</label>
        <input type='text' required placeholder='Last Name' />
        <label>Username</label>
        <input type='text' required placeholder='Username' />
        <label>Email</label>
        <input type='email' required placeholder='Email' />
        <label>Password</label>
        <input type='password' required placeholder='Password' />
        <label>Verify your password</label>
        <input type='password' required placeholder='Repeat Password' />
      </form>
    </>
  );
}
