import axios from 'axios';
import { Button, Flex, Text, Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Layout from '../../../layout';
import React from 'react';
import { InferGetServerSidePropsType } from 'next';

const URL_API = 'http://localhost:7777';

const ProfilePage = ({ info }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <Flex paddingY="35px" flexDirection="column">
        <Text marginBottom="20px" color="#ffffff" lineHeight="32px" fontSize="24px" fontWeight="700">
          Профиль
        </Text>
        <Flex flexDirection="column" p="25px" width="100%" backgroundColor="#ffffff" borderRadius="15px">
          <Flex marginBottom="15px">
            <Text>Почта: {info.email}</Text>
          </Flex>
          <Flex marginBottom="15px">
            <Text>Имя: {info.firstName}</Text>
          </Flex>
          <Flex marginBottom="15px">
            <Text>Фамилия: {info.lastName}</Text>
          </Flex>
          <Flex marginBottom="15px">
            <Text>Телефон: {info.phone}</Text>
          </Flex>
          <Flex flexDirection="column">
            <Flex
              paddingY="5px"
              paddingX="15px"
              justifyContent="space-between"
              borderRadius="10px"
              backgroundColor="#f1f1f1">
              <Box>
                <Text>Вид: Автобус</Text>
              </Box>
              <Box>
                <Text>Марка: Лада</Text>
              </Box>
              <Box>
                <Text>Модель: Веста</Text>
              </Box>
            </Flex>
            <Button
              marginTop="15px"
              colorScheme="messenger"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="10px">
              добавить транспорт
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const token = context.req.headers.cookie;
  if (token) {
    try {
      await axios.get(`${URL_API}/auth/me`, {
        headers: {
          Cookie: token,
        },
      });
      const { data } = await axios.get(`${URL_API}/auth/info`, {
        headers: {
          Cookie: token,
        },
      });
      return {
        props: {
          info: data,
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default ProfilePage;
