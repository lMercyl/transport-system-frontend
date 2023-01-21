import { Html, Head, Main, NextScript } from 'next/document';
import { Box } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Box bg="#5081FF">
          <Main />
          <NextScript />
        </Box>
      </body>
    </Html>
  );
}
