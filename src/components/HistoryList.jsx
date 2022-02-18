import React, { useContext } from 'react';
import {
  Box, VStack, StackDivider,
} from '@chakra-ui/react';
import { WeatherContext } from '../utilities/WeatherContext';
import HistoryItem from './HistoryItem';
import ErrorMsg from './ErrorMsg';

function HistoryList() {
  const appContext = useContext(WeatherContext);
  const {
    history,
  } = appContext;

  let HistoryItems;
  if (history.length > 0) {
    HistoryItems = (
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
    HistoryItems = <ErrorMsg msg="No Records" bg="gray.300" color="gray.600" />;
  }
  return (
    <Box>
      { HistoryItems }
    </Box>
  );
}

export default HistoryList;
