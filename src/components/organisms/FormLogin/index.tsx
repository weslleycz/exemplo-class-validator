import { MaterialIcons } from "@expo/vector-icons";
import createValidator from "class-validator-formik";
import { Formik } from "formik";
import {
    Box,
    Center,
    FormControl,
    Icon,
    Input,
    Pressable,
    VStack,
} from "native-base";
import { useState } from "react";
import { LoginDto } from "../../../dtos/login.dto";
import { NavigationProps } from "../../../types/navigation";
import { Button } from "../../atoms/Button";
import { ErrorText } from "../../atoms/ErrorText";
import { FooterLogin } from "../../molecules/FooterLogin";
import { HeaderLogin } from "../../molecules/HeaderLogin";

export const FormLogin = ({ navigation }: NavigationProps) => {
    const [show, setShow] = useState(false);
    return (
        <Center w="100%">
            <Formik
                validate={createValidator(LoginDto)}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        <HeaderLogin />
                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>Email</FormControl.Label>
                                <Input
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                />
                                {errors.email && touched.email ? (
                                    <ErrorText erro={errors.email} />
                                ) : null}
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Senha</FormControl.Label>
                                <Input
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    secureTextEntry
                                    onChangeText={handleChange("password")}
                                    type={show ? "text" : "password"}
                                    InputRightElement={
                                        <Pressable
                                            onPress={() => setShow(!show)}
                                        >
                                            <Icon
                                                as={
                                                    <MaterialIcons
                                                        name={
                                                            show
                                                                ? "visibility"
                                                                : "visibility-off"
                                                        }
                                                    />
                                                }
                                                size={5}
                                                mr="2"
                                                color="muted.400"
                                            />
                                        </Pressable>
                                    }
                                />
                                {errors.password && touched.password ? (
                                    <ErrorText erro={errors.password} />
                                ) : null}
                            </FormControl>
                            <FooterLogin navigation={navigation} />
                            <Button text="Entrar" onPress={handleSubmit} />
                        </VStack>
                    </Box>
                )}
            </Formik>
        </Center>
    );
};
