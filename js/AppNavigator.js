
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import { closeDrawer } from './actions/drawer';

import Home from './components/home/';
import BlankPage from './components/blankPage';
import Login from './components/login';
import SideBar from './components/sideBar';
import SedotWC from './components/sedotwc';
import Regis from './components/regis';
import Kategori from './components/kategori';
import WC from './components/addWC';
import AC from './components/addAC';
import CS from './components/addCS';
import Peta from './components/webview';
import { statusBarColor } from './themes/base-theme';


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
  }


  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }


  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'login':
        return <Login />;
      case 'blank':
        return <BlankPage />;
        case 'sideBar':
        return <SideBar />;
      case 'sedotwc':
        return <SedotWC />;
      case 'regis':
        return <Regis />;
      case 'kategori':
        return <Kategori />;
      case 'wc':
        return <WC />;
        case 'ac':
        return <AC />;
        case 'cs':
        return <CS />;
        case'peta':
        return <Peta />
      default :
        return <Home />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<Login />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="default"
        />
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar initial />
            <Scene key="blank" component={BlankPage}/>
            <Scene key="sideBar" component={SideBar}/>
            <Scene key="sedotwc" component={SedotWC}/>
            <Scene key="regis" component={Regis}/>
            <Scene key="kategori" component={Kategori}/>
            <Scene key="wc" component={WC}/>
            <Scene key="ac" component={AC}/>
            <Scene key="cs" component={CS}/>
            <Scene key="peta" component={Peta}/>
    
          </Scene>
        </RouterWithRedux>
      </Drawer>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
