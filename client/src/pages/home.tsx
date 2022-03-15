import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Flex, Box, Button, ButtonGroup, Spacer, Heading } from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';

export const Home = () => {
  const auth = true;
  return (
    <div>
      <Header authState={auth}/>
      <Box mt={"6rem"} mx="auto">
        <Heading as="h1" size="lg" fontWeight="bold">
          Welcome
        </Heading>
      </Box>
    </div>
  );
}