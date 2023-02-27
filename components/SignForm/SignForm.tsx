import Button from '@/components/common/Button/Button/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux';
import { authAPI } from '@/redux/services/auth.service';
import { changeForm } from '@/redux/slices/authForm.slice';
import { userData } from '@/redux/slices/user.slice';
import { Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useState, useEffect } from 'react';
import { ISignForm, IUserFormData } from './interface/singForm.interface';

const SignForm = ({ signin }: ISignForm) => {
  const [formData, setFormData] = useState<IUserFormData>(
    !signin
      ? {
          email: '',
          username: '',
          password: '',
        }
      : { email: '', password: '' }
  );
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const languageData = useAppSelector((state) => state.languageData.value);

  const [userSignin, signinData] = authAPI.useSigninMutation();
  const [userSignup, signupData] = authAPI.useSignupMutation();

  const handleInputEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleInputUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const handleInputPassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSendData = async () => {
    signin
      ? await userSignin({ ...formData })
      : await userSignup({ ...formData });
    setFormData({ email: '', username: '', password: '' });
  };

  useEffect(() => {
    if (signin) {
      signinData?.isSuccess && dispatch(userData(signinData?.data?.user));
      signinData?.isSuccess &&
        localStorage.setItem('acToken', signinData?.data?.accessToken);
    } else {
      signupData?.isSuccess && dispatch(userData(signupData?.data?.user));
      signupData?.isSuccess &&
        localStorage.setItem('acToken', signupData?.data?.accessToken);
    }
  }, [signinData, signupData, signin, dispatch]);

  return (
    <Flex
      direction={'column'}
      gap={'20px'}
      w={'100%'}
      maxW={'500px'}
      background={'main.mainColor'}
      color={'brand.white'}
      padding={'30px'}
      borderRadius={'10px'}
      boxShadow={'0px 0px 5px black'}
    >
      <Text as="h2" m={'0 auto'} fontSize={'20px'}>
        {signin ? languageData?.auth.signIn : languageData?.auth.signUp}
      </Text>
      <FormControl isRequired>
        <FormLabel>{languageData?.auth.email}</FormLabel>
        <Input
          _focus={{
            boxShadow: '0px 2px 10px black, 0px -2px 10px black',
            borderColor: 'brand.gray100',
            borderWidth: '1px',
            transform: 'scale(1.05)',
          }}
          transition={'all ease .3s'}
          background={'brand.white'}
          color={'brand.black'}
          placeholder="user@mail.com"
          _placeholder={{ color: 'brand.gray100' }}
          type={'email'}
          value={formData.email}
          onChange={handleInputEmailChange}
        />
      </FormControl>
      {!signin && (
        <FormControl isRequired>
          <FormLabel>{languageData?.auth.username}</FormLabel>
          <Input
            _focus={{
              boxShadow: '0px 2px 10px black, 0px -2px 10px black',
              borderColor: 'brand.gray100',
              borderWidth: '1px',
              transform: 'scale(1.05)',
            }}
            transition={'all ease .3s'}
            background={'brand.white'}
            color={'brand.black'}
            placeholder="username"
            _placeholder={{ color: 'brand.gray100' }}
            type={'text'}
            value={formData.username}
            onChange={handleInputUsernameChange}
          />
        </FormControl>
      )}
      <FormControl isRequired>
        <FormLabel>{languageData?.auth.password}</FormLabel>
        <Input
          _focus={{
            boxShadow: '0px 2px 10px black, 0px -2px 10px black',
            borderColor: 'brand.gray100',
            borderWidth: '1px',
            transform: 'scale(1.05)',
          }}
          transition={'all ease .3s'}
          background={'brand.white'}
          color={'brand.black'}
          placeholder="password"
          _placeholder={{ color: 'brand.gray100' }}
          type={'password'}
          value={formData.password}
          onChange={handleInputPassChange}
        />
      </FormControl>
      <Button
        value={signin ? languageData?.auth.signIn : languageData?.auth.signUp}
        w={'fit-content'}
        p={'20px'}
        m={'10px 0 0 0'}
        transition={'all ease-in-out .3s'}
        bgHoverColor={'main.btnHoverColor'}
        fontW={'600'}
        onClick={handleSendData}
      />
      <Text>
        {signin ? languageData?.auth.messageUp : languageData?.auth.messageIn}.
        <Text
          ml={'5px'}
          color={'main.btnColor'}
          _hover={{ color: 'main.btnHoverColor' }}
          cursor={'pointer'}
          transition={'all ease-in-out .3s'}
          fontWeight={'600'}
          as={'span'}
          onClick={() =>
            signin
              ? dispatch(changeForm('signup'))
              : dispatch(changeForm('signin'))
          }
        >
          {signin ? languageData?.auth.signUp : languageData?.auth.signIn}
        </Text>
      </Text>
    </Flex>
  );
};

export default SignForm;
