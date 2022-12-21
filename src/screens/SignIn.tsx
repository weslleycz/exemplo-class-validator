import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { FormSignIn } from "../components/organisms/FormSignIn";
import { NavigationProps } from "../types/navigation";

export const SignIn = ({ navigation }: NavigationProps) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <FormSignIn navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
