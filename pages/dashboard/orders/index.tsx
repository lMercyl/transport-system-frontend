import React from 'react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Box, Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../../hooks/selectorHooks';
import Layout from '../../../layout';
import { selectOrders } from '../../../store/orders/selector';
import { getOrdersByLimitsAndPage } from '../../../store/orders/api';

const URL_API = 'http://localhost:7777';

const OrdersPage = ({ info }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { items, loading, error } = useAppSelector(selectOrders);

  const [numberPage, setNumberPage] = React.useState<number>(1);
  const [countRowTable, setCountRowTable] = React.useState<10 | 20 | 30>(10);

  const fetchPagePaginationOrders = (limit: number, page: number, userId: number) => {
    dispatch(getOrdersByLimitsAndPage({ limit, page, userId }));
  };

  React.useEffect(() => {
    fetchPagePaginationOrders(countRowTable, numberPage, info.id);
  }, [numberPage]);

  const foramtDate = (date: string) => {
    const newDate = new Date(date);

    const day = ('0' + newDate.getDate()).slice(-2);
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    const year = newDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate;
  };

  return (
    <Layout>
      <Flex paddingY="35px" flexDirection="column" gap="50px">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Text color="#ffffff" lineHeight="32px" fontSize="24px" fontWeight="700">
              Список заявок
            </Text>
            <Link
              marginLeft="25px"
              paddingY="10px"
              paddingX="45px"
              backgroundColor="#ffffff"
              color="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="10px"
              _hover={{
                textDecoration: 'none',
              }}>
              Новая заявка
            </Link>
          </Flex>
          <Box>
            <Input
              paddingY="20px"
              paddingX="25px"
              width="400px"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              color="#ffffff"
              border="none"
              backgroundColor="rgba(255, 255, 255, 0.18)"
              borderRadius="10px"
              placeholder="Поиск"
              _placeholder={{
                color: 'rgba(255, 255, 255, 0.7)',
              }}
              _focus={{
                boxShadow: 'none',
                borderColor: 'rgba(255, 255, 255, 0.10)',
              }}
            />
          </Box>
        </Flex>
        <Flex
          width="100%"
          justifyContent="space-between"
          backgroundColor="rgba(255, 255, 255, 0.18)"
          borderRadius="10px">
          <Button
            paddingY="15px"
            fontWeight="700"
            fontSize="16px"
            lineHeight="21px"
            color="rgba(255, 255, 255, 0.7)"
            width="25%"
            backgroundColor="rgba(255, 255, 255, 0)"
            borderRadius="10px"
            _hover={{
              color: 'messenger.500',
              backgroundColor: '#ffffff',
            }}>
            Все
          </Button>
          <Button
            paddingY="15px"
            fontWeight="700"
            fontSize="16px"
            lineHeight="21px"
            color="rgba(255, 255, 255, 0.7)"
            width="25%"
            backgroundColor="rgba(255, 255, 255, 0)"
            borderRadius="10px"
            _hover={{
              color: 'messenger.500',
              backgroundColor: '#ffffff',
            }}>
            Принято
          </Button>
          <Button
            paddingY="15px"
            fontWeight="700"
            fontSize="16px"
            lineHeight="21px"
            color="rgba(255, 255, 255, 0.7)"
            width="25%"
            backgroundColor="rgba(255, 255, 255, 0)"
            borderRadius="10px"
            _hover={{
              color: 'messenger.500',
              backgroundColor: '#ffffff',
            }}>
            Отказано
          </Button>
          <Button
            paddingY="15px"
            fontWeight="700"
            fontSize="16px"
            lineHeight="21px"
            color="rgba(255, 255, 255, 0.7)"
            width="25%"
            backgroundColor="rgba(255, 255, 255, 0)"
            borderRadius="10px"
            _hover={{
              color: 'messenger.500',
              backgroundColor: '#ffffff',
            }}>
            В обработке
          </Button>
        </Flex>
        <Flex flexDirection="column" backgroundColor="#ffffff" borderRadius="15px">
          <Flex paddingY="5px" backgroundColor="rgba(0, 120, 255, 0.15)" justifyContent="space-between" width="100%">
            <Flex width="70%">
              <Button
                width="15%"
                fontWeight="700"
                fontSize="16px"
                lineHeight="21px"
                color="rgba(0, 120, 255, 0.7)"
                borderRadius="15px"
                backgroundColor="rgba(0, 120, 255, 0)"
                _hover={{
                  backgroundColor: 'rgba(0, 120, 255, 0)',
                }}>
                id
              </Button>
              <Button
                paddingX="0"
                display="flex"
                justifyContent="flex-start"
                width="85%"
                fontWeight="700"
                fontSize="16px"
                lineHeight="21px"
                color="rgba(0, 120, 255, 0.7)"
                borderRadius="15px"
                backgroundColor="rgba(0, 120, 255, 0)"
                _hover={{
                  backgroundColor: 'rgba(0, 120, 255, 0)',
                }}>
                Название маршрута
              </Button>
            </Flex>
            <Flex width="30%">
              <Button
                paddingX="0"
                display="flex"
                justifyContent="flex-start"
                width="50%"
                fontWeight="700"
                fontSize="16px"
                lineHeight="21px"
                color="rgba(0, 120, 255, 0.7)"
                borderRadius="15px"
                backgroundColor="rgba(0, 120, 255, 0)"
                _hover={{
                  backgroundColor: 'rgba(0, 120, 255, 0)',
                }}>
                Дата
              </Button>
              <Button
                paddingX="0"
                display="flex"
                justifyContent="flex-start"
                width="50%"
                fontWeight="700"
                fontSize="16px"
                lineHeight="21px"
                color="rgba(0, 120, 255, 0.7)"
                borderRadius="15px"
                backgroundColor="rgba(0, 120, 255, 0)"
                _hover={{
                  backgroundColor: 'rgba(0, 120, 255, 0)',
                }}>
                Статус
              </Button>
            </Flex>
          </Flex>
          {items
            ? items.map((item: any) => (
                <Flex key={item.id} width="100%" justifyContent="space-between" paddingY="10px">
                  <Flex width="70%">
                    <Text width="15%" textAlign="center">
                      {item.id}
                    </Text>
                    <Text width="85%">{item.name}</Text>
                  </Flex>
                  <Flex width="30%">
                    <Text width="50%">{foramtDate(item.lastModified)}</Text>
                    <Text width="50%">{item.value}</Text>
                  </Flex>
                </Flex>
              ))
            : null}
        </Flex>
        <Flex justifyContent="center">
          <Flex borderRadius="10px" backgroundColor="rgba(255, 255, 255, 0.18)">
            <Button
              borderRadius="10px"
              backgroundColor="rgba(255, 255, 255, 0)"
              color="rgba(255, 255, 255, 0.7)"
              fontWeight="700"
              _hover={{
                color: 'messenger.500',
                backgroundColor: '#ffffff',
              }}>
              Назад
            </Button>
            <Button
              borderRadius="10px"
              backgroundColor="rgba(255, 255, 255, 0)"
              color="rgba(255, 255, 255, 0.7)"
              fontWeight="700"
              _hover={{
                color: 'messenger.500',
                backgroundColor: '#ffffff',
              }}>
              1
            </Button>
            <Button
              borderRadius="10px"
              backgroundColor="rgba(255, 255, 255, 0)"
              color="rgba(255, 255, 255, 0.7)"
              fontWeight="700"
              _hover={{
                color: 'messenger.500',
                backgroundColor: '#ffffff',
              }}>
              2
            </Button>
            <Button
              borderRadius="10px"
              backgroundColor="rgba(255, 255, 255, 0)"
              color="rgba(255, 255, 255, 0.7)"
              fontWeight="700"
              _hover={{
                color: 'messenger.500',
                backgroundColor: '#ffffff',
              }}>
              3
            </Button>
            <Button
              borderRadius="10px"
              backgroundColor="rgba(255, 255, 255, 0)"
              color="rgba(255, 255, 255, 0.7)"
              fontWeight="700"
              _hover={{
                color: 'messenger.500',
                backgroundColor: '#ffffff',
              }}>
              ...
            </Button>
            <Button
              borderRadius="10px"
              backgroundColor="rgba(255, 255, 255, 0)"
              color="rgba(255, 255, 255, 0.7)"
              fontWeight="700"
              _hover={{
                color: 'messenger.500',
                backgroundColor: '#ffffff',
              }}>
              10
            </Button>
            <Button
              borderRadius="10px"
              backgroundColor="rgba(255, 255, 255, 0)"
              color="rgba(255, 255, 255, 0.7)"
              fontWeight="700"
              _hover={{
                color: 'messenger.500',
                backgroundColor: '#ffffff',
              }}>
              Вперед
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

export default OrdersPage;
