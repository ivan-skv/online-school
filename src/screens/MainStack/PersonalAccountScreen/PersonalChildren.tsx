import React from 'react'
// TODO
import { Text, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Button } from 'src/components';
import PersonalDocs from './PersonalDocs'

class PersonalChildren extends React.Component<Props> {
  render() {
    const { user = {}, navigation } = this.props;
    const { children = [{Name:'Константин', FatherName:'Константинович', SurName:'Константинопольский', status:'11 Ж', dob:'01.01.1999'}, {Name:'Константин', FatherName:'Константинович', SurName:'Константинопольский', status:'11 Ж', dob:'01.01.1999'}] } = user;
    return <>
      <View style={styles.container}>
        {children.map(child => (<>
          <View style={styles.personalView}>
            <View style={styles.left}>
              <Text>{child.Name}</Text>
              <Text>{child.FatherName}</Text>
              <Text>{child.SurName}</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.status}>{child.status}</Text>
              <Text>Дата рождения: {child.dob}</Text>
            </View>
          </View>
          {/* TODO: разбить PersonalDocs на компоненты и подключить */}
          <PersonalDocs />
          <View style={{ borderBottomWidth: 1 }} />
        </>))}
      </View>
    </>
  }
}

export default PersonalChildren;

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