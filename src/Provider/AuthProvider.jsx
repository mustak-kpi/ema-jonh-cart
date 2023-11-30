import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.confige';


export const AuthContaxt = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [lodeing, setLodeing] = useState(true);

    const cerateUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

   const singeIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }

   const logeout =() =>{
    return signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser =>{
        setUser(currentuser)
        setLodeing(false)
    })
    return ()=>{
        return unsubscribe
    }
   },[])
   
// const user ={email: 'mustak mhamud'}
   
    const authinfo ={
        user,
        lodeing,
        cerateUser,
        singeIn,
        logeout,

       
    }
    return (
        <AuthContaxt.Provider value={authinfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProvider;