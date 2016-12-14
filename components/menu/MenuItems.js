'use strict';

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
const menuIcon = (<Icon name="ios-menu" size={30} color="#000" />);

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    _home = () => {
        Actions.popTo('Home');
    };

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <Text
                    onPress={this._home}
                    style={styles.item}>
                    Home
                </Text>
            </ScrollView>
        );
    }
}
class MenuButton extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <View style={styles.menuWrap}>

                <View style={{flex: 1}}>
                <Text style={styles.headerText}>{this.props.name}</Text>
                </View>
                <TouchableOpacity
                    onPress={this.handlePress.bind(this)}
                    style={styles.menuButton}
                    >
                    {menuIcon}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuWrap: {
        height: 80,
        padding: 20,
        paddingBottom: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    menuButton: {
        //width: 45,
        height: 30,
        position: 'absolute',
        //backgroundColor: '#ccc',
        left: 20,
        top: 35,
    },
    menuIcon: {
        width: 32,
        height: 32
    },
    headerText: {
        //paddingTop: 6,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
    },
    menu: {
        flex: 1,
        backgroundColor: '#fff',
        width: window.width,
        height: window.height,
        padding: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 20,
    },
});

export { Menu, MenuButton };
