import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  LinkBox,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo_busport.svg';
import { useAppDispatch, useAppSelector } from '../hooks/selectorHooks';
import { login } from '../store/auth/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { selectIsAuthenticated } from '../store/auth/selector';
import { useRouter } from 'next/router';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  React.useEffect(() => {}, []);

  const { handleSubmit, setValue } = useForm<LoginFormData>();

  const handleSubmitLogin: SubmitHandler<LoginFormData> = (data) => {
    const { email, password } = data;
    dispatch(login(data));
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <Container bg="#ffffff" height="100vh" maxW="container.xl">
      <Flex height="100%" alignItems="center" justifyContent="center">
        <Flex width="450px" flexDir="column">
          <Flex alignItems="flex-end">
            <Box mr="25px">
              <Box color="#1E1E1E" fontWeight="700" fontSize="24px" lineHeight="32px">
                Войти в систему{' '}
                <Box color="messenger.500" display="inline">
                  Busport
                </Box>
              </Box>
            </Box>
            <Box>
              <Image src={logo} alt="Logo Busport" />
            </Box>
          </Flex>
          <Box mt="10px" mb="55px">
            <Box color="rgba(30, 30, 30, 0.32)" fontWeight="700" fontSize="14px" lineHeight="18px">
              У вас нет аккаунта?{' '}
              <LinkBox display="inline" cursor="pointer" color="messenger.500">
                <Link href="/signup">Зарегистироваться</Link>
              </LinkBox>
            </Box>
          </Box>
          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <FormControl mb="25px">
              <Input
                height="55px"
                paddingX="23px"
                color="#1E1E1E"
                focusBorderColor="messenger.500"
                fontWeight="700"
                fontSize="16px"
                lineHeight="21px"
                borderRadius="15px"
                borderWidth="2px"
                placeholder="почта"
                type="email"
                onChange={(event) => setValue('email', event.target.value)}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl mb="25px">
              <Input
                height="55px"
                paddingX="23px"
                color="#1E1E1E"
                focusBorderColor="messenger.500"
                fontWeight="700"
                fontSize="16px"
                lineHeight="21px"
                borderRadius="15px"
                borderWidth="2px"
                placeholder="пароль"
                type="password"
                onChange={(event) => setValue('password', event.target.value)}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <Flex mb="45px" alignItems="center" justifyContent="space-between">
              <Box>
                <FormControl>
                  <Checkbox fontWeight="700" colorScheme="messenger">
                    Запомнить
                  </Checkbox>
                </FormControl>
              </Box>
              <Box fontWeight="700" fontSize="14px" lineHeight="18px">
                <LinkBox display="inline" cursor="pointer" color="messenger.500">
                  <Link href="/signup">Сменить пароль</Link>
                </LinkBox>
              </Box>
            </Flex>
            <Button
              colorScheme="messenger"
              height="60px"
              width="100%"
              borderRadius="15px"
              color="#ffffff"
              fontWeight="700"
              fontSize="16px"
              lineHeight="21px"
              type="submit">
              Войти
            </Button>
          </form>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Login;
