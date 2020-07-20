import React from 'react';
import { NavigationInjectedProps } from 'react-navigation'
import { SafeAreaView, ViewStyle, Text } from 'react-native';
import { Button } from 'src/components';

interface Props extends NavigationInjectedProps {
}

export default class RecoveryScreen extends React.Component<Props> {
  render(): JSX.Element {
    const { navigation } = this.props;
    console.log('navigation: ', navigation);
    return <>
      <SafeAreaView style={styles.container}>
        <Text>Recovery screen</Text>
        <Button
          onPress={() => navigation.goBack()}
        >
          <Text>{'Вернуться'}</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('Main')}
        >
          <Text>{'Главная'}</Text>
        </Button>
      </SafeAreaView>
    </>;
  }
}

const styles: {
  container: ViewStyle;
} = {
  container: {
    flex: 1,
  },
};
