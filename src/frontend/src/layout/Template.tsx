import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Box, VStack } from '@chakra-ui/react';
import { NavBar } from '../component/NavBar';

interface Props {
  children: React.ReactNode;
  title: string;
}

const pageAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

export const PageTemplate = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = `${title} - RouteFinder`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <motion.div
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3 }}
      >
        <Box minH="100vh">{children}</Box>
      </motion.div>
    </>
  );
};

export const PageTemplate2 = ({ children, title }: Props) => {
  useEffect(() => {
    document.title = `${title} - RouteFinder`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <VStack spacing={0} >
        <NavBar />
        <motion.div
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.3 }}
        >
        <Box minH="100vh" w="100%">{children}</Box>
        </motion.div>
      </VStack>
    </>
  );
};
