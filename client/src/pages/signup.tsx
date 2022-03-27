import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Footer } from "../components/footer";
import { useForm } from "react-hook-form";
import { FormErrorMessage, FormLabel, FormControl, Input, Button,
  Flex, Box, Spacer, Container } from '@chakra-ui/react'

export const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
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
            <Button as={Link} to="/">
              <img src="../logo.png" alt="HQL" />
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="blue" as={Link} to="/signin">
              Signin
            </Button>
          </Box>
        </Container>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor='name'>First name</FormLabel>
          <Input
            id='name'
            placeholder='name'
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Submit
        </Button>
      </form>
      <Footer />
    </div>
  );
};