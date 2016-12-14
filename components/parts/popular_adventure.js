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

export default class PopularAdventure extends Component {
    render() {
        return(
            <TouchableOpacity name={this.props.name} onPress={this.props.onSelect}>
                <View>
                    <Image source={{uri: this.props.image}} style={styles.adventure_item}/>
                    <View style={styles.adventure_title__wrap}>
                        <Text style={styles.adventure_title}>{this.props.name}</Text>
                    </View>

                    <View style={styles.adventure_cnt}><Text style={styles.adventure_counter}>{this.props.count}</Text></View>
                </View>
            </TouchableOpacity>
        );
    }
}