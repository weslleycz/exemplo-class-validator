import { Center } from "native-base";
import { FormLogin } from "../components/organisms/FormLogin";
import { NavigationProps } from "../types/navigation";
export const Login = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Center flex={1} px="3">
        <FormLogin navigation={navigation} />
      </Center>
    </>
  );
};
