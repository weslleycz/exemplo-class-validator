import { Box, FormControl, Text, WarningOutlineIcon } from "native-base";

type Props = {
  erro: string | undefined;
};

export const ErrorText = ({ erro }: Props) => {
  return (
    <>
      <Box>
        <Text color={"error.400"} fontSize="sm">
          {erro}
        </Text>
      </Box>
    </>
  );
};
