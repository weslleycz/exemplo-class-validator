import { Heading } from "native-base";

export const HeaderLogin = () => {
  return (
    <>
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
      >
        Bem-vindo
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Faça login para continuar!
      </Heading>
    </>
  );
};
