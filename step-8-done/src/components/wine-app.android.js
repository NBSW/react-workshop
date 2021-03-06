import React, { PropTypes, Navigator, BackAndroid, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Regions } from './regions';
import { styles } from './style';

const mapStateToProps = (state) => {
  return {
    title: state.title,
    httpState: state.http.state,
    httpError: state.http.error
  };
}

export const WineApp = connect(mapStateToProps)(React.createClass({
  propTypes: {
    children: PropTypes.element,
    dispatch: PropTypes.func.isRequired,
    httpError: PropTypes.string,
    httpState: PropTypes.string,
    title: PropTypes.string.isRequired
  },

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  },

  handleBackButton() {
    if (!this.isOnMainScreen) {
      this.navigator.pop();
      return true;
    }
    return false;
  },

  renderScene(route, nav) {
    if (!this.navigator) {
      this.navigator = nav;
      BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    const Component = route.component;
    const props = route.passProps || {};
    const title = route.title;
    if (Component === Regions) {
      this.isOnMainScreen = true;
    } else {
      this.isOnMainScreen = false;
    }
    return (
      <View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>{this.props.title}</Text>
          </View>
          <Component {...props}
              navigator={nav}
              title={title} />
      </View>
    );
  },

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromBottom;
  },

  render() {
    return (
        <Navigator
            style={styles.navigatorandroid}
            initialRoute={{ id: 'regions', title: 'Régions viticoles', component: Regions }}
            renderScene={this.renderScene}
            configureScene={this.configureScene} />
    );
  }

}));
