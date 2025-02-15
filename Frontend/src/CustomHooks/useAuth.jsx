import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProviters';

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
