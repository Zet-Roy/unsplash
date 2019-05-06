import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import { withNavigation } from 'react-navigation';

class ViewImage extends React.Component {
    render() {
        console.log(this.props.navigation.state.params.url);
        return (
            <Image
                resizeMode='contain'
                style={styles.img}
                source={{ uri: this.props.navigation.state.params.url }}
            />
        )
    }
}

const styles = StyleSheet.create({
    img: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
});

export default withNavigation(ViewImage)