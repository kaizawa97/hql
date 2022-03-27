import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Footer } from "../components/footer";
import { Flex, Box, Button, Spacer, Container } from "@chakra-ui/react";

export const Signin = () => {
  return (
    <div>
      <Flex bg="White"
        w="100%"
        as="header"
        position="sticky"
        align="center"
        shadow="sm"
        py={4}
        px={8}>
        <Container as={Flex} maxW={'7xl'} align={'center'}>
          <Box>
            <Button as={Link} to="/">
              <img src="../logo.png" alt="HQL" />
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="blue" as={Link} to="/signup">
              Signup
            </Button>
          </Box>
        </Container>
      </Flex>
      <Box p={8} display={{ md: 'flex' }}>

      </Box>
      <Footer />
    </div>
  );
};