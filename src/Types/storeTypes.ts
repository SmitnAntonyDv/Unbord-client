import { SignUpData } from '../Types/UserTypes';

export type ReduxStore = {
  signUp: SignUpData;
};

export type GetState = () => ReduxStore;
