import React from 'react';
import { View, Modal, Text } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirmation = ( {visible, children, onAccept, onDecline}) => {
    const { cardSectionStyle, textStyle, containerStyle}= styles;

    return (
        <Modal
            transparent
            visible = {visible}
            animationType = "slide"
            onRequestClose = { () => {} }

        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle} >
                    <Text style={textStyle} >
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress = {onAccept}>
                        Yes
                    </Button>

                    <Button  onPress = {onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );
}


const styles = {
    cardSectionStyle:{
        justifyContent: 'center',
        color: 'red'
    },
    containerStyle:{
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    textStyle:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    }
}

export { Confirmation } ;