import React from 'react'
// TODO
import { Text, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Button } from 'src/components';


class PersonalPays extends React.Component<Props> {
  render() {
    const { school = {}, navigation, user = {} } = this.props;
    const { schoolProps = [
      {
        prop: 'ИНН',
        value: '0000000000'
      },
      {
        prop: 'КПП',
        value: '0000000000'
      },
      {
        prop: 'БИК',
        value: '0000000000'
      },
      {
        prop: 'Р/с',
        value: '0000000000'
      }
    ]} = school;
    const {
      tickets = [{operation: 'Обеды детей', value: 1000}, {operation: 'Обеды детей', value: 1000}, {operation: 'Обеды детей', value: 1000}]
    } = user;
    return <>
      <View style={styles.container}>
        <Text style={styles.head}>Реквизиты школы:</Text>
        {schoolProps.map(sp => (
          <Text style={styles.list}>{sp.prop} {sp.value}</Text>
        ))}

        <Text style={styles.head}>Квитанции:</Text>
        {tickets.map((ticket, index) => (<View style={styles.payHistory}>
          <Text key={index}>{ticket.operation}</Text>
          <Text key={index}>{ticket.value} руб.</Text>
        </View>))}

        <Text style={styles.head}>Пожертвования:</Text>
        <Text style={styles.list}>Помогите развитию нашей школы пожертвовав любую сумму по реквизитам!</Text>
      </View>
    </>
  }
}

export default PersonalPays;

const styles = {
  container: {
    flex: 1,
    margin: 30,
  },
  head: {
    // fontFamily: Roboto,
    fontSize: 18,
    // display: flex,
    // alignItems: 'flex-start',
  },
  list: {
    fontSize: 12,
  },
  payHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1
  },
}