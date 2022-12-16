import { useAppSelector } from '@/redux/hooks/redux';
import { Box, Flex } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';

const LanguageTab = () => {
  const languageTabData = useAppSelector(
    (state) => state.languageTabData.value
  );
  const [cookies, setCookie] = useCookies(['language']);

  return (
    languageTabData?.languages && (
      <Flex
        direction={'column'}
        align={'center'}
        justify={'center'}
        position={'absolute'}
        background={'main.btnColor'}
        transition={'all ease .3s'}
        fontWeight={'600'}
        w={'100%'}
        minW={'65px'}
        textTransform={'uppercase'}
        top={'100%'}
        cursor={'pointer'}
        color={'brand.white'}
      >
        {languageTabData?.languages.map((item, i) => {
          return (
            <Box
              transition={'all ease .3s'}
              _hover={{ background: 'main.btnHoverColor' }}
              p={'10px'}
              minW={'65px'}
              w={'100%'}
              key={item}
              onClick={() => setCookie('language', item)}
            >
              {item}
            </Box>
          );
        })}
      </Flex>
    )
  );
};

export default LanguageTab;
