import React from 'react'
// TODO
import { Text, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Button } from 'src/components';


class PersonalData extends React.Component<Props> {
  render() {
    const { user = {}, navigation } = this.props;
    const onLogin = () => { navigation.navigate('Login') }
    const { Name='Константин', FatherName='Константинович', SurName='Константинопольский', status='11 Ж', dob='01.01.1999' } = user;
    return <>
      <View style={styles.container}>
        <View style={styles.personalView}>
          <View style={styles.left}>
            <Text>{Name}</Text>
            <Text>{FatherName}</Text>
            <Text>{SurName}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.status}>{status}</Text>
          </View>
        </View>
        <View style={{flex: 1}} />
        <Text>Дата рождения: {dob}</Text>
        <View style={{flex: 1}} />
        <Button
          buttonType='transparent'
          onPress={onLogin}
        >
          <Text>Выход</Text>
        </Button>
      </View>
    </>
  }
}

export default PersonalData;

const styles = {
  container: {
    flex: 1,
    margin: 30,
  },
  personalView: { flexDirection: 'row' },
  left: { flex: 1 },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    fontFamily: 'Roboto',
    // fontStyle: normal,
    // fontWeight: normal,
    fontSize: 36,
    lineHeight: 42,
  }
}