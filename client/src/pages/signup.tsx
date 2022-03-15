import React, { useState, useRef, useEffect } from "react";
import { Header } from '../components/header';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

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
      <Header />
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
    </div>
  );
};