'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import styles from '../pages/Country/styles';
import Icon from 'react-native-vector-icons/Ionicons';
const featureIcon = (<Icon name="ios-checkmark-circle-outline" size={25} color="#fff" />);

export default class Feature extends Component {
    render() {
        return(
            <View style={styles.country__feature}>
                {featureIcon}
                <Text style={styles.country__feature_text}>{this.props.name}</Text>
            </View>
        );
    }
}