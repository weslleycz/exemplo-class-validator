import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Fragment } from "react";
import { Loading } from "./src/screens/Loading";
import { Login } from "./src/screens/Login";
import { SignIn } from "./src/screens/SignIn";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <>
      <Fragment>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </Fragment>
    </>
  );
};
