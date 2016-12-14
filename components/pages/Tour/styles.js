/**
 * Created by M1rotvorez on 10.08.16.
 */
var React = require('react-native');

var { StyleSheet, Dimensions } = React;
const window = Dimensions.get('window');
module.exports = StyleSheet.create({
    content:{
        paddingTop: 25,
        backgroundColor: '#245772'
    },
    tour__title: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    tour__property: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    tour__property_label: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
    },
    tour__property_value: {
        color: '#fff',
        fontSize: 16,
    },
    tour__description: {
        color: '#fff',
        padding: 5,
        fontSize: 14,
        textAlign: 'justify'
    },
    tour__places_head: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    tour__places: {
        marginTop: 15,
        marginBottom: 15,
    },

    tour__booking: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    main_tour__more_btn: {
        backgroundColor: '#00E676',
        padding: 5,
        borderRadius: 3,
        width: window.width - 50
    },
    main_tour__more_text: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'
    }
});