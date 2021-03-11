import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity } from "react-native"
import { BackgroundImage, TrickBox, Box, CustomButton, Title, Header, CustomText } from './styles.js'
const image = { uri: 'https://deivaotv.github.io/deividsabino/static/media/skate-01.d6499415.jpg' }
const black = { uri: 'https://media.istockphoto.com/videos/gray-dark-blade-abstract-background-seamless-loop-version-from-10-to-video-id810524820?s=640x640' }
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            base: [
                {
                    id: '0',
                    title: 'Base',
                },
                {
                    id: '1',
                    title: 'Switch',
                },
                {
                    id: '2',
                    title: 'Fakie',
                },
                {
                    id: '3',
                    title: 'Nolie',
                },
            ],
            side: [
                {
                    id: '0',
                    title: 'Front-side',
                },
                {
                    id: '1',
                    title: 'Back-side',
                },
                {
                    id: '2',
                    title: 'Front-side 360º',
                },
                {
                    id: '3',
                    title: 'Back-side 360º',
                }
            ],
            trick: [
                { id: '0', title: 'Ollie' },
                { id: '1', title: 'Flip' },
                { id: '2', title: 'Heelflip' },
                { id: '3', title: 'Pop shove-it' },
                { id: '4', title: 'Shove-it' },
                { id: '5', title: 'Bigspin' },
                { id: '6', title: '360º' },
                { id: '7', title: 'Varial-flip' },
                { id: '8', title: 'Varial-heel' },
                { id: '9', title: 'Impossible' },
                { id: '10', title: 'Hardflip' },
                { id: '11', title: 'Inward heelflip' },
                { id: '12', title: '360 Flip' },
                { id: '13', title: 'Laser Flip' },
                { id: '14', title: '360 Pop shove-it' },
                { id: '15', title: 'Double Flip' },
                { id: '16', title: 'Double Heelflip' }
            ],
            selectedTrick: '',
            finalTrick: [],
            isValid: false,
            errors: false,
            visible: true,
        }

    }

    Item = ({ title }) => (
        <View >
            <Text>{title}</Text>
        </View>
    );

    onNextStep = () => {
        const { selectedTrick, finalTrick } = this.state;
        if (!this.state.isValid) {
            this.setState({ errors: true });
        } else {
            finalTrick.push(selectedTrick)
            this.setState({ errors: false, isValid: false, finalTrick });
        }
    };

    onPreviousStep = () => {
        const { finalTrick } = this.state;
        finalTrick.pop();
        this.setState({ finalTrick })
    }

    Submit = () => {
        const { finalTrick, selectedTrick } = this.state;
        finalTrick.push(selectedTrick)
        this.setState({ visible: false })
    }

    handleTrick = (title) => {
        this.setState({ isValid: true, selectedTrick: title })
    }

    renderItem = ({ item }) => {
        return (
            <View >
                <TouchableOpacity onPress={() => this.handleTrick(item.title)}>
                    <Title fontSize="30px" color="#FFFFFF">{item.title}</Title>
                </TouchableOpacity>
            </View>
        )
    };

    render() {
        const { visible, finalTrick } = this.state;
        return (
            <BackgroundImage source={image}>
                <View style={{ flex: 1 }}>
                    {visible ?
                        <ProgressSteps
                            activeStepIconBorderColor="#541D29"
                            activeStepIconColor="#541D29"
                            activeLabelColor="#FFFFFF"
                            activeStepNumColor="#FFFFFF"
                            disabledStepIconColor="#3E3E3E"
                            progressBarColor="#3E3E3E"
                            completedProgressBarColor="#541D29"
                            completedStepIconColor="#541D29"
                        >
                            <ProgressStep
                                label="Base"
                                nextBtnText="Proximo"
                                previousBtnText="Voltar"
                                nextBtnTextStyle={{ color: '#FFFFFF', fontSize: 18 }}
                                onNext={this.onNextStep} errors={this.state.errors}
                                onPrevious={this.onPreviousStep}
                            >
                                <TrickBox backgroundColor="#541D29">
                                    <FlatList
                                        data={this.state.base}
                                        renderItem={this.renderItem}
                                        keyExtractor={item => item.id}
                                    />
                                </TrickBox>
                            </ProgressStep>
                            <ProgressStep
                                label="Base"
                                nextBtnText="Proximo"
                                previousBtnText="Voltar"
                                nextBtnTextStyle={{ color: '#FFFFFF', fontSize: 18 }}
                                previousBtnTextStyle={{ color: '#FFFFFF', fontSize: 18 }}
                                onNext={this.onNextStep} errors={this.state.errors}
                                onPrevious={this.onPreviousStep}
                            >
                                <TrickBox backgroundColor="#541D29">
                                    <FlatList
                                        data={this.state.side}
                                        renderItem={this.renderItem}
                                        keyExtractor={item => item.id}
                                    />
                                </TrickBox>
                            </ProgressStep>
                            <ProgressStep
                                label="Manobra"
                                nextBtnText="Proximo"
                                previousBtnText="Voltar"
                                finishBtnText="Finalizar"
                                nextBtnTextStyle={{ color: '#FFFFFF', fontSize: 18 }}
                                previousBtnTextStyle={{ color: '#FFFFFF', fontSize: 18 }}
                                finishBtnTextStyle={{ color: '#FFFFFF', fontSize: 18 }}
                                onNext={this.onNextStep} errors={this.state.errors}
                                onPrevious={this.onPreviousStep}
                                onSubmit={this.Submit}
                            >
                                <TrickBox backgroundColor="#541D29">
                                    <FlatList
                                        data={this.state.trick}
                                        renderItem={this.renderItem}
                                        keyExtractor={item => item.id}
                                    />
                                </TrickBox>
                            </ProgressStep>
                        </ProgressSteps>
                        :
                        <>
                            <Box backgroundColor="#541D29">
                                <Title textAlign="left" fontSize="35px" color="#FFFFFF">Agora é só tentar!</Title>

                                <Title textAlign="left" fontSize="25px" color="#FFFFFF">{finalTrick.toString().replace(',', ' ').replace(',', ' ').replace(',', ' ')}</Title>
                                <CustomButton
                                    onPress={() => this.props.navigation.navigate('Escolha sua manobra')}
                                >
                                    <CustomText textAlign="right" fontSize="15px" color="#FFFFFF">Bora tentar outra?</CustomText>
                                </CustomButton>
                            </Box>

                        </>
                    }
                </View>
            </BackgroundImage>
        )
    }
}
