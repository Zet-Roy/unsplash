import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    FlatList,
    Image,
    StyleSheet
} from 'react-native'
import ViewImage from '../components/ViewImage';

class ScreenImage extends React.Component {

    static navigationOptions = {
        title: 'Фото',
    };

    render() {
        return (
            <View style={styles.container}>
                <ViewImage />
            </View>
        )
    }
}

export default ScreenImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFF0'
    },
});