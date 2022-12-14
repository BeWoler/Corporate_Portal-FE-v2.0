import { useAppSelector } from '@/redux/hooks/redux';
import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const LanguageTab = () => {
  const languageTabData = useAppSelector(
    (state) => state.languageTabData.value
  );
  const [cookies, setCookie] = useCookies(['language']);
  const [langArr, setLangArr] = useState<Array<string>>(
    languageTabData?.languages
  );
  useEffect(() => {
    setLangArr(
      languageTabData?.languages.filter((item) => item !== cookies.language)
    );
  }, [cookies.language, languageTabData]);

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
        borderRadius={'100px'}
        borderTopRadius={'0'}
        maxW={'65px'}
        minW={'65px'}
        textTransform={'uppercase'}
        top={'100%'}
        cursor={'pointer'}
        color={'brand.white'}
      >
        {langArr.map((item, i) => {
          return (
            <Box
              transition={'all ease .3s'}
              _hover={{ background: 'main.btnHoverColor' }}
              borderRadius={'100px'}
              borderTopRadius={'0px'}
              borderBottomRadius={
                i !== langArr.length - 1 && langArr.length > 1 ? '0px' : '100px'
              }
              p={'20px'}
              maxW={'65px'}
              minW={'65px'}
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
