import { User } from '../Types/UserTypes';

export type ReduxStore = {
  user: User;
};

export type GetState = () => ReduxStore;
