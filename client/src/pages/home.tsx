import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex, Box, Container, Heading, Text, HStack, VStack, Grid, Avatar, Textarea, Button, Input
} from "@chakra-ui/react";

import { Header } from '../components/header';
import { Footer } from '../components/footer';
// import { useAuth } from '../hooks/useAuth';
import { User, Post, usePostsData } from '../hooks/usePostsget';

export const Home = () => {
  const auth = true;
  const { loadingGet, loadingPost, loadingError, posts, serverDataGet, serverDataPost } = usePostsData();
  const [text, setText] = useState('');

  useEffect(() => {
    serverDataGet();
  }, []);

  const handleInputChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const inputText = e.currentTarget.value;
    setText(inputText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    serverDataPost(text);
    setText('');
  }

  return (
    <div>
      <Header authState={auth} />
      <Box pt={8} px={4} display={{ md: 'flex' }} justifyContent={'space-between'} alignItems={'start'} maxW={'7xl'} margin={'auto'} >
        <VStack>
          <Box w='220px' height={'220px'} bg='blue.500' rounded={'md'} >
            <Heading as='h3' size='lg' color='white' textAlign='center'>
              Short Profile
            </Heading>
          </Box>
          <Box w='220px' height={'220px'} bg='blue.500' rounded={'md'} >
            <Heading as='h3' size='lg' color='white' textAlign='center'>
              Tips
            </Heading>
          </Box>
        </VStack>
        <Box as={Container} flexDir={'column'} align={'center'} maxW={'xl'} rounded={'md'}>
          <Box as='form' bg={'white'} shadow='md' rounded={'md'} mb={8} onSubmit={handleSubmit}>
            <Textarea
              id="textarea"
              onChange={handleInputChange}
              value={text}
              placeholder='投稿を入力してください'
              size='md'
            />
            <Button mt={4} mb={2} colorScheme='teal' variant='solid'
              isLoading={loadingPost} type="submit">投稿</Button>
          </Box>
          {posts.map(post => (
            <Box bg='white' shadow='md' p={4} mb={4} rounded='md' key={post.id} >
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
        <VStack>
          <Box w='220px' height={'220px'} bg='blue.500' rounded={'md'} >
            <Heading as='h3' size='lg' color='white' textAlign='center'>
              News??
            </Heading>
          </Box>
        </VStack>
      </Box>
    </div>
  );
}