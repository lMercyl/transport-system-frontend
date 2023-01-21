import { Flex, Box, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo_busport.svg';
import { User, PlusCircle, Home, Calendar, ArrowLeft } from '@styled-icons/heroicons-outline';
import styled from 'styled-components';

const NavUserIcon = styled(User)`
  color: rgba(0, 0, 0, 0.35);
  width: 24px;
  height: 24px;
`;

const NavPlusCircleIcon = styled(PlusCircle)`
  color: rgba(0, 0, 0, 0.35);
  width: 24px;
  height: 24px;
`;

const NavHomeIcon = styled(Home)`
  color: rgba(0, 0, 0, 0.35);
  width: 24px;
  height: 24px;
`;

const NavCalendarIcon = styled(Calendar)`
  color: rgba(0, 0, 0, 0.35);
  width: 24px;
  height: 24px;
`;

const Navbar = () => {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      p="35px"
      bg="#ffffff">
      <Box>
        <Image src={logo} alt="Logo Busport" />
      </Box>
      <Grid gap="25px">
        <Link href="/">
          <Box
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1);"
            borderRadius="15px">
            <NavUserIcon />
          </Box>
        </Link>
        <Link href="/">
          <Box
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1);"
            borderRadius="15px">
            <NavPlusCircleIcon />
          </Box>
        </Link>
        <Link href="/">
          <Box
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1);"
            borderRadius="15px">
            <NavHomeIcon />
          </Box>
        </Link>
        <Link href="/">
          <Box
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1);"
            borderRadius="15px">
            <NavCalendarIcon />
          </Box>
        </Link>
      </Grid>
      <Link href="/">
        <Box
          p="12px"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="rgba(0, 0, 0, 0.1);"
          borderRadius="15px"></Box>
      </Link>
    </Flex>
  );
};

export default Navbar;
