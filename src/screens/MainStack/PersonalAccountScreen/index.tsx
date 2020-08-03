import React from 'react'
// TODO
import { Text, SafeAreaView, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { TabView, SceneMap } from 'react-native-tab-view'
import { Button, Footer } from 'src/components'
import PersonalData from './PersonalData'
import Points from './Points'
import PersonalDocs from './PersonalDocs'
import PersonalChildren from './PersonalChildren'
import PersonalPays from './PersonalPays'

const PersonalAccountScreen = (props: NavigationInjectedProps) => {
  const { navigation, role = 'guest' } = props;
  const [index, setIndex] = React.useState(0);
  let routes;
  let renderScene;

  switch (role) {
    case 'employee':
      [routes] = React.useState([
        { key: 'personal', title: 'Личные данные' },
        { key: 'docs', title: 'Документы' },
      ]);
      renderScene = SceneMap({
        personal: PersonalData,
        docs: PersonalDocs
      });
    break;
    case 'parent':
      [routes] = React.useState([
        { key: 'personal', title: 'Личные данные' },
        { key: 'children', title: 'Дети' },
        { key: 'pays', title: 'Платежи' },
      ]);
      renderScene = SceneMap({
        personal: PersonalData,
        children: PersonalChildren,
        pays: PersonalPays
      });
      break;
    case 'student':
      [routes] = React.useState([
        { key: 'personal', title: 'Личные данные' },
        { key: 'points', title: 'Баллы' },
        { key: 'docs', title: 'Документы' },
      ]);
      renderScene = SceneMap({
        personal: PersonalData,
        points: Points,
        docs: PersonalDocs
      });
      break;
    default: break;
  }

  return <>
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      {role !== 'guest' && <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
      <Footer />
      </>}
    </SafeAreaView>
  </>
}

export default PersonalAccountScreen;