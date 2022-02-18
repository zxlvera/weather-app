import { Box, Container } from '@chakra-ui/react';
import { WeatherProvider } from './utilities/WeatherContext';
import Header from './components/Header';
import SearchCard from './components/SearchCard';
import WeatherCard from './components/WeatherCard';
import HistoryList from './components/HistoryList';

function App() {
  return (
    <Box className="App" bg="gray.300">
      <WeatherProvider>
        <Container maxW="container.xl" p="4">
          <Header text="Today's Weather" />
          <SearchCard />
          <Box pt="4"><WeatherCard /></Box>
          <Header text="Search History" />
          <HistoryList />
        </Container>
      </WeatherProvider>
    </Box>
  );
}

export default App;
