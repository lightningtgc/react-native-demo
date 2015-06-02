'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} = React;

var WebViewApp = React.createClass({

  getInitialState: function() {
    return {boxOpen:false}
  },
  componentDidMount: function() {
    console.log('mounted');
    // setTimeout(() => {
    //   LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
    //   this.setState({boxOpen:!this.state.boxOpen})
    // }, 0);
  },
  _onPress: function() {
    console.log('starting animation');
    // Animation.startAnimation(this.refs['this'], 800, 0, 'easeInOutQuad', {scaleXY: [5, 5]});
    LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
    this.setState({boxOpen:!this.state.boxOpen})
  },

  render: function() {
    var boxStyle =  this.state.boxOpen === true ? 
    styles.boxOpen :
    styles.boxClosed

    return (

          <TouchableOpacity style={styles.container} onPress={this._onPress}>
            <View>
              <Text style={styles.text}>
                Click here to start animation!
              </Text>
              <View ref='this' style={boxStyle} />
            </View>              
          </TouchableOpacity>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    top:200,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
  },
  boxClosed:{
    backgroundColor:'red', 

    width: 50, 
    height: 50,
    margin: 5,
    borderRadius: 500,
  },
  boxOpen:{
    backgroundColor:'red', 
    width: 550, 
    height: 550,
    borderRadius: 500,
  }
});


var animations = {
  layout: {
    spring: {
      duration: 750,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 400,
      },
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleY,
      },
      update: {
        delay: 200,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

// AppRegistry.registerComponent('WebViewApp', () => WebViewApp);

AppRegistry.registerComponent('materialui', () => WebViewApp);
