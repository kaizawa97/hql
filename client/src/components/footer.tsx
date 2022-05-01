import React from "react";
import { Link } from 'react-router-dom';
import { Container, Stack, Text, Button } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <div>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Button as={Link} to="/">Home</Button>
          <Button as={Link} to="/">About</Button>
          <Button as={Link} to="/">C</Button>
          <Button as={Link} to="/">D</Button>
        </Stack>
        <Text>© 2022 kaizawa97. All rights reserved</Text>
      </Container>
    </div>
  );
}