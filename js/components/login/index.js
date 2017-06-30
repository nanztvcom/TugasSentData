
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Alert, TouchableOpacity, View, ListView, Image, TextInput } from 'react-native';

import { setUser } from '../../actions/user';
import styles from './styles';

var SERVER_LOGIN_URL = 'http://mhs.rey1024.com/1415051002/login.php';

const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: "",
    };
  }


onSave() {
    fetch(SERVER_LOGIN_URL + '?email=' + this.state.email + '&password=' + this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Data ada yang salah");
         }
         else 
       {
          Alert.alert("Login Sukses");
          Actions.sideBar();
        }  
        
      })
      .done();
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input placeholder="EMAIL" 
                   keyboardType={'email-address'}
                  onChangeText={(e) => this.setState({ email: e })}  />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                    onChangeText={(e) => this.setState({ password: e })} 
                  />
                </Item>
               <Button primary style={styles.btn1} onPress={() => this.onSave()}><Text> Login </Text></Button>
                <Button primary style={styles.btn} onPress={() => { Actions.regis(); }}><Text> Register </Text></Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
  };
}


export default connect(null, bindActions)(Login);
