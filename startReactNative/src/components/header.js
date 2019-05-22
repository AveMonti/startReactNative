// Import Librares for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component

const Header = (props) => {
    const { viewStyle,textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {

    viewStyle: {
      backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
// Make the component avaiable to other part of the apps
export default Header;

