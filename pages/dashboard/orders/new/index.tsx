import Layout from '../../../../layout';

import { Button, Flex, Text, FormControl, FormErrorMessage, Input, Grid, GridItem, Textarea } from '@chakra-ui/react';

import { HiOutlineTrash, HiOutlineX } from 'react-icons/hi';

const NewOrderPage = () => {
  return (
    <Layout>
      <Flex paddingBottom="30px" flexDirection="column">
        <Flex alignItems="center" justifyContent="space-between" paddingY="35px">
          <Text color="#ffffff" lineHeight="32px" fontSize="24px" fontWeight="700">
            Новая заявка
          </Text>
          <Flex>
            <Button borderRadius="10px">
              <HiOutlineX />
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection="column" p="25px" width="100%" backgroundColor="#ffffff" borderRadius="15px">
          <Flex flexDirection="column">
            <Text fontSize="26px" lineHeight="34px" fontWeight="700" color="messenger.500" marginBottom="15px">
              Информация о перевозчике
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap="15px">
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px" fontSize="16px">
                    Имя
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px" fontSize="16px">
                    Фамилия
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px" fontSize="16px">
                    Отчество
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px" fontSize="16px">
                    Телефон
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px" fontSize="16px">
                    Почта
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px" fontSize="16px">
                    Социальные сети
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </Flex>
          <Flex marginTop="30px" flexDirection="column">
            <Text fontSize="26px" lineHeight="34px" fontWeight="700" color="messenger.500" marginBottom="15px">
              Информация о маршруте
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap="15px">
              <GridItem colSpan={2}>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Название маршрута
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Начало машрута
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Конец маршрута
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <Flex marginTop="15px" flexDirection="column">
              <Text fontWeight="700" marginBottom="5px">
                Информация о маршруте
              </Text>
              <Textarea
                color="#1E1E1E"
                focusBorderColor="messenger.500"
                fontWeight="400"
                fontSize="16px"
                lineHeight="21px"
                borderRadius="10px"
                borderWidth="2px"
                resize="none"
                height="150px"
              />
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap="15px" marginTop="15px">
              <GridItem>
                <Flex flexDirection="column">
                  <Text fontWeight="700" marginBottom="5px">
                    Расписание
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                    marginBottom="15px"
                  />
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                    marginBottom="15px"
                  />
                  <Button
                    colorScheme="messenger"
                    fontWeight="700"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    marginBottom="15px">
                    Добавить
                  </Button>
                </Flex>
              </GridItem>
              <GridItem colSpan={2}>
                <Flex
                  overflowY="scroll"
                  borderRadius="10px"
                  p="10px"
                  mt="27.5px"
                  border="2px solid #E2E8F0"
                  height="450px"
                  gap="5px"
                  flexDirection="column">
                  <Flex
                    borderRadius="10px"
                    backgroundColor="#0078FF"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%">
                    <Text fontWeight="700" fontSize="16px" lineHeight="21px" color="white" marginLeft="15px">
                      00:00
                    </Text>
                    <Text fontWeight="700" fontSize="16px" lineHeight="21px" color="white">
                      Санкт-Петербург, ул. Шувалова 19
                    </Text>
                    <Button fontWeight="700" fontSize="16px" lineHeight="21px" borderRadius="10px" colorScheme="red">
                      <HiOutlineTrash />
                    </Button>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
          <Flex marginTop="30px" flexDirection="column">
            <Text fontSize="26px" lineHeight="34px" fontWeight="700" color="messenger.500" marginBottom="15px">
              Информация о транспортном средстве
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap="15px">
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Вид транспорта
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Марка
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Модель
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Идентификационный номер (VIN)
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Text fontWeight="700" marginBottom="5px">
                    Количество пассажиров
                  </Text>
                  <Input
                    color="#1E1E1E"
                    focusBorderColor="messenger.500"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="21px"
                    borderRadius="10px"
                    borderWidth="2px"
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </Flex>
          <Flex marginTop="30px" flexDirection="column">
            <Text fontSize="26px" lineHeight="34px" fontWeight="700" color="messenger.500" marginBottom="15px">
              Дополнительные информация
            </Text>
            <Textarea
              color="#1E1E1E"
              focusBorderColor="messenger.500"
              fontWeight="400"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="10px"
              borderWidth="2px"
              resize="none"
              height="150px"
            />
          </Flex>
          <Button
            marginTop="15px"
            colorScheme="messenger"
            fontWeight="700"
            fontSize="16px"
            lineHeight="21px"
            borderRadius="10px">
            Отправить
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default NewOrderPage;
