import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex, Box, Container, Heading, Spacer, HStack, VStack, Grid
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';

export const NotSigned = () => {
  const auth = false;
  return (
    <div>
      <Header authState={auth} />
      <Box p={8} display={{ md: 'flex' }}>
        Test Site
      </Box>
      <Footer />
    </div>
  );
}