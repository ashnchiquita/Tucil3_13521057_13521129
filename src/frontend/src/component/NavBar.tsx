import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  ScaleFade
} from '@chakra-ui/react';
import Logo from '../asset/teslogo.svg';

export const NavBar = () => (
    <Flex
      w="100%"
      px={{ base: 4, md: 8 }}
      py={4}
      bg="#1A202B"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      position="sticky"
      top="0"
      zIndex="999"
    >
        <Box alignItems="center">
        <ScaleFade initialScale={0.9} delay={0.5} in={true} >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <HStack>
              <Image
                src={Logo}
                draggable="false"
                w="40px"
                objectFit="contain"
                mr={{ base: 0, md: 2 }}
                mb={{ base: 2, md: 0 }}
                _hover={{
                  transform: 'scale(1.25)'
                }}
              />
              <Text
                fontSize="3xl"
                fontWeight= 'bold'
                // fontFamily="Heading"
                color="#FFFFFF"
                _hover={{
                  transform: 'scale(1.1)'
                }}
              >
                RouteFinder
              </Text>
            </HStack>
          </Link>
          </ScaleFade>
      </Box>
      <Box alignItems="center">

            <HStack spacing={8}>
            <ScaleFade initialScale={0.9} delay={0.5} in={true} >
              <Link href="/choose" style={{ textDecoration: 'none' }}>
              <Text
                fontSize="2xl"
                // fontFamily="Heading"
                color="#FFFFFF"
                _hover={{
                  transform: 'scale(1.1)'
                }}
              >
                Get Started
              </Text>
              </Link>
              </ScaleFade>
              <ScaleFade initialScale={0.9} delay={0.5} in={true} >
              <Link href="/" style={{ textDecoration: 'none' }}>
              <Text
                fontSize="2xl"
                // fontFamily="Heading"
                color="#FFFFFF"
                _hover={{
                  transform: 'scale(1.1)'
                }}
              >
                About Us
              </Text>
              </Link>
              </ScaleFade>
            </HStack>

      </Box>
    </ Flex>
);

