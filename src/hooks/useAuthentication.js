import { db } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export  const useAuthentication = () => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);

   // cleanup
   // deal with memory leak
   const [cancelled , setCancelled ] = useState(false);
  
   // auth invocado 
   const auth = getAuth();
   
   function checkIfIsCancelled() {
     if (cancelled) {
        return;
     }
   }

 
   // criando o dados do usuario

const createUser = async ( data ) => {
   checkIfIsCancelled(); 

   // fazendo o cadastro entao vai ter um loading...
    setLoading(true);  
    setError(null);       
   try {
 
    const { user } = createUserWithEmailAndPassword(
        auth, 
        data.email,
        data.password
    );
 
    await updateProfile(user, {
        displayName: data.displayName
    })

    return user
    
   } catch (error) {
     
    console.log(error.message);
    console.log(typeof error.message);
 
     
   let systemErrorMessage; 

   
   if (error.message.includes("Password")) {
    systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
  } else if (error.message.includes("auth/email-already-in-use")) {
    systemErrorMessage = "E-mail já cadastrado.";
  } else {
    systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
  }

    setError(systemErrorMessage)
     
   }
 
   // aqui acaba o loading do processo...
  
   setLoading(false);
    
   };

   useEffect(() => {
     return () => setCancelled(true);
   },[]);

   return { auth, createUser, error , loading }
    
};
