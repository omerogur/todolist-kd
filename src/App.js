import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import List from './List';
import Home from './Home';
import AboutsUs from './AboutsUs';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import AuthProvider from './context/AuthContext'
import SettingContext from './context/SettingContext'
import Layout from './components/Layout';



function App() {



  return (
    <>
      <AuthProvider>
        <SettingContext>
          <Layout>
            <Routes>
              <Route path='' element={<Home />} />
              <Route path='/list' element={<List />} />
              <Route path='/about' element={<AboutsUs />} />
            </Routes>
          </Layout>
        </SettingContext>
      </AuthProvider>
    </>
  );
}

export default App;
