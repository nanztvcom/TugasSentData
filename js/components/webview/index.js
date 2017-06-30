
import React, { Component } from 'react';
import {WebView} from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, ListItem, Icon, Body, Container, Header, Title, } from 'native-base';
import { Actions } from 'react-native-router-flux';
import style from './styles';
import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';



class Peta extends Component {

   render() {
    return (
      <WebView
        source={{uri: 'https://www.google.co.id/maps/place/Universitas+Pendidikan+Ganesha/@-8.1165895,115.085677,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd21665cef49255:0x1abe2912c8d6af5a!8m2!3d-8.1165895!4d115.0878657?hl=en'}}
        style={{marginTop: 20}}
      />
    );
  }
}
function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
});

export default connect(null, bindAction)(Peta);
