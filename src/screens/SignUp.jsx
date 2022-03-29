import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import BGBlur from '../components/BGBlur';
import BGGradient from '../components/BGGraident';

// Components
import Button from '../components/Button';
import Text from '../components/Text';

const SignUpScreen = () => {
    const [toggleLoginView, setToggleLoginView] = useState(false);
    return(
        <Container>
            <BGGradient />
            <BGBlur />
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => console.log(values)}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <Content style={{ zIndex: 100 }}>
                        <Img source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_13-512.png' }} />
                        <FormGroup>
                            <FormItem style={{ marginBottom: 20 }}>
                                <Text fontSize={16} fontWeight='500'>Username:  </Text>
                                <TextInputItem 
                                    onBlur={handleBlur('username')} 
                                    onChangeText={handleChange('username')} 
                                    value={values.username} 
                                />
                            </FormItem>
                            <FormItem>
                                <Text fontSize={16} fontWeight='500'>Password:   </Text>
                                <TextInputItem 
                                    onBlur={handleBlur('password')} 
                                    onChangeText={handleChange('password')} 
                                    secureTextEntry={true} 
                                    value={values.password} 
                                />
                            </FormItem>
                        </FormGroup>

                        { toggleLoginView == true ?
                            <>
                                <Button marginTop={50} style={{ alignSelf: 'center' }} onPress={handleSubmit}>Login</Button>
                                <Button 
                                    color='#d4d6da' 
                                    isTextButton={true} 
                                    marginTop={20} 
                                    onPress={() => setToggleLoginView(false)}>
                                        Have an account already?
                                </Button>
                            </>
                            :
                            <>
                                <Button marginTop={50} style={{ alignSelf: 'center' }} onPress={handleSubmit}>Create Account</Button>
                                <Button 
                                    color='#d4d6da' 
                                    isTextButton={true} 
                                    marginTop={20} 
                                    onPress={() => setToggleLoginView(true)}>
                                        Need to sign in?
                                </Button>
                            </>
                        }
                    </Content>
                )}
            </Formik>
        </Container>
    )
};

export default SignUpScreen;

const Container = styled.View`
    align-items: center;
    flex: 1;
    justify-content: center;
`;

const Content = styled.View`
`;

const FormGroup = styled.View`
    margin-left: 6px;
`;

const FormItem = styled.View`
    flex-direction: row;
`;

const TextInputItem = styled.TextInput`
    border-bottom-color: aliceblue;
    border-bottom-width: 1px;
    color: #fff;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: .4px;
    min-width: 200px; 
    max-Width: 200px;
`;

const Img = styled.Image`
    align-self:  center;
    height: 175px;
    margin-bottom: 30px;
    width: 175px;
`;