import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    FlatList,
    Image,
    StyleSheet
} from 'react-native'
import ListImages  from '../components/ListImages';

class ScreenListImages extends React.Component {
    static navigationOptions = {
        title: 'Список пользователей',
    };

    render() {
        return (
            <View style={styles.container}>
                <ListImages />
            </View>
        )
    }
}

export default ScreenListImages 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0FFFF'
    },
});