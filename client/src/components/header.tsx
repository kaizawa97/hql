import React from "react";
import { Link } from 'react-router-dom';
import {
  Flex, Box, Button, ButtonGroup, Spacer, Container, HStack, Input, InputGroup, InputLeftElement,
  Menu, MenuButton, Avatar, MenuList, MenuItem, Icon
} from "@chakra-ui/react";
import { Search2Icon, ChatIcon } from '@chakra-ui/icons';
import { AiOutlineHome } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';

type Props = {
  authState?: boolean
}

export const Header = ({ authState = false }: Props) => {
  if (authState === true) {
    return (
      <div>
        <Flex bg="White"
          w="100%"
          as="header"
          position="relative"
          align="center"
          shadow="sm"
          py={3}
        >
          <Container as={Flex} maxW={'7xl'} alignItems={'center'} justifyContent={'space-evenly'} width={'100%'}>
            <HStack>
              <Box>
                <Button as={Link} to="/">
                  {/* <img src="../logo.png" alt="HQL" /> */}
                  HQL
                </Button>
              </Box>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<Search2Icon />} />
                <Input type={'search'} placeholder="Search" variant="filled" size="md" />
              </InputGroup>
            </HStack>
            <Spacer />
            <HStack spacing={6}>
              <ButtonGroup spacing={4}>
                <Box>
                  <Button as={Link} to={"/home"} aria-label='Home Button' leftIcon={<Icon as={AiOutlineHome}/>} >
                    Home
                  </Button>
                </Box>
                <Button as={Link} to={"/chat"} aria-label='Home Button' leftIcon={<ChatIcon />} >
                  Chat
                </Button>
                <Button as={Link} to={"/notification"} aria-label='Home Button' leftIcon={<Icon as={GrNotification}/>}>
                  Notification
                </Button>
              </ButtonGroup>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    name="John Doe"
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/profile">Profile</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Container>
        </Flex>
      </div>
    )
  }
  else {
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
              <ButtonGroup spacing={4}>
                <Button colorScheme="blue" as={Link} to="/signin">
                  Signin
                </Button>
                <Button colorScheme="blue" as={Link} to="/signup">
                  Signup
                </Button>
              </ButtonGroup>
            </Box>
          </Container>
        </Flex>
      </div>
    )
  }
};