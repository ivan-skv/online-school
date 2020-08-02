import React from 'react'
import { Image, ImageProps, ImageSourcePropType, ImageRequireSource, ImageStyle, StyleProp } from 'react-native'
import defaultIcon from '../../resources/images/school-icon.png'

interface Props extends Partial<ImageProps> {
  uri?: string;
}

const Icon: React.FC<Props> = (props) => {
  const { uri, defaultSource, style, ...restProps } = props;
  return <Image
    {...restProps}
    resizeMode="contain"
    style={[styles.image, style]}
    source={uri ? { uri } : defaultSource as ImageSourcePropType}
  />
}

Icon.defaultProps = {
  defaultSource: defaultIcon,
}

const styles: {
  image: StyleProp<ImageStyle>;
} = {
  image: {
    maxWidth: 200,
    maxHeight: 2000,
  },
}

export default Icon;