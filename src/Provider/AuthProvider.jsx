import React, { createContext, useState } from 'react';

import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) 
    const Auth = getAuth(app)
    const authInfo = {
       user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;