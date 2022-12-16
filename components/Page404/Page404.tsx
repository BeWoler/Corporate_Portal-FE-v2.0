import { useAppSelector } from '@/redux/hooks/redux';
import { Flex } from '@chakra-ui/react';

const Page404 = () => {
  const languageData = useAppSelector((state) => state.languageData.value);
  return (
    <Flex
      justifyContent={'center'}
      align={'center'}
      fontSize={'30px'}
      fontWeight={'800'}
    >
      404 {languageData.error[404]}
    </Flex>
  );
};

export default Page404;
