import React, { Component } from 'react'
import { Button, View } from 'react-native'

import { Container, BackgroundImage, BlurView, Header, HeaderTitle, Trick, Buttons } from './styles';

const image = { uri: 'https://deivaotv.github.io/deividsabino/static/media/skate-02.e5a9826c.jpg' }
import trick from '../../tricks.json';

export default class Tricks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            base: [
                'Switch',
                'Nolie',
                'Fakie',
                ''
            ],
            tricks: [
                'Ollie',
                'Flip',
                'Heelflip',
                'Pop shove-it',
                'Shove-it',
                'Bigspin',
                '360º',
                'Varial-flip',
                'Varial-heel',
                'Impossible',
                'Hardflip',
                'Inward heelflip',
                '360 Flip',
                'Laser Flip',
                '360 Pop shove-it',
                'Double Flip',
                'Double Heelflip'
            ],
            trickSide: [
                'Ollie',
                'Flip',
                'Heelflip',
                'Bigspin',
                '360º',
            ],
            side: [
                'Fs',
                'Bs'
            ],
            trick: '',
        }

    }

    simpleTrick = () => {
        const { tricks, base } = this.state
        const random = Math.floor(Math.random() * tricks.length);
        const baseFilter = base.filter(item => item !== 'ollie');
        const randomBase = Math.floor(Math.random() * baseFilter.length);

        const trick = `${base[randomBase] + ' ' + tricks[random]}`
        this.setState({ trick })
    }

    spinTrick = () => {

        const randomTricks = Math.floor(Math.random() * this.state.trickSide.length);
        const randomBase = Math.floor(Math.random() * this.state.base.length);
        const randomSide = Math.floor(Math.random() * this.state.side.length);

        const spinTrick = `${this.state.base[randomBase] + ' ' + this.state.side[randomSide] + ' ' + this.state.trickSide[randomTricks]}`
        this.setState({ trick: spinTrick })
    }



    render() {
        return (
            <Container>
                <BackgroundImage source={image}>
                    <Header>
                        <HeaderTitle>Manobras para mandar no solo</HeaderTitle>
                        <BlurView
                            blurType="light"
                            blurAmount={5}
                            reducedTransparencyFallbackColor="white"
                        >
                            <Trick>
                                {this.state.trick}
                            </Trick>
                        </BlurView>
                    </Header>

                    <Buttons>
                        <View style={{flex:1}}>
                            <Button
                                title="Manobra Simples"
                                onPress={this.simpleTrick}
                                color="#000000"
                            />
                        </View>
                        <View style={{flex:1}}>
                            <Button
                                title="Manobra de Giro"
                                onPress={this.spinTrick}
                                color="#541D29"
                            />
                        </View>
                        <View style={{flex:1}}>
                            <Button
                                title="Monte sua manobra"
                                onPress={() => this.props.navigation.navigate('Monte sua manobra')}
                                color="#541D29"
                            />
                        </View>
                    </Buttons>
                </BackgroundImage>
            </Container>
        )
    }

}
