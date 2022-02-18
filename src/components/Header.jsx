import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Header({ text }) {
  return (
    <Box borderBottom="1px" pt="4" pb="4" mb="4" color="gray.600">
      <Heading size="lg">{text}</Heading>
    </Box>
  );
}

export default Header;
