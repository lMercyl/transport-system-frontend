import React from 'react';
import axios from 'axios';

import Layout from '../../../../layout';

import { Button, Flex, Text, FormControl, FormErrorMessage, Input, Grid, GridItem, Textarea } from '@chakra-ui/react';

import { HiOutlineTrash, HiOutlineX } from 'react-icons/hi';
import { StringLiteral } from 'typescript';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

const URL_API = 'http://localhost:7777';

interface InfoUserData {
  firstName: string;
  surName: string;
  lastName: string;
  phone: string;
  email: string;
  social: string;
}

interface infoRouteData {
  name: string;
  start: string;
  end: string;
  shedules: SheduleData[];
  description: string;
}

interface SheduleData {
  time?: string;
  name?: string;
}

interface TransportData {
  kind: string;
  mark: string;
  model: string;
  vin: string;
  numberOfPassengers: number;
}

interface OrderData {
  userId: string;
  firstName: string;
  surName: string;
  lastName: string;
  phone: string;
  email: string;
  social: string;
  name: string;
  start: string;
  end: string;
  shedules: SheduleData[];
  cars: TransportData[];
  description: string;
  numberOfPassengers: number;
  addRequirements: string;
}

const NewOrderPage = ({ info }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { handleSubmit, setValue, formState, getValues } = useForm<OrderData>();

  const router = useRouter();

  const [schedule, setSchedule] = React.useState<SheduleData>({ name: '', time: '' });
  const [schedules, setSchedules] = React.useState<SheduleData[]>([]);

  const handleSubmitOrder: SubmitHandler<OrderData> = async (data) => {
    try {
      await axios.post('http://localhost:7777/orders', {
        userId: info.id,
        infoUser: {
          firstName: data.firstName,
          surName: data.surName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          social: data.social,
        },
        infoRoute: {
          name: data.name,
          start: data.start,
          end: data.end,
          shedules: schedules,
          description: data.description,
        },
        infoTransports: [],
        addRequirements: data.addRequirements,
      });
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  const handleСlickAddSchedule = () => {
    if (schedule?.name !== '' && schedule?.time !== '') {
      setSchedules((arr) => [...arr, schedule]);
      setSchedule({ time: '', name: '' });
    }
  };

  return (
    <Layout>
      <Flex paddingBottom="30px" flexDirection="column">
        <form onSubmit={handleSubmit(handleSubmitOrder)}>
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
                      onChange={(event) => setValue('firstName', event.target.value)}
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
                      onChange={(event) => setValue('surName', event.target.value)}
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
                      onChange={(event) => setValue('lastName', event.target.value)}
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
                      onChange={(event) => setValue('phone', event.target.value)}
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
                      onChange={(event) => setValue('email', event.target.value)}
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
                      onChange={(event) => setValue('social', event.target.value)}
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
                      onChange={(event) => setValue('name', event.target.value)}
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
                      onChange={(event) => setValue('start', event.target.value)}
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
                      onChange={(event) => setValue('end', event.target.value)}
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Flex marginTop="15px" flexDirection="column">
                <Text fontWeight="700" marginBottom="5px">
                  Описание маршрута
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
                  onChange={(event) => setValue('description', event.target.value)}
                />
              </Flex>
              <Grid templateColumns="repeat(3, 1fr)" gap="15px" marginTop="15px">
                <GridItem>
                  <Flex flexDirection="column">
                    <Text fontWeight="700" marginBottom="5px">
                      Расписание
                    </Text>
                    <Input
                      value={schedule.name}
                      color="#1E1E1E"
                      focusBorderColor="messenger.500"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21px"
                      borderRadius="10px"
                      borderWidth="2px"
                      marginBottom="15px"
                      placeholder="Название"
                      onChange={(event) => setSchedule((obj) => ({ time: obj?.time, name: event.target.value }))}
                    />
                    <Input
                      value={schedule?.time}
                      color="#1E1E1E"
                      focusBorderColor="messenger.500"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21px"
                      borderRadius="10px"
                      borderWidth="2px"
                      marginBottom="15px"
                      placeholder="Время"
                      onChange={(event) => setSchedule((obj) => ({ name: obj?.name, time: event.target.value }))}
                    />
                    <Button
                      colorScheme="messenger"
                      fontWeight="700"
                      fontSize="16px"
                      lineHeight="21px"
                      borderRadius="10px"
                      marginBottom="15px"
                      onClick={handleСlickAddSchedule}>
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
                    {schedules.map((schedule) => (
                      <Flex
                        borderRadius="10px"
                        backgroundColor="#0078FF"
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%">
                        <Text fontWeight="700" fontSize="16px" lineHeight="21px" color="white" marginLeft="15px">
                          {schedule.time}
                        </Text>
                        <Text fontWeight="700" fontSize="16px" lineHeight="21px" color="white">
                          {schedule.name}
                        </Text>
                        <Button
                          fontWeight="700"
                          fontSize="16px"
                          lineHeight="21px"
                          borderRadius="10px"
                          colorScheme="red">
                          <HiOutlineTrash />
                        </Button>
                      </Flex>
                    ))}
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
                onChange={(event) => setValue('addRequirements', event.target.value)}
              />
            </Flex>
            <Button
              type="submit"
              marginTop="15px"
              colorScheme="messenger"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              borderRadius="10px">
              Отправить
            </Button>
          </Flex>
        </form>
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

export default NewOrderPage;
