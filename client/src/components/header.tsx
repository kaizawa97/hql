import React from "react";
import { Link } from 'react-router-dom';
import { Flex, Box, Button, ButtonGroup, Spacer } from "@chakra-ui/react";

type Props = {
  authState?: boolean
}

export const Header = ({ authState = false }: Props) => {
  if (authState == true) {
    return (
      <div>
        <Flex bg="White" w="100%">
          <Flex
            as="header"
            position="fixed"
            width="full"
            shadow="sm"
            py={4}
            px={8}
          >
            <Box>
              <Button as={Link} to="/">
                <img src="../logo.png" alt="HQL" />
              </Button>
            </Box>
            <Spacer />
            <Box>
              <ButtonGroup spacing={4}>
                <Button colorScheme="blue">
                  Signin
                </Button>
                <Button colorScheme="blue">
                  Signup
                </Button>
              </ButtonGroup>
            </Box>
          </Flex>
        </Flex>
      </div>
    )
  }
  else {
    return (
      <div>
        <Flex bg="White" w="100%">
          <Flex
            as="header"
            position="fixed"
            width="full"
            shadow="sm"
            py={4}
            px={8}
          >
            <Box>
              <Button as={Link} to="/">
                <img src="../logo.png" alt="HQL" />
              </Button>
            </Box>
            <Spacer />
            <Box>
              <ButtonGroup spacing={4}>
                <Button colorScheme="blue">
                  Signin
                </Button>
                <Button colorScheme="blue">
                  Signup
                </Button>
              </ButtonGroup>
            </Box>
          </Flex>
        </Flex>
      </div>
    )
  }
};