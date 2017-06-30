
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, TextInput, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Item, List, ListItem, Label  } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';
const basketIcon = require('./service.png');
var URL="http://mhs.rey1024.com/1415051002/SendingData/listview.php";


class BlankPage extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds,
    };
  }

  AmbilData() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }

  renderRow(record) {
    return (
      <ListItem>
        <Body>
         <View style={styles.row}>
      <View style={styles.iconContainer}>
          <Image source={basketIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.items}>{record.nama_des}</Text>
          <Text style={styles.address}>{record.alamat}</Text>
          <Text style={styles.address}>HP : {record.telp1}</Text>
          <Text style={styles.address}>HP : {record.telp2}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.date}>{record.nama_kategori}</Text>
            <Button primary style={styles.price} onPress={() => { Actions.peta(); }}><Text> Detail </Text></Button>
        </View>
      </View>
        </Body>
      </ListItem>
    );
  }

  render() {
    this.AmbilData();
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{(this.props.name) ? this.props.name : 'List Jasa'}</Title>
          </Body>

        </Header>

        <Content>
          <List>
            <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    />
          </List>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(BlankPage);
