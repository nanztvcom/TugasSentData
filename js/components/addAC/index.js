
import React, { Component, PropTypes } from 'react';
import { Alert, TouchableOpacity, View, ListView, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Item, List, ListItem, Input, Label } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './style';

var SERVER_LOGIN_URL = 'http://mhs.rey1024.com/1415051002/SendingData/addac.php';


class AC extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      nama_des: "",
      alamat: "",
      telp1:"",
      telp2: "",
      id_kategori:"",

    };
  }

  onSave() {
    fetch(SERVER_LOGIN_URL + '?nama_des=' + this.state.nama_des + '&alamat=' + this.state.alamat + '&telp1=' + this.state.telp1 + '&telp2=' + this.state.telp2)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Fail to Input");
         }
         else 
       {
         Alert.alert("Jasa berhasil ditambahkan");
          Actions.sideBar();
        }  
        
      })
      .done();
  }

  

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Buka Jasa'}</Title>
          </Body>

        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
            <Label>Nama Jasa</Label>
              <Input 
                onChangeText={(e) => this.setState({ nama_des: e })} 
                 keyboardType={'email-address'}
                text = {this.state.nama_des}
              />
            </Item>
            <Item floatingLabel>
            <Label> Alamat</Label>
              <Input 
                onChangeText={(e) => this.setState({ alamat: e })} 
                text = {this.state.alamat}
              />
            </Item>
            <Item floatingLabel>
            <Label> No Telpon </Label>
              <Input 
                onChangeText={(e) => this.setState({ telp1: e })} 
                keyboardType={'phone-pad'}
                text = {this.state.telp1}
              />
            </Item>
            <Item floatingLabel>
            <Label> No Telpon Kedua (Jika Ada) </Label>
              <Input 
                onChangeText={(e) => this.setState({ telp2: e })} 
                 keyboardType={'phone-pad'}
                text = {this.state.telp2}
              />
            </Item>
          </Form>
          <Button primary style={styles.confirm} onPress={() => this.onSave()}><Text> Simpan </Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(AC);
