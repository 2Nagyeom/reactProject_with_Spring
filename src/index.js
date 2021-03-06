import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './signs/login';
import SignUp from './signs/signup';
import Main from './main';
import Board from './board';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { RecoilRoot, useResetRecoilState } from 'recoil';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root')
);