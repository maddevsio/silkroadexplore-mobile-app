'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import styles from '../pages/Home/styles';

export default class CountryItem extends Component {
    render() {
        return(
            <TouchableOpacity name={this.props.name} onPress={this.props.onSelect}>
                <View style={styles.list_options}>
                    <Image source={{uri: this.props.image}} style={styles.destination_item}>
                        <View style={styles.destination_title__wrap}>
                            <Text style={styles.destination_title}>{this.props.name}</Text>
                        </View>
                    </Image>
                </View>
            </TouchableOpacity>
        );
    }
}