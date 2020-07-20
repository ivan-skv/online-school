import React from 'react'
// TODO
import { Text, SafeAreaView } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Button } from 'src/components';

const PersonalAccountScreen = (props: NavigationInjectedProps) => {
  const { navigation } = props;
  return <>
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{'Personal Account'}</Text>
      <Button onPress={() => navigation.navigate('Auth')}>
        <Text>{'Авторизация'}</Text>
      </Button>
    </SafeAreaView>
  </>
}

export default PersonalAccountScreen;