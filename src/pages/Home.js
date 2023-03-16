// Core Import
import React from 'react';
import { MantineProvider } from '@mantine/core';
import './shopexLanding.css'
import NavbarSx from '../components/Home/NavbarSx';
import LandingPage from '../components/Home/LandingPageSx';
import Footerx from '../components/Home/FooterSx';
import {  BrowserRouter, BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function Home() {

    return (
      <MantineProvider theme={{ fontFamily: "'Sen', sans-serif" }} withGlobalStyles withNormalizeCSS>
          <NavbarSx />
          <LandingPage />
          <Footerx/>
      </MantineProvider> 
    )
}

export default Home