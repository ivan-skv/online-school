import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

export interface Props extends TouchableOpacityProps { }

export default class Footer extends React.PureComponent<Props> {
  gotoScreen = (route) => {
    // this.props.navigation.navigate(route);
    console.log(route)
  }
  render() {
    const { route = 'Personal' } = this.props;
    const items = [
      {
        content: <View style={styles.active} />,
        route: 'PersonalAccount',
      },
      {
        content: <View style={{ backgroundColor: '#C4C4C4'  }} />,
        route: 'News',
      },
      {
        content: <View style={{ backgroundColor: '#C4C4C4'  }} />,
        route: 'Timetable',
      },
      {
        content: <View style={{ backgroundColor: '#C4C4C4'  }} />,
        route: 'Catalog',
      },
      {
        content: <View style={styles.unactive} />,
        route: 'Dining',
      }
    ];
    return <View style={styles.container}>
      {items.map(item => (
        <TouchableOpacity
        style={[route === item.route ? styles.active : styles.unactive, styles.button]}
        onPress={this.gotoScreen(item.route)}
        >
          {item.content}
        </TouchableOpacity>
      ))}
    </View>
  }
}

const styles = {
  container: {
    // position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: 80,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  active: {
    backgroundColor: '#0038FF',
  },
  unactive: {
    backgroundColor: '#C4C4C4'
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
  }
}