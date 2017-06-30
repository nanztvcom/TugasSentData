
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00BCD4',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn1: {
    marginTop: 5,
    marginLeft: 250,
    alignSelf: 'center',
    backgroundColor: '#00ACC1',
  },
  btn: {
    marginTop: -45,
    alignSelf: 'center',
    marginLeft: 60,
    backgroundColor: '#00ACC1',
  },
};
