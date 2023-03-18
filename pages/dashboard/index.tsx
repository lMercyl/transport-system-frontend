import Layout from '../../layout';
import { Flex, Grid, Text, Box } from '@chakra-ui/react';
import { HiOutlineBell, HiOutlineCalendar } from 'react-icons/hi';
import styles from './Dashboard.module.scss';

const Home = () => {
  return (
    <Layout>
      <Flex paddingY="35px" justifyContent="space-between" alignItems="center">
        <Grid gap="15px">
          <Text color="#ffffff" lineHeight="32px" fontSize="24px" fontWeight="700">
            Добрый день, Артем!
          </Text>
          <Text color="rgba(255, 255, 255, 0.5)" lineHeight="18px" fontSize="14px" fontWeight="700">
            Мы рады вас снова поприветствовать
          </Text>
        </Grid>
        <Grid gap="90px" gridTemplateColumns="repeat(3, auto)">
          <Flex alignItems="center">
            <HiOutlineCalendar color="rgba(255, 255, 255, 0.77)" />
            <Text display="inline" ml="10px" color="#ffffff" lineHeight="18px" fontSize="14px" fontWeight="700">
              24 мая 2023
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box
              bg="linear-gradient(227.73deg, #FBFF50 15.48%, #FFA800 81.25%)"
              width="15px"
              height="15px"
              borderRadius="50%"
              mr="10px"
            />
            <Text color="#ffffff" lineHeight="18px" fontSize="14px" fontWeight="700">
              -5°C
            </Text>
          </Flex>
          <Box
            className={styles.notifButton}
            position="relative"
            p="12px"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.24)"
            borderRadius="15px">
            <Box position="absolute" right="0" top="0" width="10px" height="10px" borderRadius="50%" bg="#FF5050" />
            <HiOutlineBell color="rgba(255, 255, 255, 0.77)" />
          </Box>
        </Grid>
      </Flex>
      <Box>
        <Text color="rgba(255, 255, 255, 0.7)" fontSize="14px" lineHeight="18px" fontWeight="700">
          Последняя заявка
        </Text>
      </Box>
    </Layout>
  );
};

export default Home;
