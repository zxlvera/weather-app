import React, { useContext } from 'react';
import {
  Heading, Box, Flex, Spacer, Text, Image,
} from '@chakra-ui/react';
import { WeatherContext } from '../utilities/WeatherContext';
import ErrorMsg from './ErrorMsg';

function WeatherCard() {
  const appContext = useContext(WeatherContext);
  const {
    currWeather, error, errorMsg,
  } = appContext;

  let WeatherRes;
  if (currWeather.length > 0) {
    const imgSrc = `http://openweathermap.org/img/wn/${currWeather[0].weather[0].icon}@2x.png`;
    WeatherRes = (
      <Box bg="gray.500" p="4" color="gray.100" borderRadius={8}>
        {currWeather.map((data, id) => (
          <Box key={id}>
            <Box>
              {data.name}
              ,
              {' '}
              {data.sys.country}
            </Box>
            <Flex>
              <Heading pt="4">{data.weather[0].main}</Heading>
              <Image src={imgSrc} />
            </Flex>
            <Flex>
              <Box><Text>Description:</Text></Box>
              <Spacer />
              <Box>{data.weather[0].description}</Box>
            </Flex>
            <Flex>
              <Box>Temperature:</Box>
              <Spacer />
              <Box>
                {data.main.temp_min}
                °C
                {' '}
                ~
                {' '}
                {data.main.temp_max}
                °C
              </Box>
            </Flex>
            <Flex>
              <Box><Text>Humidity</Text></Box>
              <Spacer />
              <Box>
                {data.main.humidity}
                %
              </Box>
            </Flex>
            <Flex>
              <Box><Text>Time:</Text></Box>
              <Spacer />
              <Box>{new Date().toLocaleTimeString()}</Box>
            </Flex>
          </Box>
        ))}
      </Box>
    );
  } if (error) {
    WeatherRes = <ErrorMsg msg={errorMsg} bg="red.800" color="gray.200" />;
  }

  return (<div>{WeatherRes}</div>);
}

export default WeatherCard;
