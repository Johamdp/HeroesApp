import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import 'animate.css';
import { ChakraProvider } from '@chakra-ui/react';

export const HeroesApp = () => {
  return (
   <>  
      <ChakraProvider> 
        <AuthProvider>
          <AppRouter />
        </AuthProvider>   
      </ChakraProvider>   
   </>
  )
}