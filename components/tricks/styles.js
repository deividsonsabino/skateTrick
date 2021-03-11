import styled from 'styled-components/native';
import { BlurView as Blur, VibrancyView } from "@react-native-community/blur"


export const Container = styled.View`
        display: flex;
        justify-content: center; 
        align-items: center; 
        width: 100%;
        height:100%;
`
export const BackgroundImage = styled.ImageBackground`
        flex: 1;
        justify-content: center;
        width: 100%;
        height:100%;
`
export const BlurView = styled(Blur)`
        display:flex;
        align-items:center;
        padding-top:30px;
        padding-bottom:30px;

  `
export const Header = styled.View`
        flex-direction: column; 
        justify-content: space-around;
  `

export const HeaderTitle = styled.Text`
        font-size: 60px;
        font-weight: bold;
        left:30px;
        color: white;
  `
export const Trick = styled.Text`
        font-weight: bold;
        font-size: 30px;
        color: white;
  `
export const Buttons = styled.View`
        display:flex;
        padding-left:10px;
        padding-right:10px;
        flex-direction: row;
        align-items: center; 
        justify-content: space-around;
  `
