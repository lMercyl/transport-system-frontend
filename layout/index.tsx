import Navbar from './Navbar';
import { Flex, Box, Container } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex>
      <Box position="fixed">
        <aside>
          <Navbar />
        </aside>
      </Box>
      <Flex height="100%" width="100%" justifyContent="center">
        <Container maxW="container.lg">{children}</Container>
      </Flex>
    </Flex>
  );
};

export default Layout;
