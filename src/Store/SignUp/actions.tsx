import axios from 'axios';
import { Dispatch } from 'redux';
import { SignUpData } from '../../Types/UserTypes';
import { GetState } from '../../Types/storeTypes';
import { DB_URL } from '../../Config/constant';

export const signUpSuccess = () => {};

export function signUp(signUpData: SignUpData) {
  return async function (dispatch: Dispatch, getState: GetState) {
    try {
      const res = await axios.get(`${DB_URL}`);
      console.log('what is my data', res.data);
    } catch (e) {
      console.log('error', e.message);
    }
  };
}
