'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

import styles from '../pages/Home/styles';
const window = Dimensions.get('window');
export default class TourImage extends Component {
    render() {
        return(
            <View>
                <Image source={{uri: this.props.image}} style={{width: window.width, height: 220}}>
                </Image>
            </View>
        );
    }
}
