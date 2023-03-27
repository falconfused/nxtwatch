import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginRoute from './components/LoginRoute';
import authStore from './stores/AuthStore/AuthStore';
import videoStore from './stores/VideoStore/VideoStore';
import themeStore from './stores/ThemeStore/ThemeStore';
import Home from './components/Home/Home';
import Cookies from 'js-cookie';

const App = () => {

  

  return (
    <BrowserRouter>
      <Provider authStore={authStore} themeStore={themeStore} videoStore={videoStore}>
        <Routes>

          <Route path='/' element={<LoginRoute />}
          />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
