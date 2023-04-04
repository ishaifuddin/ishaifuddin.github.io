// Core Import
import React from "react";
import { MantineProvider } from "@mantine/core";
import LandingPage from "../components/Home/LandingPageSx";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function Home() {
  return (
    <MantineProvider
      theme={{ fontFamily: "'Sen', sans-serif" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <LandingPage />
    </MantineProvider>
  );
}

export default Home;
