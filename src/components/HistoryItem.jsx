import React, { useContext } from 'react';
import {
  Box, Flex, Spacer, Text, Square,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { WeatherContext } from '../utilities/WeatherContext';

function HistoryItem({ item, id }) {
  const appContext = useContext(WeatherContext);
  const {
    search,
    searchLocation,
    deleteLocation,
  } = appContext;

  function searchAgain() {
    const v = {
      location: `${item[0]},${item[1]}`,
    };
    searchLocation(!search, v);
  }

  function deleteID(id) {
    deleteLocation(id);
  }
  return (
    <Box>
      <Flex color="black">
        <Box p="2">
          <Text>
            {item[0]}
            ,
            {' '}
            {item[1]}
          </Text>
        </Box>
        <Spacer />
        <Box p="2">
          <Flex>
            <Text>{item[2]}</Text>
            <Square borderRadius={8} ml="2" size="48px" bg="blue.500" color="gray.300" onClick={() => searchAgain()}>
              <SearchIcon />
            </Square>
            <Square borderRadius={8} ml="2" size="48px" bg="gray.500" color="gray.300" onClick={() => deleteID(id)}>
              <CloseIcon />
            </Square>
          </Flex>
        </Box>
      </Flex>
    </Box>

  );
}

export default HistoryItem;
