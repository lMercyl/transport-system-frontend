import Navbar from './Navbar';
import { Flex } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex>
      <aside>
        <Navbar />
      </aside>
      <main>{children}</main>
    </Flex>
  );
};

export default Layout;
