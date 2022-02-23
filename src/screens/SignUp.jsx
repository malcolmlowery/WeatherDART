import React from 'react';
import styled from 'styled-components/native';
import BGBlur from '../components/BGBlur';
import BGGradient from '../components/BGGraident';

// Components
import Button from '../components/Button';
import Text from '../components/Text';

const SignUpScreen = () => {
    return(
        <Container>
            <BGGradient />
            <BGBlur />
            <Content style={{ zIndex: 100 }}>
                <Img source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_13-512.png' }} />
                <FormGroup>
                    <FormItem style={{ marginBottom: 20 }}>
                        <Text fontSize={16} fontWeight='500'>Username: </Text>
                        <TextInputItem value='WubbyNugget' />
                    </FormItem>
                    <FormItem>
                        <Text fontSize={16} fontWeight='500'>Email: </Text>
                        <TextInputItem value='danishbread@gmail.com' />
                    </FormItem>
                </FormGroup>

                <Button marginTop={50} style={{ alignSelf: 'center' }}>Create</Button>
                <Button color='#d4d6da' isTextButton={true} marginTop={20}>Have a accrount?</Button>
            </Content>
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
    justify-content: center;
    flex-direction: row;
`;

const TextInputItem = styled.TextInput`
    color: #fff;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: .4px;
`;

const Img = styled.Image`
    align-self:  center;
    height: 175px;
    margin-bottom: 30px;
    width: 175px;
`;