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

export default class PopularTours extends Component {
    render() {
        let mainTourGuaranties = (this.props.mainTourGuaranties) ?
            <View style={styles.main_tour__guaranties}><Text style={styles.adventure_counter}>{this.props.count}</Text></View>
            :
            null;

        let price =  (this.props.useEuro == '1') ?
            <View style={styles.main_tour__price_wrap}>
                <Text style={styles.main_tour__from}>from</Text>
                <Text style={styles.main_tour__price}>{this.props.tourPriceEur}€</Text>
            </View>
            :
            <View style={styles.main_tour__price_wrap}>
                <Text style={styles.main_tour__from}>from</Text>
                <Text style={styles.main_tour__price}>${this.props.tourPriceUsd}</Text>
            </View>;
        return(
            <View style={styles.main_tour}>
                <View>
                    <Image source={{uri: this.props.image}} style={styles.adventure_item}/>

                    <View style={styles.main_tour__days}><Text style={styles.adventure_counter}>{this.props.tourDays} days</Text></View>

                </View>
                <View style={styles.main_tour__title_wrap}>
                    <Text style={styles.main_tour__title}>{this.props.tourTitle}</Text>
                </View>

                <View>
                    <Text style={styles.main_tour__text}>{this.props.tourText}</Text>
                </View>
                <View style={styles.main_tour__bottom}>
                    {price}
                    <TouchableOpacity onPress={this.props.onSelect}>
                        <View style={styles.main_tour__more_btn}>
                            <Text style={styles.main_tour__more_text}>MORE INFO</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}