import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { getListImagesDataActions } from '../redux/actions/listImagesDataActions';
import { withNavigation } from 'react-navigation';

class ListImages extends React.Component {

    componentWillMount() {
        this.props.getListImagesDataActions();
    }

    _keyExtractor = (item, index) => item.id;

    flatListItemSeparator = () => (
        <View style={{ height: 1, backgroundColor: 'black', marginTop: 10, marginBottom: 10 }}></View>
    )

    listHeaderComponent = () => (
        <View style={{ height: 30 }}></View>
    )

    listFooterComponent = () => (
        <View style={{ height: 30 }}></View>
    )

    renderItemData = ({ item }) => (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('ScreenImage', { url: item.urlImageBig })
                }}
                style={styles.button}
            >
                <Image
                    resizeMode='contain'
                    style={styles.img}
                    source={{ uri: item.urlImageSmall }}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    )

    render() {
        return (
            <FlatList
                data={this.props.listUsers}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItemData}
                ItemSeparatorComponent={this.flatListItemSeparator}
                ListHeaderComponent={this.listHeaderComponent}
                ListFooterComponent={this.listFooterComponent}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.listUsersData.data.results
    }
}

const mapDispatchToProps = { getListImagesDataActions }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(ListImages))

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    button: {
        width: Dimensions.get('window').width - 100,

    },
    text: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 22,
        color: 'black',
        textAlign: 'center'
    },
    img: {
        height: 300,
    }
});