import { Box, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useAppSelector } from "../../redux/hooks/redux";
import Button from "../common/Buttons/Button";

const Header = () => {
  const [cookies, setCookie] = useCookies(['language'])
  const languageData = useAppSelector((state) => state.languageData.value);
  return (
    <Flex justify={'space-around'} w={'100%'} h={'50px'} background={'brand.black'} color={'brand.white'} align={'center'}>
      <Box>{languageData?.header.title}</Box>
      <Button />
      <Box>{languageData.header.signIn}</Box>
    </Flex>
  )
}

export default Header