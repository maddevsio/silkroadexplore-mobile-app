var React = require('react-native');

var { StyleSheet, Dimensions } = React;
const window = Dimensions.get('window');
module.exports = StyleSheet.create({
    content:{
        paddingTop: 25,
        backgroundColor: '#245772'
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        marginBottom: 15
    },
    popular_title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        marginBottom: 15,
        marginTop: 10
    },
    text: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center',
        marginTop: 10,
        paddingBottom: 10
    },
    mainBG_destination: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    home_destination:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    destination_item: {
        //width: 320,
        height: 200,
        width: window.width,
        borderRadius: 10,
        justifyContent: 'flex-end'
    },
    list_options:{
    },
    destination_title__wrap:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flex: 1
    },
    destination_title:{
        fontSize: 22,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff'
    },
    tour:{
        flex: 1,
        alignItems: 'center',
    },
    tour_thumb:{
        width: 320,
        height: 200,
        justifyContent: 'flex-end'
    },
    tour_price:{
      marginBottom: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      width: 100,
      height: 30,
      color: '#38CA73',
      paddingTop: 3,
      paddingLeft: 5
    },
    tour_title:{
      width: 320,
      fontSize: 18,
      color: "#000",
      textAlign: 'left',
      marginTop: 10,
      paddingBottom: 10
    },
    border:{
      borderBottomWidth : 1,
      borderBottomColor: '#ccc',
      //width: window.width-10,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 15,
      marginBottom: 25
    },
    destination_wrap:{
        marginBottom: 30
    },
    adventure_item: {
        height: 200,
        width: window.width,
        justifyContent: 'flex-end'
    },
    adventure_cnt: {
        backgroundColor: '#1B5E20',
        //flex:1,
        bottom:0,
        left:0,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    adventure_counter: {
        color: '#fff'
    },
    adventure_title__wrap:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 20,
        width: window.width,
        position: 'absolute',
        top: 0
    },
    adventure_title:{
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    main_tour: {
        marginBottom: 20
    },
    main_tour__days: {
        backgroundColor: '#1B5E20',
        //flex:1,
        bottom:0,
        left:0,
        paddingLeft: 3,
        paddingRight: 3,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    main_tour__title_wrap: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1
    },
    main_tour__title: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    main_tour__text: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'justify',
        padding: 5
    },
    main_tour__bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    main_tour__price_wrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    main_tour__from: {
        fontSize: 14,
        color: '#fff',
        marginRight: 10
    },
    main_tour__price: {
        fontSize: 20,
        color: '#fff'
    },
    main_tour__more_btn: {
        backgroundColor: '#00E676',
        padding: 5,
        borderRadius: 3
    },
    main_tour__more_text: {
        fontSize: 14,
        color: '#fff'
    }

});
