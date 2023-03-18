import { Flex, Box, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../public/logo_busport.svg';
import Link from 'next/link';
import {
  HiOutlineUser,
  HiOutlinePlusCircle,
  HiOutlineLogout,
  HiOutlineViewGrid,
  HiOutlineCalendar,
} from 'react-icons/hi';
import styles from './Navbar.module.scss';

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
        <Link href="/dashboard/profile">
          <Box
            className={styles.navbarButton}
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1)"
            borderRadius="15px">
            <HiOutlineUser color="#A6A6A6" />
          </Box>
        </Link>
        <Link href="/dashboard/orders/new">
          <Box
            className={styles.navbarButton}
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1)"
            borderRadius="15px">
            <HiOutlinePlusCircle color="#A6A6A6" />
          </Box>
        </Link>
        <Link href="/dashboard">
          <Box
            className={styles.navbarButton}
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1)"
            borderRadius="15px">
            <HiOutlineViewGrid color="#A6A6A6" />
          </Box>
        </Link>
        <Link href="/dashboard/orders">
          <Box
            className={styles.navbarButton}
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(0, 0, 0, 0.1)"
            borderRadius="15px">
            <HiOutlineCalendar color="#A6A6A6" />
          </Box>
        </Link>
      </Grid>
      <Link href="/">
        <Box
          className={styles.navbarButton}
          p="12px"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="rgba(0, 0, 0, 0.1)"
          borderRadius="15px">
          <HiOutlineLogout color="#A6A6A6" />
        </Box>
      </Link>
    </Flex>
  );
};

export default Navbar;
