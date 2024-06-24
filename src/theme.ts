import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'sans-serif',
        background: '#003C43',
      },
    },
  },
});

export default theme;