import Maps from '../asset/maps.svg';
import Txt from '../asset/txt.svg';
import { Box, Image, Text, Card, CardBody, Heading, Flex, Link, Stack, VStack } from '@chakra-ui/react';
import { PageTemplate } from '../layout/Template';

export const ChooseInput = () => (
    <PageTemplate title = "Choose Input">
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
            Choose your
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
          Input Type!
        </Heading>
      </Box>
      
      <VStack mt = '3em' spacing={5}>
        <Link href="/choose/file" style={{ textDecoration: 'none' }}>
          <Card
            direction='row'
            overflow='hidden'
            variant='outlined'
            bg="#5F45C6"
            maxW='sm'
            borderRadius='30px'
            >
            <Image
              objectFit='cover'
              maxW='30%'
              src={Txt}
            />

          <Stack>
            <CardBody>
              <Heading size='lg' color = 'white'>Text File</Heading>

              <Text color = 'white'>
                Lorem ipsum dolor sit amet, anjay anjay anjay
              </Text>
            </CardBody>

          </Stack>
        </Card>
      </Link>
      <Link href="/choose/maps" style={{ textDecoration: 'none' }}>
          <Card
            direction='row'
            overflow='hidden'
            variant='outlined'
            bg="#5F45C6"
            maxW='sm'
            borderRadius='30px'
            >
            <Image
              objectFit='cover'
              maxW='30%'
              src={Maps}
            />

          <Stack>
            <CardBody>
              <Heading size='lg' color = 'white'>Maps</Heading>

              <Text color = 'white'>
                Lorem ipsum dolor sit amet, anjay anjay anjay
              </Text>
            </CardBody>

          </Stack>
        </Card>
      </Link>
      </VStack>

    </Flex>
  </PageTemplate>
);
