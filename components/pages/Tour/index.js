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
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Dimensions,
    Linking
} from 'react-native';

import styles from './styles';

import SideMenu from 'react-native-side-menu';
import {Menu, MenuButton} from './../../menu/MenuItems';
import Carousel from "react-native-carousel-control";

import TourImage from '../../parts/tour_image.js';

const window = Dimensions.get('window');

class Tour extends Component {
    constructor (props) {
        super(props);
        this._openLink = this._openLink.bind(this);
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

    updateMenuState(isOpen) {
        this.setState({isOpen: isOpen});
    }

    componentWillMount() {
        let query = 'https://silkroadexplore.com/api-dev/?action=tour&id=' + this.props.tourId
        this._getTour(query);
    }

    _getTour(query) {
        fetch(query)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    dataSource: json,
                    isLoading: true
                })
            })
            .catch((error) => {
                Alert.alert('Error', error.message);
            })
    }

    _renderTourImages(images) {
        return images.map(function (image) {
            return (
                <TourImage
                    key = {'ti'+image.id}
                    image = {image.full_size}
                    />
            )
        }.bind(this))
    }

    _getPlaces(places) {
        if(places.length > 0) {
            let placesStr = [];
            places.map(function(place, i){
                placesStr.push(place.name)
            });

            return <Text style={[styles.tour__description, styles.tour__places]}>{placesStr.join(', ')}</Text>;
        }
        return null;
    }

    _openLink (slug)  {
        if(slug) {
            let url = 'https://silkroadexplore.com/' + slug;
            console.log('URL', url);
            Linking.openURL(url).catch(err => Alert.alert('Error', err));
            //Linking.canOpenURL(url).then(supported => {
            //    if (!supported) {
            //        Alert.alert('Error', 'Can\'t handle url: ' + url);
            //    } else {
            //        return Linking.openURL(url);
            //    }
            //}).catch(err => Alert.alert('Error', err));
        }
        else {
            Alert.alert('Error', 'Can\'t handle url');
        }
    }

    render() {
        if (!this.state.isLoading) {
            return this._loading();
        }
        let menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;
        let tour = this.state.dataSource.tour;
        // TODO: Временое решение до деплоя slug
        let slug = (typeof tour.slug != 'undefined') ? tour.slug : null;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton name={() => null} onPress={() => this.toggle()}/>
                <ScrollView style={styles.content}>
                    <Text style={styles.tour__title}>{tour.name}</Text>
                    <Carousel>
                        {this._renderTourImages(tour.images)}
                    </Carousel>
                    <View style={styles.tour__property}>
                        <Text style={styles.tour__property_label}>Type</Text>
                        <Text style={styles.tour__property_value}>{tour.type}</Text>
                    </View>

                    <View style={styles.tour__property}>
                        <Text style={styles.tour__property_label}>Duration</Text>
                        <Text style={styles.tour__property_value}>{tour.days} days</Text>
                    </View>

                    <View style={styles.tour__property}>
                        <Text style={styles.tour__property_label}>Physical Demands</Text>
                        <Text style={styles.tour__property_value}>{tour.physical_demand}</Text>
                    </View>

                    <View style={styles.tour__property}>
                        <Text style={styles.tour__property_label}>Supplier</Text>
                        <Text style={styles.tour__property_value}>{tour.supplier}</Text>
                    </View>

                    <Text style={styles.tour__description}>{tour.short_description}</Text>

                    <Text style={styles.tour__places_head}>Places:</Text>

                    {
                        this._getPlaces(tour.places)
                    }

                    <View style={styles.tour__booking}>
                        <TouchableOpacity onPress={() => this._openLink(slug)}>
                            <View style={styles.main_tour__more_btn}>
                                <Text style={styles.main_tour__more_text}>MORE INFO AND BUY TOUR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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

export default Tour;