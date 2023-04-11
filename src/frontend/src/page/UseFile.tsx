import { ChangeEvent, useState } from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Flex,
    Heading,
    HStack,
    Button,
    Input
  } from "@chakra-ui/react"
  import { PageTemplate } from '../layout/Template';

  import { GraphMatrix } from '../../../backend/class/GraphMatrix'

export const UseFile = () => (
    <div>
        <PageTemplate title="Choose Input">
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      position="relative"
    >
      <Box pt={10}>
        <Heading as='h3' size='lg' noOfLines={1}
          color="#FFFFFF"
          lineHeight="92%"
          textAlign="center"
          pr="50px"
          pl="50px"
        >
          Input
        </Heading>
        <Heading as='h1' size='4xl' noOfLines={1}
          color="#FFFFFF"
          lineHeight="92%"
          mt='0.3em'
          textAlign="center"
          pr="50px"
          pl="50px"
        >
          .txt File!
        </Heading>
      </Box>
      <Box>
        <input type='file'></input>
      </Box>
    </Flex>
  </PageTemplate>
    </div>
);
