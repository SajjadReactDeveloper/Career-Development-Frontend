import React, {useEffect} from 'react';
import { BrowserRouter  } from 'react-router-dom';
import axios from 'axios';
import User from './components/user/User';
import Admin from './components/admin/Admin';
import { useDispatch, useSelector } from 'react-redux';
import { dispatcLogin, fetchUser, dispatchGetUser } from './redux/actions/authAction';
import Login from './components/user/Screens/Login';
import Employer from './components/admin/Employer'
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const auth = useSelector(state => state.authReducer);
  const {isLogged, isAdmin, user} = auth;

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refreshToken', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatcLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])
  return (
    <ProSidebarProvider>
    <div className="App">
      {isAdmin ? <Admin />: user.role === 2 ? <Employer /> : <User />}
    </div>
    </ProSidebarProvider>
  )
}
