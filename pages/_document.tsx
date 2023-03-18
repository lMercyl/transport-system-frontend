import { Html, Head, Main, NextScript } from 'next/document';
import { Box } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ background: '#0078FF' }}>
        <Box>
          <Main />
          <NextScript />
        </Box>
      </body>
    </Html>
  );
}
