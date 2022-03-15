import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';

export const Home = () => {
  return (
    <div>
      <h1>Join NCN Group today.</h1>
    </div>
  );
}