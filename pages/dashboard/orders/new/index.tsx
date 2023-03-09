import Layout from '../../../../layout';

import { Button, Flex, Text, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

const NewOrderPage = () => {
  return (
    <Layout>
      <Flex flexDirection="column">
        <Flex alignItems="center" justifyContent="space-between" paddingY="35px">
          <Text color="#ffffff" lineHeight="32px" fontSize="24px" fontWeight="700">
            Новая заявка
          </Text>
          <Flex>
            <Button
              mr="10px"
              colorScheme="gray"
              borderRadius="10px"
              color="#000000"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              type="submit">
              Отправить
            </Button>
            <Button
              colorScheme="red"
              borderRadius="10px"
              color="#ffffff"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              type="submit">
              Отменить
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection="column" p="25px" width="100%" backgroundColor="#ffffff" borderRadius="15px">
          <FormControl width="100%" mb="25px">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Название маршрута
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl width="100%" mb="25px">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Место отправления
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl width="100%" mb="25px">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Место прибытия
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl width="100%" mb="25px">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Расписание
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl width="100%">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Описание маршрута
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl width="100%">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Транспортное средство
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl width="100%">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Имя и контактные данные пользователя
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl width="100%">
            <Text ml="23px" mb="10px" color="#000000" lineHeight="18px" fontSize="14px" fontWeight="700">
              Дополнительные требования
            </Text>
            <Input
              width="100%"
              height="55px"
              paddingX="23px"
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="15px"
              borderWidth="2px"
              type="email"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default NewOrderPage;
