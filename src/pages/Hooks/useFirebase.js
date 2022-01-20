import React from 'react';
import initializeAuthentication from '../../firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router';

const useFirebase = () => {
   initializeAuthentication();
   const [user, setUser] = useState({});
let history = useHistory();



const auth = getAuth();
const googleProvider = new GoogleAuthProvider()
   const signInUsingGoogle = () => {
signInWithPopup(auth, googleProvider)
   .then((result) => {
   history.push("/home")
console.log(result.user);
})
.catch((error) => {
console.log(error.message);
})
   }
   const logOut = () => {
   signOut(auth)
   .then(() => {
   setUser({});
   })
.catch((error) => {
console.log(error.message)
});
}

   const registerWithEmailPassword = (name, email, password) => {
// console.log('registration', name, email, password);
createUserWithEmailAndPassword(auth, email, password)
.then((result) => {
console.log(result.user);
setUserName(name);
})
.catch((error) => {
console.log(error.message);
});
}
const setUserName = (name) => {
updateProfile(auth.currentUser, { displayName: name })
.then(() => {
// Profile updated!
}).catch((error) => {



});
   }
   
   const loginWithEmailPassword = (email, password) => {
// console.log('Login', email, password);
signInWithEmailAndPassword(auth, email, password)
.then((result) => {
const user = result.user;
console.log(user);
// setError('');
})
.catch((error) => {
// setError(error.message);
});
}

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
      setUser(user)
      }
      })
   }, [])
   return {
      user,
      signInUsingGoogle,
      logOut,
      registerWithEmailPassword,
      loginWithEmailPassword
   }
};

export default useFirebase;