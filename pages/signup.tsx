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
import { signup } from '../store/auth/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { selectIsAuthenticated } from '../store/auth/selector';
import { useRouter } from 'next/router';

interface SignupFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirm: string;
}

const Signup = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const { handleSubmit, setValue } = useForm<SignupFormData>();

  const handleSubmitSignup: SubmitHandler<SignupFormData> = (data) => {
    const { email, password, confirm, firstName, lastName, phone } = data;

    if (confirm == password) {
      dispatch(signup({ email: email, password: confirm, firstName: firstName, lastName: lastName, phone: phone }));
      router.push('/login');
    }
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
          <Flex alignItems="flex-end" justifyContent="center">
            <Box mr="25px">
              <Box textAlign="center" color="#1E1E1E" fontWeight="700" fontSize="24px" lineHeight="32px">
                Зарегистироваться в систему{' '}
                <Box color="messenger.500" display="inline">
                  Busport
                </Box>
              </Box>
            </Box>
          </Flex>
          <Box mt="10px">
            <Box textAlign="center" color="rgba(30, 30, 30, 0.32)" fontWeight="700" fontSize="14px" lineHeight="18px">
              У вас есть аккаунт?{' '}
              <LinkBox display="inline" cursor="pointer" color="messenger.500">
                <Link href="/login">Войти</Link>
              </LinkBox>
            </Box>
          </Box>
          <form onSubmit={handleSubmit(handleSubmitSignup)}>
            <Flex mt="25px" gap="10px">
              <FormControl>
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
                  placeholder="имя"
                  type="text"
                  onChange={(event) => setValue('firstName', event.target.value)}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
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
                  placeholder="фамилия"
                  type="text"
                  onChange={(event) => setValue('lastName', event.target.value)}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Flex>
            <FormControl mt="10px" mb="10px">
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
                placeholder="телефон"
                type="phone"
                onChange={(event) => setValue('phone', event.target.value)}
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl mt="10px" mb="10px">
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
            <Flex gap="10px">
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
                  onChange={(event) => setValue('confirm', event.target.value)}
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
                  placeholder="повторить пароль"
                  type="password"
                  onChange={(event) => setValue('password', event.target.value)}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
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
              Зарегистироваться
            </Button>
          </form>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Signup;
