import { Box, Container } from '@chakra-ui/react';
import { WeatherProvider } from './utilities/WeatherContext';
import Header from './components/Header';
import SearchLocation from './components/SearchLocation';
import SearchResult from './components/SearchResult';
import SearchHistoryList from './components/SearchHistoryList';

function App() {
  return (
    <Box className="App" bg="gray.300">
      <WeatherProvider>
        <Container maxW="container.xl" p="4">
          <Header text="Today's Weather" />
          <SearchLocation />
          <Box pt="4"><SearchResult /></Box>
          <Header text="Search History" />
          <SearchHistoryList />
        </Container>
      </WeatherProvider>
    </Box>
  );
}

export default App;
