import React, { useContext, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import {
  Flex,
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { WeatherContext } from '../utilities/WeatherContext';

function SearchCard() {
  const appContext = useContext(WeatherContext);
  const { search, searchLocation } = appContext;

  function getLocation(s, values) {
    searchLocation(!s, values);
  }

  return (
    <Box>
      <Formik
        initialValues={{ location: '' }}
        onSubmit={(values, actions) => {
          actions.setSubmitting();
          getLocation(!search, values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <Form>
            <Flex>
              <Box flexGrow="1">
                <Field name="location">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.location && form.touched.location}>
                      <Input {...field} id="location" placeholder="Enter any city or country" size="lg" width="100%" variant="filled" />
                      <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Box ml="2">
                <Flex>
                  <Box>
                    <Button
                      colorScheme="blue"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Box>
                  <Box ml="2">
                    <Button
                      type="reset"
                      colorScheme="red"
                    >
                      Clear
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default SearchCard;
