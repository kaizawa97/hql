import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex, Box, Container, Heading, Spacer, Text, HStack, VStack, Grid, Avatar, Wrap, WrapItem
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { User, Post, usePostsGetData } from '../hooks/usePostsget';

export const Home = () => {
  const auth = true;
  const { loading, loadingError, posts, serverDataGet, } = usePostsGetData();

  useEffect(() => {
    serverDataGet();
  }, []);

  return (
    <div>
      <Header authState={auth} />
      <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'7xl'}  margin={'auto'} >
        <VStack>
          <Box w='220px' bg='blue.500' >
            <Heading as='h3' size='lg' color='white' textAlign='center'>
              Hello
            </Heading>
          </Box>
        </VStack>
        <Box as={Container} flexDir={'column'} align={'center'} maxW={'xl'}>
          <Heading size='sm' color='gray.700'>
            {/* {comment.user.displayName} */}
            Test Page
          </Heading>
          {posts.map(post => (
            <Box bg='white' shadow='md' p={4} mb={4} rounded='md'>
              <HStack mb={2}>
                <Avatar
                  name="John Doe"
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <Heading size='sm' color='gray.700'>
                  {/* {comment.user.displayName} */}
                  Test Page
                </Heading>
              </HStack>
              <Text>{post.body}</Text>
              <Text color='gray.400' mt={1} fontSize='sm' align='end'>
                {post.createdAt.toLocaleString()}
              </Text>
            </Box>
          ))}
        </Box>
        <HStack>
          <Box w='220px' bg='blue.500' >
            <Heading as='h3' size='lg' color='white' textAlign='center'>
              Hello
            </Heading>
          </Box>
        </HStack>
      </Box>
    </div>
  );
}