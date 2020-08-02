import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../../components/Button'
import { NavigationInjectedProps } from 'react-navigation';

interface Props extends NavigationInjectedProps { };

export default class SchoolEntering extends React.Component<Props> {
  renderButton = (routeName: string, index: number) => {
    const { navigation } = this.props;
    return <Button
      key={index}
      title={routeName}
      onPress={() => {
        console.log('navigate', routeName)
        navigation.navigate(routeName)
      }}
    />
  }

  render() {
    const keys = ['AboutSchool', 'Canteen', 'Catalog', 'Courses', 'News', 'PersonalAccount', 'SchoolEntering', 'Timetable'];
    return <View style={{ flex: 1 }}>
      <Text>SchoolEntering</Text>
      <View style={{ flexDirection: 'column' }}>
        {keys.map(this.renderButton)}
      </View>
    </View>
  }
}