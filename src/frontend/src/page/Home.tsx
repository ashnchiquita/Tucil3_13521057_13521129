import { Box, Button, Heading, Flex, Link } from '@chakra-ui/react';
import { PageTemplate } from '../layout/Template';

export const Home = () => (
  <PageTemplate title = "Home">
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      position="relative"
    >
      <Box pt={10}>
        <Heading as='h3' size='lg' noOfLines={1}
            // fontWeight="400"
            // fontSize={{
            //     base: '2em',
            //     md: '4em'
            // }}
            color="#FFFFFF"
            lineHeight="92%"
            textAlign="center"
            pr="50px"
            pl="50px"
            >
            Welcome to
        </Heading>
        <Heading as='h1' size='4xl' noOfLines={1}
        //   fontWeight="400"
        //   fontSize={{
        //     base: '2em',
        //     md: '4em'
        //   }}
          color="#FFFFFF"
          lineHeight="92%"
          mt='0.3em'
          textAlign="center"
          pr="50px"
          pl="50px"
        >
          RouteFinder
        </Heading>
      </Box>
      <Link href="/choose/" style={{ textDecoration: 'none' }}>
        <Button
          background="#8669FA"
          borderRadius="50px"
          mt='2em'
          p='1.2em'
          lineHeight="92%"
          // fontFamily="Subheading"
        //   mt={{
        //     base: 5,
        //     md: 8
        //   }}
        //   p={{
        //     md: '1em'
        //   }}
        //   fontSize={{
        //     base: '1em',
        //     md: '1.5em'
        //   }}
            fontSize='1.5em'
            _hover={{
              transform: 'scale(1.1)'
            }}
        >
          Get Started
        </Button>
      </Link>
    </Flex>
  </PageTemplate>
);
