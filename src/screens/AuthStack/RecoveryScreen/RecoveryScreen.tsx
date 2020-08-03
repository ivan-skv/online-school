import React from 'react';
import { NavigationInjectedProps } from 'react-navigation'
import { SafeAreaView, ViewStyle, Text } from 'react-native';
import { Button, Input } from 'src/components';

interface Props extends NavigationInjectedProps {
}

export default class RecoveryScreen extends React.Component<Props> {
  render(): JSX.Element {
    const { navigation } = this.props;
    console.log('navigation: ', navigation);
    return <>
      <SafeAreaView style={styles.container}>
        <Text style={{ marginBottom: 40 }}>Введите почту для восстановления пароля</Text>
        <Input
          placeholder={'Email'}
          style={{ marginBottom: 60 }}
        />
        <Button
          onPress={() => navigation.navigate('Main')}
          style={{ flex: 0 }}
        >
          <Text>{'Восстановить'}</Text>
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
    marginHorizontal: 30,
  },
};
