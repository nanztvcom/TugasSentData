
import React, { Component } from 'react';
import { TouchableOpacity, View, ListView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, Card, CardItem, Thumbnail } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

var URL="http://mhs.rey1024.com/1415051095/thread.php";

class Bayu extends Component {
  
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
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
       results: [],
       id : '',
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

  newPage(index) {
    this.props.url(index);
    Actions.detail();
  }

  renderScene = (route) => {
    if(route.url){
      return(
        <Browser url={route.url} navigator={navigator} />
      );
    }
    return(
      <View style={styles.content}>
        <Text>Home</Text>
        <View>
          {this.state.dataSource.map(this.renderRow)}
        </View>
      </View>
    );
  }

  renderRow(record){
    return(
      
      <Card>
      <CardItem>
        <Left>
          <Thumbnail source={require('./../../../images/logo.png')} />
            <Body>
      <TouchableOpacity
          onPress={() => Actions.detail(record)}
      >
              <Text>{record.nama}</Text>
      </TouchableOpacity>
            </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image size={80} maxHeight={200} source={require('./../../../images/resep-masakan-khas-indonesia.jpg')}/>
      </CardItem>
      <CardItem>
        <Text>{record.judul}</Text>
      </CardItem>
      </Card>
      
      );
  }

  

  render() {
    this.AmbilData();
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>
          </Body>
          
          <Right>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Right>
          
        </Header>

        <Content>
          <Grid style={styles.mt}>
                  <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderScene={this.renderScene}
                    animate
                  />
          </Grid>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Bayu);
