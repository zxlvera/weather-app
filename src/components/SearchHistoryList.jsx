import React, { useContext } from 'react';
import {
  Box, VStack, StackDivider
} from '@chakra-ui/react';
import { WeatherContext } from '../utilities/WeatherContext';
import HistoryItem from './HistoryItem';
import ErrorMsg from './ErrorMsg';

function SearchHistoryList() {
  const appContext = useContext(WeatherContext);
  const {
    history,
  } = appContext;

  let HistoryList;
  if (history.length > 0) {
    HistoryList = (
      <VStack
        divider={<StackDivider borderColor="gray.800" />}
        spacing={4}
        align="stretch"
      >
        {' '}
        {history.map((item, id) => (
          <HistoryItem key={id} item={item} id={id} />
        ))}
      </VStack>
    );
  } else {
    HistoryList = <ErrorMsg msg="No Records" bg="gray.300" color="gray.600"/>;
  }
  return (
    <Box>
      { HistoryList }
    </Box>
  );
}

export default SearchHistoryList;
