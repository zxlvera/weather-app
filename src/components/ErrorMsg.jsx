import React from 'react';
import { Box } from '@chakra-ui/react';

function ErrorMsg({ msg, bg, color}) {
  return (
    <div>
      <Box borderRadius={8} bg={bg} color={color} w="100%" p={4}>
        {msg}
      </Box>
    </div>
  );
}

export default ErrorMsg;
