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
    Dimensions,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import { Actions } from 'react-native-router-flux';
import Carousel from "react-native-carousel-control";
import CountryItem from '../../parts/country_item';
import PopularAdventure from '../../parts/popular_adventure.js';
import PopularTour from '../../parts/popular_tour.js';

import {Menu, MenuButton} from './../../menu/MenuItems';
import styles from './styles';
const window = Dimensions.get('window');

export default class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
            isLoading: false,
            dataSource: []
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    _getCountry(slug) {
        Actions.Country({name: slug})
    }

    updateMenuState(isOpen) {
        this.setState({isOpen: isOpen});
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
        this.props.navigator.replace({id: item});
    };

    componentWillMount() {
        var query = 'https://silkroadexplore.com/api-dev/?action=main';
        this._getHome(query);
    }

    _getHome(query) {
        fetch('http://45.55.232.154/api-dev/?action=main',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            })
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
    _getAdventure(slug){
        Alert.alert('In development')
    }

    _loading () {
        return (
            <View style={styles.loading}>
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

    _renderCountryItems(countries) {
        return countries.map(function (country, index) {
            return (
                <CountryItem
                    key = {index}
                    onSelect = {()=> this._getCountry(country.slug)}
                    name = {country.name}
                    image = {country.image}
                    />
            )
        }.bind(this))
    }
    _renderAdventureItems(adventures) {
        return adventures.map(function(adventure, index){
            return (
                <PopularAdventure
                    key = {index}
                    onSelect = {() => this._getAdventure(adventure.slug)}
                    name={adventure.name}
                    image={adventure.image}
                    count={adventure.count}
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
        if(!this.state.isLoading) {
            return this._loading();
        }
        let menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;
        let countries = this.state.dataSource.tour_countries;
        let adventures = this.state.dataSource.main_adventures;
        let popularTours = this.state.dataSource.main_tours;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton name={'SILKROADEXPLORE'} onPress={() => this.toggle()}/>

                <ScrollView style={styles.content}>
                    <Text style={styles.title}>Popular country for tourism </Text>
                    <Carousel>
                        {
                            this._renderCountryItems(countries)
                        }
                    </Carousel>
                    <Text style={styles.popular_title}>Popular adventures</Text>
                    <Carousel>
                        {
                            this._renderAdventureItems(adventures)
                        }
                    </Carousel>
                    <Text style={styles.popular_title}>Popular tours</Text>
                    <View>
                        {
                            this._renderPopularToursItems(popularTours)
                        }
                    </View>
                </ScrollView>
            </SideMenu>
        );
    }
}