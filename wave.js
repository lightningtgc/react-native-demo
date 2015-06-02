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
      },
  _onPress: function() {
    console.log('starting animation');
    // Animation.startAnimation(this.refs['this'], 800, 0, 'easeInOutQuad', {scaleXY: [5, 5]});
    LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
    this.setState({boxOpen:!this.state.boxOpen})
     setTimeout(() => {
      LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
      this.setState({boxOpen:!this.state.boxOpen})
    }, 800);

  },

  render: function() {
    var boxStyle =  this.state.boxOpen === true ? 
    styles.boxOpen :
    styles.boxClosed

    return (

          <TouchableOpacity onPress={this._onPress}>
            <View style={styles.container} >
              <Text style={styles.text}>
                Button 
              </Text>
              <View ref='this' style={boxStyle}></View>
            </View>              
          </TouchableOpacity>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top:100,
    left: 100,
    width: 80,
    height: 30,
    backgroundColor: 'rgb(0, 188, 212)',
    overflow: 'hidden',
     shadowOffset:{
            width: 1,
            height: 3,
        },
        shadowColor: 'black',
        shadowOpacity: 0.5,

  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  boxClosed:{
    backgroundColor:'yellow', 

    borderRadius: 500,
    opacity: 0
  },
  boxOpen:{
      position: 'absolute',
      top: -50,
      left: -20,
    backgroundColor:'yellow', 
    width: 200, 
    height: 200,
    borderRadius: 600,
    opacity: 0.3
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
        delay: 0,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

AppRegistry.registerComponent('materialui', () => WebViewApp);
