import React from 'react'
// TODO
import { Text, View, Image, ScrollView } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Button } from 'src/components';
import { FlatList } from 'react-native-gesture-handler';

const flatItem = (item) => (
  <View style={styles.item}>
    <Image source={item.img} style={styles.img} />
    <Text style={styles.docName} numberOfLines={2}>{item.doc}</Text>
  </View>
)

const PersonalDocs = (props: NavigationInjectedProps) => {
  const { user = {} } = props;
  const { docs = [{doc: 'Свидетельство о рождении', img: null}, {doc: 'Страховой полис', img: null}, {doc: 'Паспорт', img: null}, {doc: 'Военный билет', img: null} ] } = user;
  return <>
    <ScrollView style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        // keyExtractor={index => index}
        data={docs}
        renderItem={item => flatItem(item.item)}
        style={{ height: 96, flex: 0.1 }}
      />
      <Text>Заявка на получение справок:</Text>
      <View style={styles.buttons}>
        <Button
          buttonType='filled'
          style={styles.btn}
          // onPress={()=>this.props.navigation.navigate('Login')}
        >
          <Text style={styles.btnTxt}>Об обучение в школе</Text>
        </Button>
        <Button
          style={styles.btn}
          // onPress={()=>this.props.navigation.navigate('Login')}
        >
          <Text style={styles.btnTxt}>Скидка на проезд</Text>
        </Button>
      </View>
      <View style={{ flex: 1 }} />
    </ScrollView>
  </>
}

export default PersonalDocs;

const styles = {
  container: {
    flex: 1,
    margin: 30,
  },
  item: {
    width: 87,
    height: 94,
    marginRight: 20,
    alignItems: 'center',
  },
  img: {
    width: 61,
    height: 61,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  docName: {
    width: 87,
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 134,
    height: 48,
    borderRadius: 6,
    flex: 0,
    padding: 10
  },
  btnTxt: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
}