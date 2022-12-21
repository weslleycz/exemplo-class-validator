import { HStack, Link, Text } from "native-base";
import { NavigationProps } from "../../../types/navigation";

export const FooterLogin = ({ navigation }: NavigationProps) => {
  return (
    <>
      <HStack mt="6" justifyContent="center">
        <Text
          fontSize="sm"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
        >
          Eu sou um novo usuário.{" "}
        </Text>
        <Link
          _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm",
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Inscrever-se
        </Link>
      </HStack>
    </>
  );
};
