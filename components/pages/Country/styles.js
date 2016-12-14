/**
 * Created by M1rotvorez on 10.08.16.
 */
var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    menuWrap: {
        height: 80,
        padding: 20,
        paddingTop: 10,
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    menuButton: {
        width: 40,
        height: 40,
    },
    menuIcon: {
        width: 32,
        height: 32,
        backgroundColor: 'transparent'
    },
    menu: {
        flex: 1,
        backgroundColor: 'red',
        width: window.width,
        height: window.height,
        padding: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 20,
    },
    content: {
        paddingTop: 25,
        backgroundColor: '#245772'
    },
    page: {
        flex: 1,
        alignItems: 'center',
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
    },
    tour_thumb: {
        width: width,
        height: 200,
    },
    country_title: {
        textAlign: 'center',
        marginTop: 20,
        color: '#fff',
        fontSize: 18
    },
    country_text2: {
        textAlign: 'center',
        marginTop: 20,
        color: '#fff',
    },
    country_text: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        color: '#fff',
    },
    country_paragraph: {
        margin: 10,
        color: '#fff',
        textAlign: 'justify',
        fontSize: 14
    },
    country__feature: {
        flex:1,
        flexDirection: 'row',
        marginLeft: 25,
        alignItems: 'center',
        marginBottom: 10
    },
    country__feature_text: {
        color: '#fff',
        marginLeft: 10
    }

});