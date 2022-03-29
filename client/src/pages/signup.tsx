import React from "react";
import { Link as HeaderLink } from 'react-router-dom';
import { Footer } from "../components/footer";
import { useForm } from "react-hook-form";
import {
  Flex, Box, Button, Spacer, Container, Heading, Text,
  Stack, Input, Link, useColorModeValue,
  FormErrorMessage, FormControl, FormLabel,
} from "@chakra-ui/react";

export const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        reset();
      }, 3000)
    })
  }

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
            <Button as={HeaderLink} to="/">
              <img src="../logo.png" alt="HQL" />
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="blue" as={HeaderLink} to="/signin">
              Signin
            </Button>
          </Box>
        </Container>
      </Flex>
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign up to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Email Signup
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={10}>
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
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    isLoading={isSubmitting}
                    type="submit"
                  >
                   Submit
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </div>
  );
};