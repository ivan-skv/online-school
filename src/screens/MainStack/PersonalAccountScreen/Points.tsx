import React from 'react'
// TODO
import { Text, View, ScrollView } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Button } from 'src/components';

class Points extends React.Component {
  state = {
    howto: 0,
  }

  onScreenChange = () => {
    const { howto } = this.state;
    this.setState({ howto: !howto });
  }
  render() {  
    const { user = {} } = this.props;
    const { points={} } = user;
    const {
      value=191,
      history=[{type: 'За победу', point: '+91'}, {type: 'Покупка', point: '-91'}, {type: 'За победу', point: '+91'}, {type: 'Покупка', point: '-91'}, {type: 'За победу', point: '+91'}, {type: 'Покупка', point: '-91'}],
      actions=[{type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}, {type: 'Мероприятие', points: '81'}]
    } = points;
    const { howto }=this.state;
    return <>
      <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
        {!howto ? <>
          <Button
            buttonType='transparent'
            style={{ alignSelf: 'flex-end' }}
            onPress={this.onScreenChange}
          >
            <Text style={{ textDecorationLine: 'underline' }}>Как получить?</Text>
          </Button>
          <View style={styles.personalView}>
            <View style={styles.left}>
              <Text>Количество</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.status}>{value}</Text>
            </View>
          </View>
          <Text>История</Text>
          <View style={[styles.personalView, { justifyContent: 'space-between', alignItems: 'center' }]}>
            <Button
              buttonType='transparent'
            >
              <Text>Все</Text>
            </Button>
            <Button
              buttonType='transparent'
            >
              <Text>Зачисление</Text>
            </Button>
            <Button
              buttonType='transparent'
            >
              <Text>Расход</Text>
            </Button>
          </View>
          {history.map(h => (
            <View style={styles.history}>
              <Text>{h.type}</Text>
              <Text>{h.point}</Text>
          </View>
          ))}
          </>
          : <>
          <Button
            buttonType='transparent'
            style={{ alignSelf: 'flex-end' }}
            onPress={this.onScreenChange}
          >
            <Text>Вернуться</Text>
          </Button>
          <Text>Список мероприятий:</Text>
          {actions.map(h => (
            <View style={styles.history}>
              <Text>{h.type}</Text>
              <Text>{h.points}</Text>
            </View>
          ))}
          </>
        }
      </ScrollView>
    </>}
}

export default Points;

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
    fontSize: 36,
    lineHeight: 42,
  },
  history: {
    flexDirection: 'row',
    wigth: '100%',
    borderWidth: 1,
    justifyContent: 'space-between',
    padding: 10
  }
}