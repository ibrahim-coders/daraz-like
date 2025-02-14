import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../Authentication/Firebase/firebase.init';
// import Spinner from '../components/Spinner';

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  console.log(user);
  const UserRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login

  const googleLoging = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Update Profile
  const updateUserProfiles = (name, photo) => {
    const user = auth.currentUser;
    if (user) {
      return updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
    } else {
      return Promise.reject(new Error('No user is currently logged in'));
    }
  };

  //signOut
  const signOuts = () => {
    setLoading(true);
    return signOut(auth);
  };
  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center content-center h-screen">
  //       <Spinner />
  //     </div>
  //   );
  // }
  const authInfo = {
    user,
    loading,
    UserRegister,
    loginUser,
    googleLoging,
    signOuts,
    updateUserProfiles,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProviders;
