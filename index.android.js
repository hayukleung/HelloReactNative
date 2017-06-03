/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

// 导入类库
var Dimensions = require('Dimensions');

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

// sample 1
class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    margin: 10,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginLeft: 10,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

// sample 2
class TitleBar extends Component {
  render() {
    return (
      <View style={styleForRootView.container}>
        <View style={stylesForTitleBar.container}>
          <Text style={stylesForTitleBar.text}>
            ReactNative
          </Text>
        </View>
        <Image
          style={styleForImage.shyaringan}
          source={require('./image/shyaringan.png')}/>
      </View>)
  }
}
var styleForRootView = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    height: Dimensions.get('window').height,
  },
});
var stylesForTitleBar = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    textAlign: 'center',
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#C0C0C0',
    marginTop: 12,
    marginBottom: 12,
  }
});
var styleForImage = StyleSheet.create({
  shyaringan: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    margin: 0,
    backgroundColor: '#FF00FF'
  },
});

// sample 3
export default class TestFlexbox extends Component {
  render() {
    return (
      <View style={styleForFlexbox.container}>
        <View style={styleForFlexbox.subViewStyle1}></View>
        <View style={styleForFlexbox.subViewStyle2}></View>
        <View style={styleForFlexbox.subViewStyle3}></View>
      </View>
    );
  }
}
const styleForFlexbox = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'row-reverse',
  },
  subViewStyle1: {
    backgroundColor: 'red',
    height: 60,
    width: 60,
  },
  subViewStyle2: {
    backgroundColor: 'yellow',
    height: 60,
    width: 60,
  },
  subViewStyle3: {
    backgroundColor: 'green',
    height: 60,
    width: 60,
  },
});

// sample 4
class Box extends Component {
  render() {
    return (
      <View style={styleForBox.view_1}>
        <View style={styleForBox.view_2}>
          <View style={styleForBox.view_3}>
            <Image
              style={styleForImage.shyaringan}
              source={require('./image/shyaringan.png')}/>
          </View>
        </View>
      </View>
    );
  }
}
var styleForBox = StyleSheet.create({
  view_1: {
    backgroundColor: '#FF0000',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_2: {
    backgroundColor: '#FF00FF',
    height: Dimensions.get('window').width / 4 * 3,
    width: Dimensions.get('window').width / 4 * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_3: {
    backgroundColor: '#FFFF00',
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
  },
});

// sample 5 View
class LearnView extends Component {
  render() {
    return (
      <View style={{flex: 1,}}>
        <View style={styleForLearnView.root}>
          <View style={[styleForLearnView.item, {alignItems: 'center', justifyContent: 'center',}]}>
            <Text style={styleForLearnView.font}>酒店</Text>
          </View>
          <View style={[styleForLearnView.item, styleForLearnView.lineLeft]}>
            <View style={[styleForLearnView.itemWithoutBorder, styleForLearnView.textCenter]}>
              <Text style={styleForLearnView.font}>海外酒店</Text>
            </View>
            <View style={styleForLearnView.line}></View>
            <View style={[styleForLearnView.itemWithoutBorder, styleForLearnView.textCenter]}>
              <Text style={styleForLearnView.font}>特惠酒店</Text>
            </View>
          </View>
          <View style={[styleForLearnView.item, styleForLearnView.lineLeft]}>
            <View style={[styleForLearnView.itemWithoutBorder, styleForLearnView.textCenter]}>
              <Text style={styleForLearnView.font}>团购</Text>
            </View>
            <View style={styleForLearnView.line}></View>
            <View style={[styleForLearnView.itemWithoutBorder, styleForLearnView.textCenter]}>
              <Text style={styleForLearnView.font}>客栈公寓</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
var styleForLearnView = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#FF0067',
    backgroundColor: '#FF0067',
    borderRadius: 15,
    padding: 2,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 80,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
  itemWithoutBorder: {
    flex: 1,
  },
  textCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lineLeft: {
    borderLeftWidth: 1 / PixelRatio.get(),
    borderColor: '#FFFFFF',
  },
  line: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: 1 / PixelRatio.get(),
  },
});

// sample 6 Text
const Header = require('./netease.header');
class Netease extends Component {
  render() {
    return (
      <View>
        <Header></Header>
        <List title="111111111111111111"></List>
        <List title="222222222222222222"></List>
        <List title="333333333333333333"></List>
        <List title="444444444444444444"></List>
        <ImportantNews news={[
          "AAAAAAAAAAAAAAAAAAAA",
          "BBBBBBBBBBBBBBBBBBBB",
          "CCCCCCCCCCCCCCCCCCCC",
          "DDDDDDDDDDDDDDDDDDDD",
        ]}></ImportantNews>
      </View>
    );
  }
}
class List extends Component {
  render() {
    return (
      <View style={styleForList.item}>
        <Text style={styleForList.font}>{this.props.title}</Text>
      </View>
    );
  }
}
var styleForList = StyleSheet.create({
  item: {
    justifyContent: 'center',
    height: 40,
    marginLeft: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#DDDDDD',
  },
  font: {
    fontSize: 16,
  },
});
class ImportantNews extends Component {

  show(title) {
    alert(title);
  }

  render() {
    var news = [];
    for (var i in this.props.news) {
      var text = (
        <Text
          onPress={this.show.bind(this, this.props.news[i])}
          style={{
            justifyContent: 'center',
            height: 40,
            marginLeft: 10,
          }}
          key={i}
        >{this.props.news[i]}</Text>
      );
      news.push(text);
    }
    return (
      <View>
        <Text style={{
          height: 40,
          fontSize: 20,
          color: '#CD1D1C',
          fontWeight: 'bold',
          justifyContent: 'center',
          marginLeft: 10,
          marginTop: 10,
        }}>
          今日要闻
        </Text>
        {news}
      </View>
    );
  }
}


AppRegistry.registerComponent('HelloReactNative', () => Netease);
