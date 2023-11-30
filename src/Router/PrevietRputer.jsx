import React, { useContext } from 'react';
import { AuthContaxt } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrevietRputer = ({children}) => {
    const {user, lodeing } = useContext(AuthContaxt)
    const location = useLocation()
    console.log(location);
    if(lodeing){
       return  <div>loding ...</div>
    }
    if(user){
     return children
    }
    return  <Navigate to='/login' replace state={{from: location}}></Navigate>
    
};

export default PrevietRputer;