import React, { useEffect } from "react";
import { Link as NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Footer } from "../components/footer";
import { useForm } from "react-hook-form";
import {
  Flex, Box, Button, Spacer, Container, Heading, Text,
  Stack, Input, Checkbox, Link, useColorModeValue,
  FormErrorMessage, FormControl, FormLabel, Alert, AlertIcon
} from "@chakra-ui/react";
import { useSignin } from "../hooks/useSignin";
import { useAuthCheck } from "../hooks/useAuthCheck";

export const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { loading, signinError, handleSignin } = useSignin();
  const { authenticated, authError, handleAuthCheck } = useAuthCheck();

  const onSubmit = (values: any) => {
    handleSignin(values.email, values.password);
  }

  useEffect(() => {
    handleAuthCheck();
    if (authenticated === true) {
      navigate("/home");
    }
  }, []);

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
            <Button as={NavLink} to="/">
              <img src="../logo.png" alt="HQL" />
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="blue" as={NavLink} to="/signup">
              Signup
            </Button>
          </Box>
        </Container>
      </Flex>
      <Flex
        minH={'82vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Email Login
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4} as='form' onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="email" isInvalid={errors.email ? true : false}>
                <FormLabel htmlFor="email">Email address*</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password ? true : false}>
                <FormLabel htmlFor="password">Password*</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Minimum length should be 8' },
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'} as={NavLink} to="/forgotpassword"> Forgot password?</Link>
                </Stack>
                {signinError ?
                  <Alert status='error'>
                    <AlertIcon />
                    {signinError}
                  </Alert>
                  : null}
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isLoading={loading}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex >
      <Footer />
    </div >
  );
};