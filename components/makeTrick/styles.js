import styled from 'styled-components/native';

export const Container = styled.View`
        display: flex;
        justify-content: space-between; 
        align-items: center; 
        flex-direction:row;
        padding:30px;
        width: 100%;
        height:100%;
        background: #000000
`;

export const BackgroundImage = styled.ImageBackground`
        flex: 1;
        justify-content: center;
        width: 100%;
        height:100%;
`

export const ButtonList = styled.View`
    display:flex;
    padding:5px;
    margin:20px;
    flex-direction:column;
    background-color:#FFFFFF;
    border-radius:10px;
`
export const CustomButton = styled.TouchableOpacity`
    margin-bottom:20px;
    padding:15px;

`
export const TrickBox = styled.View`
    background-color:${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'}; 
    margin:20px; 
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    opacity:0.9;
`
export const Box = styled.View`
    margin:250px 30px 0px; 
    background-color:${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'}; 
    display:flex;
    justify-content:center;
    border-radius:5px;
    opacity:0.9;
`;

export const Title = styled.Text`
    color:${props => props.color ? props.color : '#000000'};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    font-weight: bold;
    font-size:${props => props.fontSize ? props.fontSize : '35px'};
    padding:15px;
`
export const CustomText = styled.Text`
    color:${props => props.color ? props.color : '#000000'};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    font-size:${props => props.fontSize ? props.fontSize : '12px'};
`
export const Header = styled.View`
    margin:20px; 
    border-radius:10px;
    opacity:0.9;
`
export const Trick = styled.Text`
    font-weight:bold;
    font-size:35px;
    color:#541D29;
`