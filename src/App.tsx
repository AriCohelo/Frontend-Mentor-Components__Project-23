import {
  Box,
  Button,
  Text,
  Center,
  Flex,
  Input,
  Grid,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import IconCalculator from './assets/icon-calculator.svg';
// import IlustratonEmpty from './assets/illustration-empty.svg';
import { MdCalculate } from 'react-icons/md';

function App() {
  return (
    <>
      <Center height="100vh">
        <Grid
          width={{ base: '375px', md: '1008px' }}
          height={{ base: '1153px', md: '605px' }}
          bg="neutral.white"
          borderRadius="24px"
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        >
          <Box p="2.5rem">
            <Flex justifyContent="space-between">
              <Text> MortGage Calculartor</Text>
              <Text>Clear all</Text>
            </Flex>
            <Text>Mortgage Amount</Text>
            <Input />
            <Flex gap="1.5rem">
              <Box>
                <Text>Mortgage Term</Text>
                <Input></Input>
              </Box>
              <Box>
                <Text>Interest Rate</Text>
                <Input></Input>
              </Box>
            </Flex>
            <Text>Mortgage Type</Text>
            <RadioGroup>
              <Stack direction="column">
                <Radio value="repayment">Repayment</Radio>
                <Radio value="interest-rate">Interest Rate</Radio>
              </Stack>
            </RadioGroup>
            <Button
              leftIcon={<img src={IconCalculator} alt="Calculate Icon" />}
              bg="primary.lime"
              borderRadius="full"
              p="1.5rem"
            >
              Calculate Repayments
            </Button>
          </Box>

          <Box
            width={{ base: '375px', md: '504px' }}
            height={{ base: '413px', md: '605px' }}
            bg="neutral.slate900"
            borderRadius={{ base: 0, md: '0 24px 24px 80px' }}
            mt="aut0"
          ></Box>
        </Grid>
      </Center>
    </>
  );
}

export default App;
