import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString:any = localStorage.getItem('accessToken');
    const userToken:any = JSON.parse(tokenString);
    return userToken?.accessToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken =(userToken:any)=> {
    localStorage.setItem('accessToken', JSON.stringify(userToken));
    setToken(userToken.accessToken);
  };

  return {
    setToken: saveToken,
    token
  }
}