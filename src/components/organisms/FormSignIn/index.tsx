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
import { SignInDto } from "../../../dtos/signIn.dto";
import { NavigationProps } from "../../../types/navigation";
import { Button } from "../../atoms/Button";
import { ErrorText } from "../../atoms/ErrorText";
import { FooterSignIn } from "../../molecules/FooterSignIn";
import { HeaderSignIn } from "../../molecules/HeaderSignIn";

export const FormSignIn = ({ navigation }: NavigationProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    return (
        <Center w="100%">
            <Formik
                validate={createValidator(SignInDto)}
                initialValues={{
                    cpf: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                }}
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
                    <Box safeArea p="2" py="1" w="90%" maxW="290">
                        <HeaderSignIn />
                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>CPF</FormControl.Label>
                                <Input
                                    onBlur={handleBlur("cpf")}
                                    value={values.cpf}
                                    onChangeText={handleChange("cpf")}
                                />
                                {errors.email && touched.cpf ? (
                                    <ErrorText erro={errors.cpf} />
                                ) : null}
                            </FormControl>
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
                                    onChangeText={handleChange("password")}
                                    type={showPassword ? "text" : "password"}
                                    InputRightElement={
                                        <Pressable
                                            onPress={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            <Icon
                                                as={
                                                    <MaterialIcons
                                                        name={
                                                            showPassword
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

                            <FormControl>
                                <FormControl.Label>
                                    Confirmar senha
                                </FormControl.Label>
                                <Input
                                    onBlur={handleBlur("passwordConfirm")}
                                    value={values.passwordConfirm}
                                    onChangeText={handleChange(
                                        "passwordConfirm"
                                    )}
                                    type={
                                        showPasswordConfirm
                                            ? "text"
                                            : "password"
                                    }
                                    InputRightElement={
                                        <Pressable
                                            onPress={() =>
                                                setShowPasswordConfirm(
                                                    !showPasswordConfirm
                                                )
                                            }
                                        >
                                            <Icon
                                                as={
                                                    <MaterialIcons
                                                        name={
                                                            showPasswordConfirm
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
                                {errors.email && touched.passwordConfirm ? (
                                    <ErrorText erro={errors.passwordConfirm} />
                                ) : null}
                            </FormControl>
                            <FooterSignIn navigation={navigation} />
                            <Button
                                text="Inscrever-se"
                                onPress={handleSubmit}
                            />
                        </VStack>
                    </Box>
                )}
            </Formik>
        </Center>
    );
};
