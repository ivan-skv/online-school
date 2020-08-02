import React from 'react'
import { ViewStyle, StyleProp } from 'react-native'
import { OutlinedTextField, TextFieldProps, TextField } from 'react-native-material-textfield'

interface Props extends TextFieldProps {
  onSubmit?: (value: string) => void;
}

export { Props as InputProps }

export default class Input extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  private ref?: OutlinedTextField;
  private textRef?: TextField;

  public static defaultProps: Partial<Props> = {
    label: '',
    keyboardType: 'default'
  }

  private onSubmit = () => {
    const { onSubmit } = this.props;
    if (this.ref) {
      onSubmit && onSubmit(this.ref.value());
    }
  }

  getRef = (ref: OutlinedTextField): void => {
    this.ref = ref;
  }

  getTextFieldRef = (textRef: TextField): void => {
    this.textRef = textRef;
  }

  render() {
    const {
      containerStyle,
      inputContainerStyle,
      ...restProps
    } = this.props;
    return (
      <OutlinedTextField
        {...restProps}
        containerStyle={[styles.containerStyle, containerStyle]}
        inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
        style={{}}
        ref={this.getRef}
        onEndEditing={this.onSubmit}
      />
    )
  }
}

const styles: {
  containerStyle: StyleProp<ViewStyle>;
  inputContainerStyle: StyleProp<ViewStyle>;
} = {
  containerStyle: {
    flex: 1,
    minWidth: 200,
    maxHeight: 50,
  },
  inputContainerStyle: {
    maxHeight: 50,
  },
}
