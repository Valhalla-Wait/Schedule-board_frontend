import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/auth" element={<AuthPage />} />
  </Routes>
);

export default App;
