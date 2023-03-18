import { Box, Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import Layout from '../../../layout';

const OrdersPage = () => {
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
              borderRadius="50px"
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
              borderRadius="40px"
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
          borderRadius="40px">
          <Button
            paddingY="15px"
            fontWeight="700"
            fontSize="16px"
            lineHeight="21px"
            color="rgba(255, 255, 255, 0.7)"
            width="25%"
            backgroundColor="rgba(255, 255, 255, 0)"
            borderRadius="40px"
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
            borderRadius="40px"
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
            borderRadius="40px"
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
            borderRadius="40px"
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
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="space-between" paddingY="10px">
            <Flex width="70%">
              <Text width="15%" textAlign="center">
                1
              </Text>
              <Text width="85%">Москва - Санкт-Петербург</Text>
            </Flex>
            <Flex width="30%">
              <Text width="50%">24.05.2023</Text>
              <Text width="50%">В обработке</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default OrdersPage;
