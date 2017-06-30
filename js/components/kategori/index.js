
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';

import styles from './style';

class Kategori extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => { Actions.wc(); this.props.closeDrawer(); }} >
          <Text>Sedot WC</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.ac(); this.props.closeDrawer(); }} >
          <Text>Service AC</Text>
        </ListItem>
         <ListItem button onPress={() => { Actions.cs(); this.props.closeDrawer(); }} >
          <Text>Cleaning Service</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(Kategori);
