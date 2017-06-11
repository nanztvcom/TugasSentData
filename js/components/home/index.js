
import React, { Component, PropTypes } from 'react';
import { Alert, TouchableOpacity, View, ListView, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Form, Item, List, ListItem, Input, Label } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

var SERVER_LOGIN_URL = 'http://mhs.rey1024.com/1415051002/addKategori.php';


class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: "",
    };
  }

  onSave() {
    fetch(SERVER_LOGIN_URL + '?username=' + this.state.username + '&pass=' + this.state.pass)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Fail to Input");
         }
         else 
       {
          Actions.blank();
        }  
        
      })
      .done();
  }

  

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Tugas Send Data'}</Title>
          </Body>

        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
            <Label>Nama</Label>
              <Input 
                onChangeText={(e) => this.setState({ username: e })} 
                text = {this.state.username}
              />
            </Item>
            <Item floatingLabel>
            <Label>Alamat</Label>
              <Input 
                onChangeText={(e) => this.setState({ pass: e })} 
                text = {this.state.pass}
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

export default connect(mapStateToProps, bindAction)(Home);
