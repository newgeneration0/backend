import React, { createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

function AutheProvider({children}) {

    const getToken = () => {
        let token = localStorage.getItem('token');
        if(!token) return null;
        return token
    }

    const getRole = ()=>{
        let token = getToken();
        // console.log(token)
        if(!token){
            return null;
        }
        let decodedToken = jwtDecode(token);
        console.log(decodedToken)
        return decodedToken.role;
        // console.log(decodedToken)
    }
    // const [auth, setAuth] = useState(+localStorage.getItem('auth'));
    const [auth, setAuth] = useState(getToken() ? true : false);
    const [role, setRole] = useState(getRole());
    // console.log(role)
    // const [role, setRole] = useState(localStorage.getItem(('role')))
    // const [auth, setAuth] = useState(false);


  return (
   <AuthContext.Provider value={{auth, setAuth, role, setRole}}>
      {children}
   </AuthContext.Provider>
  )
}

export default AutheProvider