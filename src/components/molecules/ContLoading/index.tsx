import { Box } from "native-base";
import { StyleSheet } from "react-native";
import { ReactNode } from "react";

type Pros ={
    children:ReactNode
}

export const ContLoading = ({children}:Pros) => {
    return(
        <Box bg={"primary.900"} style={styles.container}>
        {children}
    </Box>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  