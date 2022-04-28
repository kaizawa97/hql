import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex, Box, Container, Heading, Spacer, HStack, VStack, Grid
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { usePostsGetData } from '../hooks/usePostsget';

export const Home = () => {
  const auth = true;
  const { loading, loadingError, posts, serverDataGet } = usePostsGetData();

  useEffect(() => {
    serverDataGet();
  }, []);

  return (
    <div>
      <Header authState={auth} />
      <Box p={8} display={{ md: 'flex' }}>
        <Box as={Container} maxW={'7xl'} align={'center'} >
          <Flex>
            <Box w='180px' bg='blue.500' >
              <Heading as='h3' size='lg' color='white' textAlign='center'>
                Hello
              </Heading>
            </Box>
            <Spacer />
            {posts.map(post => (
              <Box w='200px' h='10' bg='blue.500' >
                {/* {post} */}
              </Box>
            ))}
            <Spacer />
            <Box w='180px' bg='blue.500' />
          </Flex>
        </Box>
      </Box>
    </div>
  );
}