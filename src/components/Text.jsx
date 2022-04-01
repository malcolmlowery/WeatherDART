import styled from 'styled-components/native';

const Text = ({ 
    children, 
    color = 'white', 
    fontSize = 10, 
    fontWeight = 600,
    marginTop = 0,
    marginBottom = 0,
    style,
    }) => {
    return(
        <TextItem 
            color={color} 
            fontSize={fontSize} 
            fontWeight={fontWeight}
            marginTop={marginTop}
            marginBottom={marginBottom}
            style={style}
            >
            {children}
        </TextItem>
    )
};

export default Text;

const TextItem = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    margin-top: ${props => props.marginTop}px;
    margin-bottom: ${props => props.marginBottom}px;
    letter-spacing: .3px;
`;