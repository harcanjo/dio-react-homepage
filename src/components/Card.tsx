import {
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'
import { login } from '../services/login';
import { Header } from './Header/Header';
import Button from './Button/Button';

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <div>
      <ChakraProvider>
        <Header />
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
              <Button onClick={login} >
                Button
              </Button>
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
      <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p>
    </div>
  )
}