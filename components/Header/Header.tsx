import { Box, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useAppSelector } from "../../redux/hooks/redux";

const Header = () => {
  const [cookie, setCookie] = useCookies(['language'])
  const languageData = useAppSelector((state) => state.languageData.value);
  return (
    <Flex justify={'space-around'} w={'100%'} h={'50px'} background={'brand.black'} color={'brand.white'} align={'center'}>
      <Box>{languageData?.header.title}</Box>
      <Box>{cookie?.language}</Box>
      <Box>{languageData.header.signIn}</Box>
    </Flex>
  )
}

export default Header