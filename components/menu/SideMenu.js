'use strict';

import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

// import {HomeItem, CountryItem, TourItem} from './MenuItems'
import Home from './../pages/Home/index';
import Country from  '../pages/Country/index'
import Tour from '../pages/Tour/index';


class MenuNavigator extends Component {
  constructor(props) {
    super(props);
    this._setNavigatorRef = this._setNavigatorRef.bind(this);
  }
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="Home" component={Home} initial={true} />
          <Scene key="Country" component={Country} />
          <Scene key="Tour" component={Tour} />
        </Scene>
      </Router>
    );
  }
  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }
  _setNavigatorRef(navigator) {
    if (navigator !== this._navigator) {
      this._navigator = navigator;
      if (navigator) {
        this._listeners = [
          navigator.navigationContext.addListener('willfocus', callback),
          navigator.navigationContext.addListener('didfocus', callback),
        ];
      }
    }
  }
}

export default MenuNavigator;
