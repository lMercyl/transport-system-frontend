import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Layout from '../../../layout';

const Order = ({ params }: { params: { id: string } }) => {
  React.useEffect(() => {}, []);

  return (
    <Layout>
      <Flex paddingBottom="30px" flexDirection="column">
        <Flex alignItems="center" justifyContent="space-between" paddingY="35px">
          <Text color="#ffffff" lineHeight="32px" fontSize="24px" fontWeight="700">
            Заявка:{' '}
          </Text>
        </Flex>
        <Flex flexDirection="column" p="25px" width="100%" backgroundColor="#ffffff" borderRadius="15px">
          <Box>
            <Flex>
              <Text>Информация о перевозчике</Text>
            </Flex>
            <Flex flexDirection="column">
              <Box>Имя: </Box>
              <Box>Фамилия: </Box>
              <Box>Отчество: </Box>
              <Box>Телефон: </Box>
              <Box>Почта: </Box>
              <Box>Социальные сети: </Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Text>Информация о маршруте</Text>
            </Flex>
            <Flex flexDirection="column">
              <Box>Название маршрута: </Box>
              <Box>Начало маршрута: </Box>
              <Box>Конец маршрута: </Box>
              <Box>Описание маршрута: </Box>
              <Box>Расписание: </Box>
              <Flex>
                <Flex></Flex>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Text>Информация о транспорте</Text>
            </Flex>
            <Flex></Flex>
          </Box>
          <Box>
            <Flex>
              <Text>Дополнительная информация</Text>
            </Flex>
            <Flex></Flex>
          </Box>
          <Box>
            <Flex>
              <Text>Статус заявки</Text>
            </Flex>
            <Flex flexDirection="column">
              <Box>Статус: </Box>
              <Box>Дата подтверждения: </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Order;
