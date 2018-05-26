//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Button extends Component {
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 56,
        width: 56,
    },
});

//make this component available to the app
export default Button;
