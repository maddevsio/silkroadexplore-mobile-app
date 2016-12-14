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
    ActivityIndicator,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Dimensions,
    ListView,
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import {Menu, MenuButton} from './../../menu/MenuItems';
import { Actions } from 'react-native-router-flux';

import Feature from '../../parts/country_feature.js';
import PopularTour from '../../parts/popular_tour.js';
import styles from './styles';

const window = Dimensions.get('window');

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dataSource: [],
            country: '',
            isLoading: false,
            isErrorLoading: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({isOpen: isOpen});
    }

    componentDidMount() {
        let query = 'https://silkroadexplore.com/api-dev/?action=country&slug=' + this.props.name
        this._getCountry(query);
    }

    _getCountry(query) {
        console.log('query ->>', query)
        fetch(query)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    dataSource: json,
                    isLoading: true
                })
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
        this.props.navigator.replace({id: item});
    };

    _getFeatures(features) {
        return features.map(function(feature, index){
            return (
                <Feature
                    key={index}
                    name = {feature}
                    />
            )
        }.bind(this))
    }

    _getTour(tourId) {
        Actions.Tour({tourId: tourId})
    }

    _renderPopularToursItems(popularTours) {
        return popularTours.map(function(tour, index){
            return (
                <PopularTour
                    key={tour.tour_id}
                    onSelect = {() => this._getTour(tour.tour_id)}
                    tourPriceEur = {tour.tour_price_eur}
                    tourPriceUsd = {tour.tour_price_usd}
                    useEuro = {tour.use_euro}
                    tourDays = {tour.tour_days}
                    tourTitle = {tour.tour_title}
                    tourText = {tour.tour_description}
                    image = {tour.tour_preview_url[0]}
                    />
            )
        }.bind(this))
    }

    render() {
        if (!this.state.isLoading) {
            return this._loading();
        }
        let menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;
        let country = this.state.dataSource.country;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton name={this.props.name.toUpperCase()} onPress={() => this.toggle()}/>
                <ScrollView style={styles.content}>
                    <Image style={styles.tour_thumb} source={{uri: country.main_image}}></Image>

                    <Text style={styles.country_title}>{country.description3}</Text>
                    <Text style={styles.country_paragraph}>{country.description4}</Text>
                    {
                        this._getFeatures(country.features)
                    }
                    <Text style={styles.country_paragraph}>{country.description5}</Text>
                    {
                        this._renderPopularToursItems(country.tours)
                    }
                </ScrollView>
            </SideMenu>
        );


    }

    _loading () {
        return (
            <View>
                <View style={{marginTop: 60, alignItems:"center", width: window.width}}>
                    <ActivityIndicator
                        style={{height: 80}}
                        color="#000000"
                        size="large"
                        />
                    <Text style={{fontSize: 16}}>
                        Loading...
                    </Text>
                </View>
            </View>
        );
    }
}

export default Country;